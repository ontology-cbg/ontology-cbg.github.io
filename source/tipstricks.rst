.. _tipstricks:

=============
Tips & Tricks
=============

Tips & Tricks are intended for *advanced users* to get more out of ONTOLOGY. These strategies should typically be used via the Advanced User Modules rather than full workflows.

1. Using plates from different batches in a run

	Although not explicitly supported by ONTOLOGY it is possible to combine plates from different batches into a single run. Presently, all plates with a particular plate ID (e.g., plate 10) have the same UMIs. This means, plate 10 from batch AAA001 is identical to plate 10 from batch ADC348. Thus, plates from different batches can be combined in runs so long as they have different IDs.

2. Using a single plate in multiple runs

	It is possible to use a single plate in multiple ONTOLOGY runs. For example, a user might wish to metabarcode a small number of samples on a MinION flow cell, rather than a large number of samples on a PromethION flow cell.


