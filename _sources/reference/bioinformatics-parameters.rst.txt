.. _bioinformatics-parameters:

=========================
Bioinformatics parameters
=========================

A guide to the column names of the Bioinformatics Parameters worksheets

.. container:: file-guide

    **Primer set name**
        Name of corresponding primer sequences.

    **Fw/Rv Primer Sequence**
        Nucleotide sequence string.

    **Minimum/Maximum Raw read length (bp)**
        Min / Max length of sequence+primers kept by Chopper. Primarily used to remove obvious primer dimers and errant sequencing artifacts. Kept loose to account for variable markers with variable polymorphic lengths.

    **Minimum/Maximum Target sequence length (bp)**
        Minimum / maximum desired final amplicon length (no primers/UMIs)

    **Primary OTU clustering threshold (%)**
        Threshold for clustering OTUs within samples (i.e., across replicates of the same sample). Somewhat akin to denoising ASVs.

    **Secondary OTU clustering threshold (%)**
        Threshold for final OTU clustering across samples.

    **Minimum # reads per OTU**
        OTUs below this read count are discarded (e.g., 2)

    **Identification confidence (%)**
        SINTAX confidence cutoff (0–100)

    **UMI and Fw / Rv primer error rate**
        In proportion of total base pairs (e.g., 0.125). UMI error rate used during demultiplexing.

    **UMI min overlap**
        In # of base pairs (e.g., 12). Used during demultiplexing. We recommend 0.75*Total Umi length for UMIs ≥12 nucleotides, and Total UMI lenth for UMIs <12 nucleotides.

    **Fw /Rv Primer min overlap**
        In # of base pairs (e.g., 12). We recommend 0.75*Total Fw or Rv Primer length

    **COI BIN match threshold (%)**
        Threshold to keep matches to BINs in the final database, regardless of 'formal' BIN assignment. Matches below this threshold are labeled "NO MATCH" in the final data.
