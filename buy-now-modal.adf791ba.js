parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Pq4e":[function(require,module,exports) {
const e=document.querySelector(".form__button--close"),t=document.querySelector(".form__button--open"),a=document.querySelector("[data-modal-buy-now-open]"),n=document.querySelector("[data-modal-buy-now-open-mob-menu]"),i=document.querySelector(".backdrop-buy-now"),o=document.querySelector(".modal-buy-now"),d=document.querySelector(".form__title"),m=document.querySelector(".form__field--name"),c=document.querySelector(".form__field--tel"),s=document.querySelector(".form__field--mail"),_=document.body.clientWidth;a.addEventListener("click",()=>{i.classList.remove("backdrop-buy-now--is-hidden"),d.classList.add("animate__animated","animate__bounceInDown"),m.classList.add("animate__animated","animate__bounceInLeft"),c.classList.add("animate__animated","animate__bounceInRight"),s.classList.add("animate__animated","animate__bounceInLeft"),document.body.setAttribute("style",`max-width: ${_}px; overflow: hidden;`)}),n.addEventListener("click",()=>{i.classList.remove("backdrop-buy-now--is-hidden"),d.classList.add("animate__animated","animate__bounceInDown"),m.classList.add("animate__animated","animate__bounceInLeft"),c.classList.add("animate__animated","animate__bounceInRight"),s.classList.add("animate__animated","animate__bounceInLeft"),document.body.setAttribute("style",`max-width: ${_}px; overflow: hidden;`)}),e.addEventListener("click",()=>{i.classList.add("backdrop-buy-now--is-hidden"),d.classList.remove("animate__animated","animate__bounceInDown"),m.classList.remove("animate__animated","animate__bounceInLeft"),c.classList.remove("animate__animated","animate__bounceInRight"),s.classList.remove("animate__animated","animate__bounceInLeft"),document.body.removeAttribute("style",`max-width: ${_}px; overflow: hidden;`)}),t.addEventListener("click",()=>{location.href=location.href,i.classList.add("backdrop-buy-now--is-hidden"),document.body.removeAttribute("style",`max-width: ${_}px; overflow: hidden;`)}),i.addEventListener("click",function(e){e.target.closest(".modal-buy-now")||(i.classList.add("backdrop-buy-now--is-hidden"),d.classList.remove("animate__animated","animate__bounceInDown"),m.classList.remove("animate__animated","animate__bounceInLeft"),c.classList.remove("animate__animated","animate__bounceInRight"),s.classList.remove("animate__animated","animate__bounceInLeft"),document.body.removeAttribute("style",`max-width: ${_}px; overflow: hidden;`))});
},{}]},{},["Pq4e"], null)
//# sourceMappingURL=/team-ice-cream/buy-now-modal.adf791ba.js.map