import * as components from './components'
import * as directives from './directives'
import Vuetify from './framework'

export default Vuetify

const install = Vuetify.install
//引入所有组件和指令挨个注册
Vuetify.install = (Vue, args) => {
  install.call(Vuetify, Vue, {
    components,
    directives,
    ...args,
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuetify)
}
