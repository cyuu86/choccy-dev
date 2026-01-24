// ==UserScript==
// @name     ayaneigh fflogs boss name change
// @version  1
// @grant    none
// @include https://www.fflogs.com/*
// @run-at document-idle
// ==/UserScript==

setTimeout(function() {
var arr = document.getElementsByClassName("Boss zone-boss-cell");
arr[0].innerHTML = "Step On Me";
arr[1].innerHTML = "BJ Bros";
arr[2].innerHTML = "Orbital Omen Prog";
arr[3].innerHTML = "Everything Burns";
arr[4].innerHTML = "Idyllic Laser PvP";
}, 200); // 2000 milliseconds = 2 seconds
