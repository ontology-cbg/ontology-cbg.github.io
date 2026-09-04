.. _TUTORIAL_METABARCODING:

======================
Metabarcoding workflow
======================

The **Metabarcoding** tutorial uses example data found 'here'. Like the **DNA Barcoding** tutorial data, the insects collected by Paul Hebert via Malaise traps in December 2024. A single UMI plate was used, with 30 samples, each replicated three times. We provide test data *here*, but full PromethION run sequences can be downloaded from `NCBI <https://www.ncbi.nlm.nih.gov/bioproject/PRJNA1496812/>`_ if users wish.

Open ONTOLOGY and select **Metabarcoding** to access both modes of the **Metabarcoding** Workflow.

Note: With all modes, please refrain from naming samples with terminology used frequently for controls. These include any capitalization of 'pos, 'positive', ''neg', ''negative', & 'control'

.. Link to come.

^^^^^^^^
Kit mode
^^^^^^^^
1. **PREPARE**

    a. Click the forward (-->) arrow until the *RUN SETUP* screen. For *Run name*, you can enter anything you'd like, but we suggest 'DBC_Meta_Tutorial'
    b. Enter the *Run name*, which can be anything you'd like, but we suggest 'DBC_Meta_Custom_Tutorial'
    c. In the **Kit Info** fields, enter **AAA000** as the batch ID

        * Leave the marker as COI
        * Leave the primer as AR01
        * Click 'Initialize'

    e. Select **Upload map** and then select the 'Metabarcode_tutorial/metabarcoding_map.xlsx' file
    f. Accept and proceed past pop-up window that warns of unequal replicate count. 
    g. Select **Upload Metadata** and then select the 'Metabarcode_tutorial/metabarcoding_metadata.xlsx' file
    h. Click the pencil icon next to **Bioinformatics Parameters** to edit run parameters

        * Here, adjustments may be made by 
            (1, recommended) clicking **Download Bulk Input File**, editing + saving, and then clicking **Upload Bulk input file**; or 
            (2), changing the parameters on the ONTOLOGY window. 
        * It is recommended to first run with the default values, but to examine the Bulk Input Files structure to aid with your later analyses. 
        * A guide to the parameters is available in the *PREPARE* document of the ONTOLOGY tutorial.

    i.  To progress to the *RUN SUMMARY* screen:

        * Click **Go Back**
        * Then click forward arrow

    j. On the *RUN SUMMARY* screen, you can see how the samples are setup via the mapping file. 

        *Click on one of the cells to view/edit metadata and sample information. 
        *Then, click **Proceed to Analyze**

2. **ANALYZE**

    a. Click **Choose Folder** and choose 'Metabarcode_tutorial/' directory, which holds the fastq file. 

        * Make sure that 'Run the complete analysis workflow' is selected.
        * Click forward arrow. 

    b. On **Set Reference Library** screen:

        * If the 'Current Reference Library' is blank, download BOLDistilled via the 'Download BOLDistilled' button. 
        * Once the BOLDistilled reference library autopopulates the Reference Library field, you can 'Proceed to Analysis'.

    c. Click 'Start Analysis' to initiate **Metabarcoding** bioinformatic workflow.
    d. Explore the various summary metrics and graphs on the next page. You can also find file versions by clicking the **ONTOLOGY Workspace** button on the right side of the screen. Select the folder with the batch name assigned (e.g., AAA000), then '{batch name}' -> 'analyze', and you will find all saved ONTOLOGY output files.
    e. On the next page, type your email and the desired BOLD project code and then click **Submit data package** (note, the tutorial data will not go to BOLD)
    f. The *RUN SUMMARY* page summarises the details of the completed run.


..Make sure files are available and properly named.

^^^^^^^^^^^
Custom mode
^^^^^^^^^^^
Custom mode allows the user to deviate from the constraints of the ONTOLOGY kits and users must provide their own primers and UMIs. Since Kit mode is very similar, we encourage users to use their own data for the Custom Mode Tutorial. However, we also provide all the files using a test dataset ('Metabarcode_custom_tutorial').

1. **PREPARE**

    a. Click the forward (-->) arrow until the *RUN SETUP* screen. 
    b. Enter the *Run name*, which can be anything you'd like, but we suggest 'DBC_Meta_Custom_Tutorial'
    c. Toggle the switch **Switch between Kit Mode and Custom Mode** (top right). 

        * You are now in Custom Mode.
        * Click 'Initialize'

    d. For **Mapping File**, click **Download Template**. 
    e. Fill in cells of Mapping Template File. If you are using multiple primers, leave the Fw Primer Sequence and Rv Primer Sequence columns blank. This will trigger a new 'Primer sets' row to appear on the screen, where the parameters for multiple primers can be submitted.

        * Note that you MUST provide your own UMI and primer sequences in custom mode. 
        * Example row: Plate ID = 1 (for 96 samples or less), Well ID = B01, Sample ID = Study1_Sample2, Replicate = 2, Negative Control = 0 (for samples) OR 1 (for negative controls), Positive Control = 0 (Postive controls are not considered at this time; use 0 for all cells for now), Primer Set Name = AR01.
        * Upload **Mapping File**. 

    f. If you left the Fw Primer Sequence and Rv Primer Sequence fields blank, download the **Primer Sets** template file. Fill in primer information for each 'Primer Set Name', which should correspond with the **Mapping File** 

    f. Then, for 'Metadata', click 'Download Template'. 

        * Note: It is important to upload the Mapping file first, as this information is used to construct the Metadata template file.
        * Fill in *Metadata* spreadsheet and upload file.

    g. Click the pencil icon next to **Bioinformatics Parameters** to edit run parameters

        * Here, adjustments may be made by 
            1) (recommended) clicking **Download Bulk Input File**, editing + saving, and then clicking **Upload Bulk input file**; or
            2) changing the parameters on the ONTOLOGY window. 
        * Note: It is recommended to first run with the default values, but to examine the Bulk Input Files structure to aid with your later analyses. 
        * Note: A guide to the parameters is available in the *PREPARE* document of the ONTOLOGY tutorial.

    h. To proceed to **Analyze**

        * From Parameters screen, click 'Go Back' once Parameter information has populated all fields.
        * Click forward arrow to review the plate map. 
        * Click on one of the cells to view/edit metadata and sample information. 
        * Finally, click **Proceed to Analyze**.

2. **ANALYZE**
    a. Click **Choose Folder** and choose the directory containing the fastq (or fastq.gz) files. 

        * Make sure that 'Run the complete analysis workflow' is selected.
        * Click forward arrow.

    b. On **Set Reference Library** screen:

        * If the 'Current Reference Library' is blank, you may either 
            1) select the BOLDistilled Vsearch file (for COI-5P barcoding only) IF AVAILABLE; or
            2) download BOLDistilled via the 'Download BOLDistilled' button (for COI-5P barcoding only), which will autopopulate the Reference Library field once finished; or 
            3) Import your own reference library in SINTAX fasta format, which will be converted to VSEARCH by ONTOLOGY upon upload. 
        * Once the desired reference library autopopulates the Reference Library field, you can 'Proceed to Analysis'.

    c. Click 'Start Analysis' to initiate **Metabarcoding** bioinformatic workflow.



.. Make sure files are prepared for Kit mode.
	
