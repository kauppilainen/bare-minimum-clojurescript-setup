(ns frontend.app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(js/console.log "Hello world from ClojureScript app!")

;; A function that returns <h1>"Hello world from ClojureScript</h1>
(defn app []
  [:div
   [:h1
    "Hello world from ClojureScript!"]])


;; render app on div 
(rdom/render [app] (js/document.getElementById "app"))
