// 就是一些基础的功能
(function(){
    // 定义宿主对象，可能是浏览器可能是服务器环境，可能是虚拟设备
    var root = typeof self == 'object' && self.self === self && self || 
                typeof global == 'object' && global.global === global && global || 
                this || 
                {};   
    
    // 首先要创建一个函数
    var _ = function(){};

    // 往函数上挂载方法
    _.map = function(){};
}());