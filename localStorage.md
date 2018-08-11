# localStorage data schema

Comprise:
* preferences
* translation vocabularies
 
# Preference
* Ordered list of vocabularies  

# Vocabulary

## Vocabulary record
* name
* storage URL
* author 
* notes

## Translation record
* vocabulary ( by name )
* original phrase
* page URL ( as priority determination )
* css selector ( reason TBD )
* translation


# Data normalisation
For now the optimisation is phased out, instead direct values will be used.

Later could be used for performance and memory optimisation. 
ID for vocabulary, page, original phrase should be unique in scope of browser 
for fast search. Hash seems to be efficient presentation. 

