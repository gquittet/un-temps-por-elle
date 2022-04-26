// noinspection JSNonASCIINames,NonAsciiCharacters

import intersect from '@alpinejs/intersect'
import Alpine from 'alpinejs'
import carePrices from '../prix.yaml'

Alpine.plugin(intersect)

window.Alpine = Alpine

Alpine.data('caresModal', () => ({
  soins: [],
  titre: '',
  isOpen: false,
  open({ target: { innerText: care } } = { target: { innerText: '' } }) {
    this.titre = care
    this.soins = carePrices[care]
    this.isOpen = true
  },
  close() {
    this.isOpen = false
  },
  clear() {
    this.soins = []
    this.titre = ''
  },
  toggle({ target: { innerText: care } } = { target: { innerText: '' } }) {
    if (this.isOpen) {
      this.close()
      this.clear()
      return
    }

    this.open({ target: { innerText: care } })
  },
}))

export const startAlpine = () => {
  Alpine.start()
}
