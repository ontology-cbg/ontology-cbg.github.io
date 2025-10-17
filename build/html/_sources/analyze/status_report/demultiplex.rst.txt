.. _demultiplex:


======================
Demultiplex
======================

This section describes the steps involved in demultiplexing reads based on specific Universal Molecular Identifiers (UMIs) at the 5' end of sequences.

Task Overview
-------------

Demultiplexing allows multiple samples to be sequenced in a single run, significantly reducing costs and maximizing resource efficiency. 

The demultiplexing process separates sequences based on UMIs found at both ends of the reads. It then filters reads, moves files into appropriate directories, renames the files based on mapping, and performs additional filtering by read length. The process ends by generating a summary of the read count.

Steps
-----

1. **Search for UMIs at the 5' End**:

   Using `cutadapt`, the script searches for all 96 UMIs at the 5' end of sequences. The UMIs are provided through a reference FASTA file, and sequences are demultiplexed into separate files based on their UMI.

   Example Code:

   .. code-block:: python

      cutadapt_trim5_cmd = [
          str(cutadapt_path),
          '-j', str(self.cores),  # Number of cores
          '-e', '2',  # Maximum error rate
          '-O', '12',  # Minimum overlap
          '-g', f'file:{os.path.join(app_dir, "data/PRIMERS/PacBio_V2_UMI1-96.fasta")}',  # Adapter file
          '-o', 'trimmed-{name}.for5.fasta',  # Output file pattern
          'all.fasta'  # Input file
      ]
      subprocess.run(cutadapt_trim5_cmd, capture_output=True)


   .. code-block:: bash

      cutadapt -j <max_cores> -e 2 -O 12 -g file:<UMI_file_path> -o trimmed-{name}.for5.fasta all.fasta


   Where:

      - ``-j <max_cores>``: Specifies the number of CPU cores to use.
      - ``-e 2``: Allows a maximum error rate of 2 mismatches.
      - ``-O 12``: Requires a minimum overlap of 12 bases for the adapter (UMI) to match.
      - ``-g file:<UMI_file_path>``: Specifies the file containing the UMI sequences.
      - ``-o trimmed-{name}.for5.fasta``: Output file pattern for the demultiplexed reads.


2. **Reverse Complement Reads**:

   For reads that do not contain a 5' UMI, the script generates their reverse complement using `seqtk`. These reverse complemented reads are then subjected to another round of UMI search at the new 5' end.

   Example Code:

   .. code-block:: python

      seqtk_rc_cmd = [str(seqtk_path), 'seq', '-r', 'trimmed-unknown.for5.fasta']
      with open('trimmed-unknown.for5.rc.fasta', 'w') as outfile:
          subprocess.run(seqtk_rc_cmd, stdout=outfile)


   .. code-block:: bash

      seqtk seq -r trimmed-unknown.for5.fasta > trimmed-unknown.for5.rc.fasta


3. **Merge Forward and Reverse Reads**:

   The forward and reverse demultiplexed sequences are merged into a single file for each UMI, combining sequences from both orientations into a final set of FASTA files.

   Example Code:

   .. code-block:: python

      for i in range(1001, 1097):
          with open(f"trimmed-bc{i}.for5.fasta", 'r') as f_forward, open(f"trimmed-bc{i}.for3.fasta", 'r') as f_reverse, open(f"bc{i}.fasta", 'w') as f_merged:
              f_merged.write(f_forward.read())  # Write contents of the forward file
              f_merged.write(f_reverse.read())  # Write contents of the reverse file


   .. code-block:: bash

      cat trimmed-bc<i>.for5.fasta trimmed-bc<i>.for3.fasta > bc<i>.fasta

   Where ``<i>`` represents the UMI index.


4. **Clean Up Intermediate Files**:

   After the merging process, any temporary or unknown sequence files are removed.

5. **Map and Rename Files**:

   Using a mapping file, the script renames the demultiplexed files to meaningful names based on sample IDs. The mapping file contains UMI combinations and their corresponding sample identifiers. The script processes each line of the mapping file, renaming the files accordingly.

   Example Code:

   .. code-block:: python

      with open(self.mapfile, 'r') as file:
          next(file)  # Skip the first line
          for line in file:
              fwd, rev, sampleid, plateid = line.strip().split('\t')[:4]
              old_name = f"{fwd}-{rev}.fasta".replace(' ', '')
              new_name = f"{sampleid}.fasta"
              os.rename(old_name, new_name)

6. **Filter by Read Length**:

   After demultiplexing, the script filters the reads by length using a specified minimum and maximum threshold. 


7. **Generate Read Count Summary**:

   A read count is calculated after demultiplexing and filtering. The count is logged and saved in a file named ``readcounts.txt``, providing a summary of the total number of reads remaining after the demultiplexing and filtering steps.


