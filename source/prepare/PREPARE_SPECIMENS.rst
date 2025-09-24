.. _PREPARE_SPECIMENS:

=================
PREPARE SPECIMENS
=================

PREPARE SPECIMENS begins with an OVERVIEW page that outlines the rest of the PREPARE workflow. 

----
SORT
----

The *SORT* stage assumes the user is beginning with an unsorted insect sample and can be skipped if specimens are arrayed. Presently, ONTOLOGY assumes the user is sequencing insects and other similarly-sized arthropods; ONTOLOGY will be expanded to support other taxa in future.

Specimens should be sorted into two piles: small (below 3 mm) and large (above 3 mm). A printable size guide is provided to facilitate sorting. Small specimens (below 3 mm) are placed directly into a DNA extraction plate.

-----
MOUNT
-----

*MOUNT* guides the user through arraying specimens for a plate. The most straightforward approach is to array small and large specimens separately and not mix them within a plate, though mixed plates are possible and are the case shown by the software.

Specimens being mounted into microplates should be placed in EtOH. 

A filled ONTOLOGY Metadata Template (`*`.xlsx) is required for analysis of each plate. It is typically most straightforward to download and fill the sheet while arraying specimens. 

Before downloading metadata, you may select 'Autopopulate metadata' to pre-fill some parts of the metadata, for example if all (or nearly all) of your specimens are Insects, you can pre-fill *Phylum* to Arthropoda and *Class* to Insecta. The fields will remain filled for all other plates in the batch. 

The fields are required unless specified as *Optional*. ONTOLOGY uses user-supplied taxonomic assignments to screen for contamination.

* **SAMPLE ID:** ID that is informative to ONTOLOGY; *Do not edit*
* **CUSTOM ID:** User-supplied ID for the specimen
* **PHYLUM:** The organism's phylum
* **CLASS:** The organism's taxonomic class
* **ORDER:** The organism's taxonomic order
* **FAMILY:** (*Optional*) The organism's taxonomic family
* **SUBFAMILY:** (*Optional*) The organism's taxonomic subfamily
* **GENUS:** (*Optional*) The organism's genus
* **SPECIES:** (*Optional*) The species name (including genus)
* **COLLECTORS:** Name of collectors tied to the specimen
* **COLLECTION DATE:** Date that the specimen was captured (for a range of dates, put the end)
* **LATITUDE:** Numeric; Decimal degrees only (DD.DDDD)
* **LONGITUDE:** Numeric; Decimal degrees only (DD.DDDD)
* **Image Name:** User-supplied image name, with or without file extension; if left blank ONTOLOGY will assume images are supplied in a logical order
* **Image ID:** [TBD]

---------------
UPLOAD METADATA
---------------

Metadata are uploaded one plate at a time in the full workflow.

------
TISSUE
------

For large specimens that are too big to place whole into a DNA extraction plate, DNA must be extracted from a small piece of tissue, typically a leg. 

<We find that most people sample too much tissue, so reccomend diluting all extracted DNA 20X.>



----------
PHOTOGRAPH
----------

ONTOLOGY accepts photographs in .jpg, .png, and .tif formats.

After specimens are arrayed, take a photograph of each one. See [photography guide] for tips on taking photographs. We strongly reccomend that you organize images into folders by plate, generate exactly the number of images as specimens on the corresponding plate, and ensure images are named so that they sort alphanumberically from A01 to H11. For example if you used all 10 plates in a run, a well-organised folder structure could be:

.. code-block:: text

    .
    └── AAA001/
        └── RUN_1/
            ├── PLATE_1/
            │   ├── A01.jpg
            │   ├── A02.jpg
            │   ├── A03.jpg
            │   ├── ...
            │   └── H11.jpg
            ├── PLATE_2/
            ├── ...
            └── PLATE_10/


In the full ONTOLOGY workflow, photos are added one plate at a time.

-------------
Advanced user
-------------

To upload photographs in the advanced user module, you can upload files or folders. 

* Files: Select as many photographs as there are specimens.
	* If specimens are missing photos, insert a blank photo.
* Folder: Select as many folders as you have plates in the run