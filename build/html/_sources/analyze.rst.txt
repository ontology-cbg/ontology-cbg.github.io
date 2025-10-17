.. _analyze:

.. role:: comment

=======
Analyze
=======

Analyze guides the user through bioinformatic analysis of the Run's sequence data, provides technical and biological summaries of the Run, and facilitates upload to BOLD (DNA barcoding) or RAMS (metabarcoding). 


-----------
FILE IMPORT
-----------

The first step of ANALYZE is to import the .fastq files. You may analyze any number of .fastq files so long as they are in the same folder, or a single concatenated .fastq is also accepted. To analyze a folder of .fastq files, select 'Choose Folder'; to analyze a single .fastq file, select 'Choose File'.

.. EMINE: We must clarify how .fq.gz files are treated.

After uploading a file, the filename will display on the screen. In addition, the number of .fastq files read and the total number of reads across all fastq files will be displayed.

After sequences are uploaded into the ONTOLOGY environment, you can proceed to select or confirm the reference library ONTOLOGY will use for ID.

-----------------
REFERENCE LIBRARY
-----------------

ONTOLOGY requires two reference library files: a SINTAX file and a VSEARCH file. We reccomend `BOLDistilled`_ libraries for use with ONTOLOGY because they are confirmed to work.

.. _BOLDistilled: boldsystems.org/BOLDistilled

Users can download the most current BOLDistilled libraries directly from ONTOLOGY. 

.. What does ONTOLOGY look for in the reference libraries if users want to use their own? 

Please note: querying against reference libraries is generally very quick compared to other parts of the bioinformatics pipeline, so using smaller libraries will only save a fraction of the analysis time. 

--------------
BIOINFORMATICS
--------------

With the proper metadata and sequence data loaded into ONTOLOGY, bioinformatic analysis is as easy as clicking a button. Simply select, *Start Analysis* and ONTOLOGY will begin the process of analyzing your data to produce an ASV table. 

The length of analysis depends on three things:

	1. Computer power—faster on more powerful machines
	2. Quantity of sequence data—faster with fewer reads
	3. Biological complexity—faster with fewer ASVs per sample

Detailed documentation can be found [link tbd]


.. EMINE we must do this: Re-run only ID if user changes reference library.

.. remove restart
.. keep cancel (delete all files)

---------------
SUMMARY METRICS
---------------

The four tabs at the top contain graphics that allow the user to explore the performance of their run. 

	* Technical (Run-wide): Metrics looking at the entire run together
	* Technical (Per-plate): Metrics showing heatmaps of wells
	* Taxonomy: Metrics showing the distribution of taxa in the study, including which matched vs. did not match a BIN.
	* Table: Additional quantitative metrics about the run

------------------
UNDER CONSTRUCTION
------------------
