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

The fields are required unless specified as *Optional*. ONTOLOGY uses user-supplied taxonomic assignments to screen for contamination. Some columns are omitted from metabarcoding analysis.

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
* **NO LABEL:** Binary, input '1' to skip generating a paper label for this specimen
* **Image Name:** User-supplied image name, with or without file extension; if left blank ONTOLOGY will assume images are supplied in a logical order
* **Image ID:** [TBD]

---------------
UPLOAD METADATA
---------------

Metadata are uploaded one plate at a time in the full workflow.

------
TISSUE
------

DNA from small specimens is extracted from the entire specimen, placed in the well of an extraction plate. 

For large specimens that are too big to place whole into a DNA extraction plate, DNA must be extracted from a small piece of tissue, typically a leg. The most common reason we have found for PCR failure is that users have sampled too much tissue, so **ensure you sample only a very small piece of tissue for alkaline lysis.**



-----
LABEL
-----

ONTOLOGY will generate physical labels that can be printed and affixed to specimens. We reccomend printing on cardstock paper. <More to come>


----------
PHOTOGRAPH
----------

ONTOLOGY accepts photographs in .jpg, .png, and .tif formats.

After specimens are arrayed, take a photograph of each one. Taking photograhps in order, from A01 to A12 then B01 to B12, etc., to H11, and retaining only one photograph per specimen, will minimize the need to organize files. See [photography guide] for tips on taking photographs.

We strongly reccomend that you organize images into folders by plate, generate exactly the number of images as specimens on the corresponding plate, and ensure images are named so that they sort alphanumberically from A01 to H11. For example if you used all 10 plates in a Run, a well-organised folder structure could be:

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


In the full ONTOLOGY workflow, photos are added one plate at a time, and you can select either a folder containing the correct number of specimens, or the files directly.

-------
SUMMARY
-------

The SUMMARY page provides a comprehensive look at the specimens that will be taken forward into the IMPLEMENT phase. Critically, the can opt to repeat the PREPARE SPECIMENS steps and add an additional plate, or proceed to IMPLEMENT with the current set of plates. 

The upper section provides a summary of individual plates. Individual wells can be selected, and information edited. The number of specimens in each plate is listed, as is the number of images, fraction with complete metadata, the number of array images uploaded, and the number of negative controls. All plates in the Run can be reviewed and the user can switch between them using the arrows above the plate. The well colour indicates whether all metadata are present (green), if some fields are missing (red), if the well was not used (white), or if it is a negative control (black).

Below, the Run summary provides information to the user about how many plates and specimens are included in the Run.

When the user has completed PREPARE for all plates that they would like to include in the Run, they can proceed to the IMPLEMENT phase.