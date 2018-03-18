import ToastComponet from './vue-toast.vue'

let Toast = {

}

Toast.install = function (Vue, options) {

  var opt = {
    duration: 3000
  }
  for (var key in options) {
    opt[key] = options[key];
  }

  Vue.prototype.$toast = function (message, option) {

    if (typeof option == 'object') {
      for (var key in option) {
        opt[key] = option[key];
      }
    }

    const ToastController = Vue.extend(ToastComponet); //继承组件

    var instance = new ToastController().$mount(document.createElement('div')) //返回这个组件的实例,挂在到div

    instance.message = message;
    instance.visible = true;

    document.body.appendChild(instance.$el);

    setTimeout(() => {
      instance.visible = false;
      document.body.removeChild(instance.$el);
    }, opt.duration)
  }

  Vue.prototype.$toast['show'] = function (message, option) {
    Vue.prototype.$toast(message, option);
  }

}

if(window.Vue){
  Vue.use(Toast)
}

export default Toast;