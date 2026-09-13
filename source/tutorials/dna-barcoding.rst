.. _TUTORIAL_DNA_BARCODING:

======================
DNA Barcoding workflow
======================


The **DNA Barcoding** tutorial uses example data found on the `ONTOLOGY demo data page <https://zenodo.org/records/22283662>`_. The data are Australian insects collected by Paul Hebert via Malaise traps in December 2024. Two ONTOLOGY plates—UMIs 1 and 2—were prepared and sequenced on an Oxford Nanopore Technologies' Flongle Flow Cell on a MinION Mk-1d in September 2025. A single .fastq file, containing 17,912 reads, from the run is included for computational efficiency; the full run contained nearly 1M reads and takes 20× longer. 

Because the 'Implement' stage is hands-on, this tutorial does not go into high level detail for this stage. 

The advanced user modules simplify **PREPARE**, skip **IMPLEMENT**, and include the full **ANALYZE**. Therefore, the tutorials for the advanced user modules only focus on **PREPARE**.

Note: With all modes, please refrain from naming samples with terminology used frequently for controls. These include any capitalization of 'pos, 'positive', ''neg', ''negative', & 'control'

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Standard mode (with ONTOLOGY kit)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open ONTOLOGY and select **DNA Barcoding**

1. **PREPARE**

    a. Select **New Run**
    b. For *Run name*, you can enter anything you'd like, but we suggest **DBC_Full_Tutorial**
    c. For *Batch ID*, enter exactly **OAT001**, and leave the marker as COI and the primer as AR01.
    d. Click **Initialize**.
    e. The next three screens indicate the current plate being prepared and provide workflow and specimen information. Click the forward arrow (->) several times to proceed through the workflow until you arrive at the **Array** screen. Here you will see an option to Download a prepared **Metadata Template** file that may be edited and re-uploaded on future uses. Please take a moment to download and review the file. 
    For now, you do not need to change this file, but it may be used to compare with the completed Metadata files we have provided (**metadata_sheet_for_01.xlsx**), which will be used for upload on the next screen. 

        **REQUIREMENTS FOR THE METADATA SHEET:**
        Upon using your own data, you will need to edit the metadata sheet yourself. After downloading the template metadata sheet.
        **Required Fields:**
        
        * **Sample ID:** Do not make any changes to data in the *Sample ID* field.
        * **Custom ID:** Provide a memorable 'working name' to each cell in the *Custom ID* field. This may match the naming convention you have used for sample collection and organization. 
        The only requirement is that these must be unique identifiers for each row (e.g., 1,2,3...).
        * **Kingdom/Phylum/Class/Order** fields: Change these fields as needed to represent what is known about your samples. For taxonomic inference, all fields up to *Order* must be filled in.
        * **Country:** Enter country name only.
        * **All fields:** For each plate, Well H12 is designated as the Negative Control well. The Negative Control must remain blank for all fields, excluding *Sample ID*.
        
        **Optional fields:** We highly recommend that you fill out the *Collectors, Collection Date, Latitude,* and *Longitude* fields, though they are not required for ONTOLOGY to run.
        Please refer to the provided **metadata_sheet_for_01.xlsx** for suggested formatting.

    f. Click the forward arrow once more to uploade prepared metadata file.

        * Select **Choose File**
        * Navigate to 'DNAbarcode_standard_tutorial/metadata'
        * Select **metadata_sheet_for_01.xlsx** 
        * Confirm all details are correct (95 specimens; 1 negative control; 95 specimens with complete data) and then click the forward arrow.

    g. The next screen provides a downloadable Sampling Protocol, which is optional for review. Continue past this screen, and click the forward arrow until you arrive at *Label*. Here we will upload an array image. This is optional but encouraged as it allows for improved error checking.
        
        * Select **Upload Array Image**
        * Navigate to 'DNAbarcode_standard_tutorial/array_images'
        * Select **array_01.jpg** 
        * Note: this image is from a separate project but was chosen because it contains pinned insects; most users would not upload an array photo of a microplate.

    h. Select the forward arrow to proceed to *PHOTOGRAPH*

        * Select **Upload photographs**
        * Navigate to 'DNAbarcode_standard_tutorial/specimen_images'
        * Select the folder, 'plate1', then click Open
        * Verify the number of images is correct (95 images uploaded), then click the forward arrow

    i. Review the Plate Summary page. The user can use the 'Edit' buttons to make changes to the metadata, if desired.
    j. Select "Yes, add another plate (repeat Prepare Specimens)"
    k. Repeat Steps **f** to **i** above, but choose **metadata_sheet_for_02.xlsx**, **array_02.jpg**, and the images in the 'plate2' older.
    l. Review the summary sheet—all wells on both plates should be green—and then select **No, all specimens processed**.

2. **IMPLEMENT**

    a. Click through all arrows of IMPLEMENT to explore the protocols. 
    b. Explore the interactive calculators at *SEQUENCING > LIBRARY PREP* and *SEQUENCING > FLOW CELL*
    c. Proceed to *ANALYZE*

3. **ANALYZE**
    a. Upload the .fastq file (or files, if using the full run sequences)

        * Make sure that the **Run the complete analysis workflow** is selected.
        * Select **Choose Folder**
        * Navigate to 'DNAbarcode_standard_tutorial/fastq_file' and 'open' that folder
        * Verify that the number of .fastq files is correct (1) and the number of reads is 17,912 then click forward arrow

    b. In **Select Reference Library**:

        * If the 'Current Reference Library' is blank, download BOLDistilled via the 'Download BOLDistilled' button. 
        * Once the BOLDistilled reference library autopopulates the Reference Library field, you can 'Proceed to Analysis'.

    c. At the *Bioinformatic Analysis* stage, select **Start Analysis**; the analysis should complete in under 10 minutes on most computers. After analysis has completed, click the forward arrow.
    d. Explore the various summary metrics and graphs on the next page. 

        * You can also find file versions by clicking the **ONTOLOGY Workspace** button on the right side of the screen. 
        * Select the folder with the batch name assigned (e.g., OAT001), then '{batch name}' -> 'analyze', and you will find all saved ONTOLOGY output files.

    e. On the next page, type your email and the desired BOLD project code and then click **Submit data package** (note, the tutorial data will not go to BOLD)
    f. The *RUN SUMMARY* page summarises the details of the completed run.

    .. Forward arrow should not be clickable before analysis has completed. Also, for provided metadata_sheet_for_01.xlsx, MAKE SURE IT HAS KINGDOM COLUMN AND BATCH ID MATCHES.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Advanced user (with ONTOLOGY kit)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Open ONTOLOGY and select **DNA Barcoding**. [Do not select **New Run** yet]. Then, select the **Switch to Advanced Mode** button (S <--> A image) on the right side to launch the advanced used module.

1. **PREPARE**

    a. Click the forward (-->) arrow until the *RUN SETUP* screen. For *Run name*, you can enter anything you'd like, but we suggest 'DBC_Advanced_Tutorial'
    b. In the *Kit Info* fields, enter **OAT001** as the batch ID and leave the marker as **COI** and the primer as **AR01**. 
    c. Check boxes 1 and 2 for 'Select Plate(s)' to indicate number of plates that are being assessed.
    d. Click 'Initialize'.
    e. Click 'Download Blank' next to *Metadata*. Please take a moment to download and review the file. 
    For now, you do not need to change this file, but it may be used to compare with the completed Metadata files we have provided (**metadata_sheet_for_all.xlsx**), which will be used for upload on the next screen. 
    
        **REQUIREMENTS FOR THE METADATA SHEET:**
        Upon using your own data, you will need to edit the metadata sheet yourself. After downloading the template metadata sheet.
        **Required Fields:**

        * **Sample ID:** Do not make any changes to data in the *Sample ID* field.
        * **Custom ID:** Provide a memorable 'working name' to each cell in the *Custom ID* field. This may match the naming convention you have used for sample collection and organization. 
        The only requirement is that these must be unique identifiers for each row (e.g., 1,2,3...).
        * **Kingdom/Phylum/Class/Order** fields: Change these fields as needed to represent what is known about your samples. For taxonomic inference, all fields up to *Order* must be filled in.
        * **Country** Enter country name only.
        * **All fields:** For each plate, Well H12 is designated as the Negative Control well. The Negative Control must remain blank for all fields, excluding *Sample ID*.
        
        **Optional fields:** We highly recommend that you fill out the *Collectors, Collection Date, Latitude,* and *Longitude* fields, though they are not required for ONTOLOGY to run.
        Please refer to the provided **metadata_sheet_for_all.xlsx** for suggested formatting.

    f. Click the forward arrow once more.
    g. Select 'Upload Metadata' and then select the 'DNAbarcode_advanced_tutorial/metadata_sheet_for_all.xlsx' file we provided (not the ONTOLOGY-generated template you downloaded)
    h. Select specimen images, then select the 'DNAbarcode_advanced_tutorial/specimen_images' folder
    i. Select 'DNAbarcode_advanced_tutorial/array images', then select all files in the folder
    j. To progress to **Analyze**:
        
        * Click the forward arrow
        * Then review the Run Summary. 
        * Once your review is complete, click the forward arrow to proceed to **Analyze**

2. **ANALYZE**

*Analyze is identical to the full walkthrough; see Standard Mode*

.. link to above?
.. make sure we have specimen and array image files.


^^^^^^^^^^^
Custom mode 
^^^^^^^^^^^

Open ONTOLOGY and select **DNA Barcoding**. Then, select the **Switch to Advanced Mode** button (S <--> A image) on the right side to launch the advanced used module.
Because Custom Mode is similar to Kit mode, we encourage you to use your own data to get the most out of this tutorial.  However, you may also use the data provided in 'DNAbarcode_custom_tutorial' to simulate running your own data. 
    
1. **PREPARE**

    a. Click the forward (-->) arrow until the *RUN SETUP* screen. 

        * Toggle the switch **Switch between Kit Mode and Custom Mode** (top right). 
        * You are now in Custom Mode.

    b. For *Run name*, you can enter anything you'd like, but we suggest 'DBC_Custom_Tutorial'. 
    c. Click 'Initialize'.
    d. For **Mapping File**, click Download Template. 
    e. Fill in Mapping Template File. 

        * Note that you MUST provide your own UMI and primer sequences in custom mode. 
        * Example row: Plate ID = 1 (for 96 samples or less), Well ID = B01, Sample ID = Study1_Sample2, Primer Set Name = AR01.
        * Note: Plate IDs must only be a number, e.g., 2 or 24.
    
    f. Upload Mapping File. Then, for *Metadata*, click 'Download Blank'. 
    g. Fill in the Metadata file, which should correspond with the Mapping file. NOTE: do not change the Sample ID or Custom ID fields. The Kingdom/Phylum/Class/Order fields are required for taxonomic inference. 
    h. Upload Metadata File.
    i. Click the writing icon next to **Bioinformatics Parameters**.
    j. [Advised] **Download Bulk Input** file, check for correctness, make any necessary edits, and re-upload using **Upload Bulk Input file** button. 

        * Parameters can also be edited directly in the ONTOLOGY window.
        * A guide to the parameters is available in the *PREPARE* document of the ONTOLOGY tutorial.

2. **ANALYZE**

*Analyze is identical to the full walkthrough; see Standard Mode*

..
