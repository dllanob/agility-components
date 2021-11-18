import Query from './Query'

export default {
    methods: {
        goToAnchor () {
            this.scrollToElement(Query.query)
        },
        scrollToElement (el) {
            document.querySelector(`#${el}`).scrollIntoView()
        },
        convertAnchor (anchor) {
            let suffix = anchor.substr(anchor.length - 2, 2)
            let prefix = ''
            if (suffix === 'VL') {
                prefix = 'vl_'
                anchor = prefix + anchor.substr(0, anchor.length - 2)
            } else if (anchor === 'mexico') {
                prefix = 'vl_'
                anchor = prefix + anchor
            } else if (anchor === 'indonesia' || anchor === 'ethiopia' || anchor === 'colombia' || anchor === 'india' || anchor === 'nicaragua') {
                prefix = 'ol_'
                anchor = prefix + anchor
            } else if (anchor === 'machines' && !this.$json.machineExperience.detailsOl.hide) {
                anchor = 'machine-experience-detailsOl'
            } else if (anchor === 'machines' && this.$json.machineExperience.detailsOl.hide) {
                anchor = 'machine-experience-detailsVl'
            } else if (anchor === 'accessories') {
                anchor = 'accessory-experience-details'
            } else {
                return anchor
            }
            // console.log('>>>>>>>>>>>>>>>> Anchor:', anchor)
            return anchor
        }
    }
}
