.. _prepare:

.. role:: comment

=======
Prepare
=======

.. toctree::
    :hidden:

    prepare-run
    prepare-specimens

	
-------------
DNA Barcoding
-------------

In **Standard Mode**, the prepare stage has two phases. In *PREPARE RUN* users establish the basic metadata for a run, including the batch number and the starting plate. The second phase, called *PREPARE SPECIMENS* is where users input critical metadata. Standard mode is the default mode for the **DNA Barcoding** workflow.

In **Advanced Mode**, the run and specimens are prepared together on the *RUN SETUP* screen. The next screen, *RUN SUMMARY*, the user can verify the metadata, images, and plate map configuration provided during *RUN SETUP*. 
1) The user will first download the Metadata template, fill out the spreadsheet, then re-upload the spreadsheet. 
2) Next, the User may upload individual specimen images (.jpg) by uploading the **directory** holding them. The User may also upload array images (.jpg) for each plate by uploading **all individual image files**. Additional image information that will eventually accompany image files to upload to BOLD can be included here via **Download Image Data**, then editing the spreadsheet, and finally **Upload Image Data**.
3) It is recommended that users Download, fill in, and upload the Bulk Input file available by clicking the button next to the **Bioinformatics Parameters** on the *RUN SETUP* screen.

**Custom Mode** is similar to Advanced mode. One notable difference is that users provide their own UMI sequences via the Mapping file on the *RUN SETUP* screen. Image upload is not supported using Custom mode.

-------------
Metabarcoding
-------------

In **Kit Mode**, the run and specimens are prepared together on the *RUN SETUP* screen. The next screen, *RUN SUMMARY*, the user can verify the metadata and plate map configuration provided during *RUN SETUP*. Kit Mode uses the UMI sequences provided in ONTOLOGY kits and the user cannot provide their own UMIs (for this, use Custom Mode). Kit mode is the default mode for the **Metabarcoding** workflow. 

1) The user will first download the Mapping File template, fill out the spreadsheet, then re-upload. The user-uploaded customized Mapping file must be filled out first, as it will help to prepare a correctly formatted Metadata Template file. 
2) Next, the Metadata Template file is downloaded, filled out, and re-uploaded by the user.
3) It is recommended that users Download, fill in, and upload the Bulk Input file available by clicking the button next to the **Bioinformatics Parameters** on the *RUN SETUP* screen.

**Custom Mode** is similar to Kit Mode. One notable difference is that users provide their own UMI and primer sequences in the Mapping file on the *RUN SETUP* screen. 

The columns of each spreadsheet are documented in the reference section:
:ref:`Mapping file <mapping-file>`, :ref:`Metadata file <metadata-file>`, and
:ref:`Bioinformatics parameters <bioinformatics-parameters>`.
