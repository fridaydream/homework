webpackJsonp([1],{4:function(i,t,n){i.exports=n(5)},5:function(i,t,n){"use strict";var a=n(0),e=function(i){return i&&i.__esModule?i:{default:i}}(a),s=new e.default;xtag.register("x-praise",{content:'<div class="hand" id="hand"><div class="finger"></div><div class="thumb" id="thumb"></div></div><div id="animation" class="animation">+1</div>',methods:{praise:function(){var i=this;s.clickAction();var t=i.querySelector("#animation");t.className="num",setTimeout(function(){t.className=""},800)}},events:{click:function(i){var t=this;if("hand"==i.target.id){var n="";n&&clearTimeout(n),n=setTimeout(function(){t.praise()},500)}}}})}},[4]);