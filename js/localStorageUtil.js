/*
@author:李泽宇
@time:2020-05-08
 */
function readComments(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function saveComments(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
