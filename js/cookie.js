function setCookie(name, value, options) {
    if (arguments.length > 1 && typeof value === 'string') {
        if (Object === !options.constructor) {
            options = {}
        }
        if (typeof options.expires === 'number') {
            var d = new Date();
            d.setDate(d.getDate() + options.expires);
        }
        return (document.cookie = [
            name + "=" + value,
            typeof options.expires === 'number' ? ";expires=" + d : "",
            typeof options.domain === 'string' ? ";domain=" + options.domain : "",
            typeof options.path === 'string' ? ";path=" + options.path : ""
        ].join(""));

    }
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        if (cookieArray[i].split("=")[0] === name) {
            return cookieArray[i].split("=")[1];
        }
    }
    return "";
}
/**
 * @return {string}
 */
function GetCookie(name){
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        if (cookieArray[i].split("=")[0] === name) {
            return cookieArray[i].split("=")[1];
        }
    }
    return "";
}
function delCookie(name){
    let expires = new Date();
    expires.setDate(expires.getDate() - 1);
    let value1 = setCookie(name);
   /* let value = GetCookie(name);*/
    document.cookie  = name + "=" + value +";expires="+expires;
}
function foreachCookie() {
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length;i++){
        let arr = cookieArray[i].split("=");
        if (arr.length >0){
            delCookie(arr[0]);
        }
    }
}
