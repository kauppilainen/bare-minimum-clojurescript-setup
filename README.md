This is a try to show the bare minimum of a clojurescript setup

1. Install Clojure

2. Create file structure
```
.
+-- README.md
+-- resources
    +-- index.html
    +-- style.css
+-- src
    +-- frontend
        +--app.cljs
+-- tests
    +-- frontend
        +--app_tests.cljs
```        

2.1 index.html
```html
<html>
  <head>
    <title>Hello world!</title>
    <link href="style.css" rel="stylesheet"/>
  </head>
  <body>
    <h1>Hello world!</h1>
    <script src="/out/main.js"></script>
  </body>
</html>
```

2.2 app.cljs
```clojure
(ns frontend.app)

(js/console.log "Hello world from ClojureScript app!")
```

2.3 app_tests.cljs
```clojure
(ns frontend.app-tests)

(js/console.log "Hello world from ClojureScript apps tests!")
```

3. Choose Build tool
- clj
  - created by the maintainers of clojure
  - great for simple to advanced builds. Gives the freedom to add whatever you want in form of addons to your project.

4. Create config file deps.edn (for clj build tool. Different for each build tool)
```clojure
{:paths ;; Where to look for clojure code
 ["src" "tests" "resources"]

 :deps ;; Dependencies
 {org.clojure/clojurescript {:mvn/version "1.10.597"}}

 :aliases ;; Build aliases for our app. Can be different for dev, test, prod and so on
 {:dev {:main-opts ["-m" "cljs.main" ;; run clojurescript
                    "-ro" "{:static-dir,[\".\",\"out\",\"resources\"]}" ;; tell repl where to find static files like html/css
                    "-w" "src" ;; watch files for changes and recompile on save
                    "-c" "frontend.app" ;; run our app
                    "-r" ;; run a browser connected repl
                    ]}}}
```

4. Run `clj -A:dev` from terminal
 - Starts process and a clojurescript repl
 - Try writing 'js/alert "Hello from repl!"' and see the alert in the browser window

Congratulations. You have a working ClojureScript app with files being watched, code recompiles on save and a connected repl to the browser all with *zero dependencies*

What we have now is nice and very powerful, but we probably want to generate html from clojurescript as well add reagent (a minimal wrapper around react)

5. Add reagent as a dependency in `deps.edn`
```clojure
{...
 reagent {:mvn/version "0.10.0"}}
```

5.1 Add a div to mount in your index.html
```html
<body>
  <h1>Hello world!</h1>

  <!-- reagent mounts here -->
  <div id="app"></div>

  <script src="/out/main.js"></script>
</body>
```

5.2 Require reagent.core and reagent.dom in `app.cljs`
```clojure
(ns frontend.app
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))
```

5.3 Render html on the "app" div
```clojure
;; A function that returns <h1>"Hello world from ClojureScript</h1>
(defn app []
  [:div
   [:h1
    "Hello world from ClojureScript!"]])

;; render app on div 
(rdom/render [app] (js/document.getElementById "app"))
```

5.4 Run `clj -A:dev` and see your Hello world message rendered on the page


