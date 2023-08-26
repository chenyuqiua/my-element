import YqCol from './src/col.vue'

YqCol.install = Vue => {
  Vue.component(YqCol.name, YqCol)
}

export default YqCol