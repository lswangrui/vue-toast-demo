var path = require('path');
module.exports = {
  entry:'./src/lib/index.js',
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'vue-toast-demo.js',
    libraryTarget:'umd', //指定打包成amd格式,建议使用umd自动判断输出什么格式的
    library:'vue-toast-demo'
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader',
        exclude:/node_modules/,
        options:{
          loaders:{
            scss:'style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.join(__dirname,'src'),
        exclude:/node_modules/
      }
    ]
  },
  plugins:[

  ]
}