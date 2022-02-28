/*
@author:李泽宇
@time:2020-05-08
 */
/*深拷贝复制实现继承*/
//深拷贝递归函数
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            //根据是否是数组还是对象，创建一个新的数组或对象
            c[i] = (p[i].constructor === Array) ? [] : {};
            //递归调用
            deepCopy(p[i], c[i]);
        } else {
            //不是object对象，直接拷贝属性
            c[i] = p[i];
        }
    }
    return c;
}
