export default{
    install:function(Vue,opt){
        Vue.prototype.cloneobj = function(obj){
            let copy = Object.assign({}, obj);
            return copy
        },
        Vue.prototype.urlArgs=function(obj){
            var url = ''
            url = url + '?'; // 提前加好问号
            for(var name in obj){
                url += name + '=' + encodeURIComponent(obj[name]) + '&'; // 转码并进行赋值
            }
            url = url.substring(0,url.length-1); // 去掉最后一个&符号
            return url; // 返回
        }
    }
}