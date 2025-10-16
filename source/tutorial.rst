.. _tutorial:

.. role:: comment

============
Tutorial
============

This tutorial will walk you through an example run of ONTOLOGY's two modules with example datasets. The tutorial covers both DNA barcoding and metabarcoding, and both full and advanced user modules. The sequence data provided for the tutorials is provided by default with a subset of reads from the full run, but full run sequences can be downloaded *here* if users wish.

Because it's hands-on, this tutorial does not have much content for 'Implement'; the physical 'Test' workflow should be used if users wish to practice the molecular protocols.

The advanced user modules simplify **PREPARE**, skip **IMPLEMENT**, and include the full **ANALYZE**. Therefore, the tutorials for the advanced user modules only focus on **PREPARE**.

.. Link to come


--------------
DNA barcoding
--------------

The DNA barcoding tutorial uses example data found 'here'. The data are Australian insects collected by Paul Hebert via Malaise traps in December 2024. Two ONTOLOGY plates—UMIs 1 and 2—were prepared and sequenced on an Oxford Nanopore Technologies' Flongle Flow Cell on a MinION Mk-1d in September 2025. A single .fastq file, containing 17,912 reads, from the run is included for computational efficiency; the full run contained nearly 1M reads and takes 20× longer. 

.. Link to come.
.. Numbers are not correct

^^^^^^^^^^^^^
Full workflow
^^^^^^^^^^^^^

Note: Before beginning, ensure the ONTOLOGY workspace does not contain a folder called DBC999.

1. **PREPARE**

    a. Open ONTOLOGY and select **DNA Barcoding**
    b. Select **New Run**
    c. For *Run name*, you can enter anything you'd like, but we suggest **DBC_Full_Tutorial**
    d. For *Batch ID*, enter exactly **DBC999**, and leave the marker as COI and the primer as AR01.
    e. Click **Initiate the Run**
    f. Click the forward arrow several times to proceed through the workflow to **Upload Metadata**.

        * Select *Choose File*
        * Navigate to 'DNAbarcode_tutorial/metadata'
        * Select **metadata_sheet_for_01.xlsx**
        * Confirm all details are correct (95 specimens; 1 negative control; 95 specimens with complete data) and then click forward arrow

    g. Click the forward arrow until you arrive at *Label*. Here we will upload an array image. This is optional but encouraged as it allows for improved error checking.
        
        * Select *Upload Array Image*
        * Navigate to 'DNAbarcode_tutorial/array_images'
        * Select **array_01.jpg** 
        * Note: this image is from a separate project but was chosen because it contains pinned insects; most users would not upload an array photo of a microplate.

    h. Select the forward arrow to proceed to *PHOTOGRAPH*

        * Select *Upload photographs*
        * Navigate to 'DNAbarcode_tutorial/specimen_images'
        * Select the folder, *plate1*, then click Open
        * Verify the number of images is correct (95 images uploaded), then click the forward arrow

    i. Review the Plate Summary page. The user can edit metadata here.
    j. Select "Yes, add another plate (repeat Prepare Specimens)"
    k. Repeat Steps **f** to **i** above, but choose **metadata_sheet_for_02.xlsx**, **array_02.jpg**, and the images in the **plate2** folder.
    l. Review the summary sheet—all wells on both plates should be green—and then select **No, all specimens processed**.

2. **IMPLEMENT**

    a. Click through all arrows of implement to explore the protocols. 
    b. Explore the interactive calculators at *SEQUENCING > LIBRARY PREP* and *SEQUENCING > FLOW CELL*
    c. Proceed to *ANALYZE*

3. **ANALYZE**
    a. Upload the .fastq file (or files, if using the full run sequences)

        * Select *Choose Folder*
        * Navigate to 'DNAbarcode_tutorial/fastq_file' and 'open' that folder
        * Verify that the number of .fastq files is correct (1) and the number of reads is 17,912 then click forward arrow

    b. At *Bioinformatic Analysis* stage, verify that your sequence (.fastq) file and reference library are correct, then select **Start Analysis**; the analysis should compelte in under 10 minutes on most computers.

^^^^^^^^^^^^^
Advanced user
^^^^^^^^^^^^^


--------------
Metabarcoding
--------------

The metabarcoding tutorial uses example data found 'here'. Like the DNA barcoding tutorial data, th insects collected by Paul Hebert via Malaise traps in December 2024. A single UMI plate was used, with 30 samples, each replicated three times. 

.. Link to come.

^^^^^^^^^^^^^
Full workflow
^^^^^^^^^^^^^



^^^^^^^^^^^^^
Advanced user
^^^^^^^^^^^^^



.. toctree::
    :hidden:
	
    prepare/PREPARE_RUN
    prepare/PREPARE_SPECIMENS
	
