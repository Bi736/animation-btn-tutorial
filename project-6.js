
"use strict";

let html = document.getElementById("htmlcode");
let css = document.getElementById("csscode");

htmlbtn.onclick=function(){
    htmlcode.select();
    document.execCommand("copy");
}


cssbtn.onclick=function(){
    csscode.select();
    document.execCommand("copy");
}


