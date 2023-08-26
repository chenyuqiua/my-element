import YqRow from './components/row'
import YqCol from './components/col'

const components = [YqRow, YqCol]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.use(component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
