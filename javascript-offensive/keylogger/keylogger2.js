// To-do: replace deprecated `keypress`: https://stackoverflow.com/q/52882144
document.onkeypress = function () {
    const get = window.event ? event : e;
    let key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    
    console.log('key :', key);
}
