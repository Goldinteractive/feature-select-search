import SelectSearch from '../src'

base.features.add('select-search', SelectSearch)
base.features.add('select', SelectSearch, {
  searchEnabled: false
})

base.features.init()
