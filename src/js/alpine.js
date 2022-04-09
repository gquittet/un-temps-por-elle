// noinspection JSNonASCIINames,NonAsciiCharacters

import intersect from '@alpinejs/intersect'
import Alpine from 'alpinejs'

Alpine.plugin(intersect)

window.Alpine = Alpine

const carePrices = {
  'Soins visage': [
    { name: "Coup d'éclat Grain parfait", duration: '30 min', price: '40€' },
    { name: 'Éclat divin', duration: '60 min', price: '55€' },
    { name: 'Éclat suprême', duration: '90 min', price: '85€' },
    { name: 'Éclat précieux', duration: '75 min', price: '75€' },
    { name: 'Yeux doux', duration: '40 min', price: '35€' },
    {
      name: "Yeux doux (en complément d'un soin visage)",
      duration: '40 min',
      price: '12€',
    },
    { name: 'For men', duration: '60 min', price: '55€' },
  ],
  'Beauté des mains/pieds': [
    { name: 'Manucure + pose vernis classique', price: '12€+5€' },
    { name: 'Spa + pose vernis classique', price: '25€+5€' },
    { name: 'Pose vernis semi permanent', price: '20€' },
    { name: 'Pédicure esthétique + pose vernis classique', price: '12€+5€' },
    {
      name: 'Dépose vernis semi permanent (pose extérieure)',
      price: '10€',
    },
  ],
  'Soins du corps': [
    { name: 'Gommage', duration: '30 min', price: '25€' },
    { name: 'Enveloppement', duration: '30 min', price: '25€' },
    { name: 'Soin drainant', duration: '45 min', price: '45€' },
    {
      name: 'Soin du dos (gommage, enveloppements, massage)',
      duration: '+/- 1h15',
      price: '65€',
    },
    {
      name: 'Rituel du corps (gommage, enveloppement, massage) - Solo',
      duration: '+/- 2h',
      price: '95€',
    },
    {
      name: 'Rituel du corps (gommage, enveloppement, massage) - Duo',
      duration: '+/- 2h',
      price: '180€',
    },
  ],
  'Massages relaxants / Réflexologie': [
    { name: 'Aux huiles essentielles (Dos)', duration: '30 min', price: '30€' },
    { name: 'Aux huiles essentielles (Corps)', duration: '60 min', price: '60€' },
    { name: 'Lomi Lomi', duration: '60 min', price: '60€' },
    { name: 'Jambes et Pieds', duration: '30 min', price: '30€' },
    { name: 'Jambes lourdes', duration: '45 min', price: '45€' },
    {
      name: 'Harmonisation et relaxation du corps par les pieds',
      duration: '45 min',
      price: '45€',
    },
    { name: 'Réflexologie faciale', duration: '30 min', price: '30€' },
    {
      name: 'Réflexologie faciale avec massage du visage, cou et épaules',
      duration: '45 min',
      price: '45€',
    },
    { name: 'Réflexologie palmaire', duration: '30 min', price: '30€' },
  ],
  Épilations: [
    { name: 'Sourcils', price: '8€' },
    { name: 'Lèvre supérieure', price: '8€' },
    { name: 'Aisselles', price: '12€' },
    { name: 'Demi jambes', price: '12,50€' },
    { name: 'Jambes complètes', price: '25€' },
    { name: 'Bikini simple', price: '15€' },
  ],
  Maquillage: [{ name: 'Maquillage jour/soirée', price: '25€' }],
  'Spécial mariée': [
    { name: "Séance d'essai", price: '12€' },
    {
      name: 'Forfait 1 (soin visage, épilations sourcils, lèvre supérieure et maquillage)',
      price: '90€',
    },
    {
      name: 'Forfait 2 (soin visage, épilations sourcils/lèvre supérieure/aisselles/demi jambes et maquillage)',
      price: '105€',
    },
    {
      name: 'Forfait 3 (Idem Forfait 2 + vernis semi permanent mains ou pieds)',
      price: '120€',
    },
    {
      name: 'Forfait 4 (Idem Forfait 2 + vernis semi permanent mains et pieds)',
      price: '135€',
    },
  ],
  'Soins esthétiques pour personnes fragilisées': [
    { name: 'Soin visage', price: '50€' },
    { name: 'Soin des mains/pieds', price: '20€' },
    { name: 'Soin des ongles', price: '10€' },
    { name: 'Conseils (maquillage, soins, ...)', price: '15€' },
    { name: 'Massage relaxant', price: '50€' },
  ],
}

Alpine.data('caresModal', () => ({
  soins: [],
  titre: '',
  isOpen: false,
  open({ target: { innerText: care } } = { target: { innerText: '' } }) {
    this.titre = care
    this.soins = carePrices[care]
    this.isOpen = true
    console.log('Ouvre la popup')
  },
  close() {
    this.isOpen = false
    console.log('Ferme la popup')
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
