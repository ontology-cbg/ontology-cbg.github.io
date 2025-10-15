# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'ONTOLOGY'
copyright = '2025, Centre for Biodiversity Genomics'
author = 'Emine Ozsahin & Ken A. Thompson'
release = '0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration


extensions = [
    'sphinx_rtd_theme',
    'sphinx_toggleprompt',
    'sphinx_togglebutton'
]

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

#html_theme = 'alabaster'
#https://sphinx-rtd-theme.readthedocs.io/en/stable/configuring.html
#https://github.com/readthedocs/sphinx_rtd_theme?tab=readme-ov-file
#master_doc = 'index'
#html_title = "ONTOLOGY"
html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']
# html_static_path = []
