// Generated by BUCKLESCRIPT VERSION 1.3.3 , PLEASE EDIT WITH CARE
'use strict';


var date = Date.now();

var myInterval = setInterval(function () {
      console.log("hello!");
      return /* () */0;
    }, 1000);

var width = window.innerWidth;

var heigth = window.innerHeight;

window.addEventListener("click", function () {
      console.log("asd");
      return /* () */0;
    });

window.onload = function () {
  console.log("load");
  return /* () */0;
};

var p = fetch("/greatings");

var p2 = p.then(function (res) {
        return res.text();
      }).then(function (text) {
      console.log(text);
      return /* () */0;
    });

var p3 = p2.catch(function (err) {
      console.log(err);
      return /* () */0;
    });

var p4 = p.then(function (res) {
        return res.json();
      }).then(function (json) {
      console.log(json);
      return /* () */0;
    });

exports.date       = date;
exports.myInterval = myInterval;
exports.width      = width;
exports.heigth     = heigth;
exports.p          = p;
exports.p2         = p2;
exports.p3         = p3;
exports.p4         = p4;
/* date Not a pure module */