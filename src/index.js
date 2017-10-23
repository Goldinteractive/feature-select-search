import Choices from 'choices.js'

/**
 * Select search feature class.
 */
class SelectSearch extends base.features.Feature {

  init() {
    this.choices = new Choices(this.node, this.options)
  }

  destroy() {
    this.choices.destroy()
    super.destroy()
  }

}

/**
 * Default feature options.
 */
SelectSearch.defaultOptions = {
  shouldSort: false,
  resetScrollPosition: false,
  loadingText: 'Laden...',
  noResultsText: 'Keine Resultate gefunden.',
  noChoicesText: 'Keine Optionen zur Auswahl vorhanden.',
  itemSelectText: '',
  addItemText: 'Klicke Enter um "${value}" hinzuzufügen',
  maxItemText: 'Maximal ${maxItemCount} Werte können hinzugefügt werden.'
}

export default SelectSearch
