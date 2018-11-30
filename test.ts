# »find« extension configuration for demonstration purposes.
#
# 2013-2018 Sven-S. Porst <ssp-web@earthlingsoft.net>
#
plugin.tx_find {
	# Paths for own templates and partials.
	# The built-in templates and partials are configured at
	# position 10. Files in the Root Path with the highest
	# position will take precendence, letting you override
	# the defaults provided by the extension.
	view {
		templateRootPaths.20 = typo3conf/typo3-find-test/Templates/
		partialRootPaths.20 = typo3conf/typo3-find-test/Partials/
	}

	settings {
		# Connection setup for the Solr index.
		# Needs to be adapted / overwritten for the final configuration.
		connections.default.options {
			host = 127.0.0.1
			port = 8983
			path = /solr/hos
			timeout = 10
		}


		# Query field configuration
		queryFields {

			10 {
				id = name
				type = Text
			}
			11 {
				id = name2
				extended = 1
				type = Text
				query = name:%1$s
				queryAlternate.1 = name:%1$s~0.7
				noescape = 1
			}
			12 {
				id = name3
				extended = 1
				type = Text
				autocomplete = 1
				autocompleteDictionary = name
			}
			20 {
				id = year
				extended = 1
				type = Range
				query = from:[* TO %2$s] AND to:[%1$s TO *]
				default.0 = *
				default.1 = *
			}
			30 {
				id = hidden
				extended = 1
				type = Hidden
				default = surprise
			}
			40 {
				id = country
				extended = 1
				type = Select
				options {
					blank =
					key = value
					key2 = value2
				}
				default = key
			}
			50 {
				id = band
				extended = 1
				type = SelectFacet
				facetID = band
				query = band:%s
			}
			60 {
				id = version
				extended = 1
				type = Radio
				options {
					1 = Steak
					2 = Chicken
					3 = Pancake
				}
				default = 2
			}
		}

		# Set up the correspondence between data fields and query field IDs.
		# Used for creating the links.
		queryFieldForDataField {
			ort = ort
		}

		# Sort by the sort field in the documents.
		# These have differing content depending on their type.
		sort {
			1 {
				id = default
				sortCriteria = sort asc
			}
		}

		# Fields to use for displaying the result list.
		standardFields {
			title = transliteration
			snippet = uebersetzung
		}

		# Facet configuration.
		facets {

			50 {
				id = band
				field = band
				hidden = 1
				fetchMinimum = 0
			}

		}
	}
}


config.contentObjectExceptionHandler = 0
