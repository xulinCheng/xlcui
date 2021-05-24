// 导入组件，组件必须申明name
import XLButton from './src'
// 为组件提供install 安装方法，供按需引入
XLButton.install = function (Vue) {
    Vue.component(XLButton.name, XLButton)
}
//导出组件
export default XLButton