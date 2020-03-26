// Compiled by ClojureScript 1.10.597 {}
goog.provide('frontend.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
console.log("Hello world from ClojureScript app!");
frontend.app.app = (function frontend$app$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello world from ClojureScript!"], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.app], null),document.getElementById("app"));

//# sourceMappingURL=app.js.map
