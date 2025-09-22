.. _size_filter:

Size Filter
===========

This section describes the size filtering process applied to reads in a FASTA file. If you provide a .fastq file, ONTOLOGY will convert it to a .fasta file.

Task Overview
-------------

Filtering reads by length is crucial for alignment accuracy in DNA barcoding analysis. Short reads may lack the necessary length to align properly, leading to misalignment or incorrect results, while long reads can introduce complexity and misalignments due to additional, non-informative sequences. By retaining reads within a specified length range, we ensure that all sequences are consistent and align accurately, which improves the reliability of downstream analyses and variant detection. This approach helps streamline the alignment process and ensures that the data used for comparison and identification is both precise and relevant.

The size filtering process involves retaining reads in a FASTA file that meet the specified minimum and maximum read lengths. The goal is to filter out reads that are too short or too long, and log the count of reads that pass the filter.

Steps
-----

1. **Execute Read Filtering**: 
   A command-line tool called ``cutadapt`` is used to filter the reads in the FASTQ file. The tool is configured with two key parameters:

   - **Minimum read length**: Only reads longer than this value are retained.
   - **Maximum read length**: Only reads shorter than this value are retained.


   .. code-block:: bash

      cutadapt -j <max_cores> -m <min_read_length> -M <max_read_length> -o file.fasta_filtered file.fasta

   Where:

      - ``-j <max_cores>``: Specifies the maximum number of CPU cores to use for parallel processing.
      - ``-m <min_read_length>``: Defines the minimum read length.
      - ``-M <max_read_length>``: Defines the maximum read length.
      - ``-o file.fasta_filtered``: Specifies the output file for filtered reads.
      - ``file.fasta``: The input FASTA file containing unfiltered reads.


2. **Count Filtered Reads**: 
   After the filtering process is complete, the number of reads in the filtered FASTA file is counted.



.. rubric::



3. **Log the Results**: 
   The read count is logged in two ways:

   - It is appended to a file called ``readcounts``, which stores the number of reads after filtering to be used in plotting.
   - It is also outputted for user visibility, showing how many reads passed the filtering criteria.



Result
------

At the end of the process, the original FASTA file is replaced by the filtered version. Additionally, the log file (``readcounts.txt``) is updated with the number of reads that passed the filter.
