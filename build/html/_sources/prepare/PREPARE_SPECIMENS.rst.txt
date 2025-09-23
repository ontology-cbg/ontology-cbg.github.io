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

A filled ONTOLOGY Metadata Template (`*`.xlsx) is required for analysis of each plate. It is typically most straightforward to download and fill the sheet while arraying specimens. 

Before downloading metadata, you may select 'Autopopulate metadata' to pre-fill some parts of the metadata, for example if all (or nearly all) of your specimens are Insects, you can pre-fill *Phylum* to Arthropoda and *Class* to Insecta. The fields will remain filled for all other plates in the batch. 

* **SAMPLE ID:** ID that is informative to ONTOLOGY. *Do not edit*
* **CUSTOM ID:** Name of specimen that is informative to the user
* **PHYLUM:** Name of specimen that is informative to the user
* **CLASS:** Name of specimen that is informative to the user
* **ORDER:** Name of specimen that is informative to the user
* **FAMILY:** (*Optional*) Name of specimen that is informative to the user
* **SUBFAMILY:** (*Optional*) Name of specimen that is informative to the user
* **GENUS:** (*Optional*) Name of specimen that is informative to the user
* **SPECIES:** (*Optional*) Name of specimen that is informative to the user
* **COLLECTORS:** Name of specimen that is informative to the user
* **:** Name of specimen that is informative to the user
* **CUSTOM ID:** Name of specimen that is informative to the user


ONTOLOGY uses user-supplied taxonomic assignments to screen for contamination. 

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