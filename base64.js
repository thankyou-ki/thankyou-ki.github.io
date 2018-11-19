function encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}
function decode(str) {
    return decodeURIComponent(escape(atob(str)));
}