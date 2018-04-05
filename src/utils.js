export default{
    install:function(Vue,opt){
        Vue.prototype.cloneobj = function(obj){
            let copy = Object.assign({}, obj);
            return copy
        }
    }
}