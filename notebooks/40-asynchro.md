---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all
    formats: md
    notebook_metadata_filter: all,-language_info,-jupytext.text_representation.jupytext_version
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
      jupytext_version: 1.3.2
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  notebookname: asynchronism
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
  toc:
    base_numbering: 1
    nav_menu: {}
    number_sections: true
    sideBar: false
    skip_h1_title: false
    title_cell: Table of Contents
    title_sidebar: Contents
    toc_cell: false
    toc_position:
      height: 247.688px
      left: 1377.5px
      top: 138.625px
      width: 165px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<!-- #region slideshow={"slide_type": "slide"} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# asynchronism in JavaScript
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## sequential programming model
<!-- #endregion -->

in the traditional languages we have seen so far  

* a program has an **entry point**  
  (e.g. `python foo.py` in Python, `a.out` in C++, etc…)
* and it mostly does **one thing** at a time  
  in the order specified in the code  
  starting from the entry point


<p class="rise-footnote"> 
these traditional languages do have some tools to deal with 
more concurrency, and we will cover that briefly in later courses
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
## asynchroneous environment
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
within the browser though, things are different

* what is the entry point ?
* the browser does many things on its own  
  or upon actions triggered by the user
  all at the same time
* also, as importantly
  the browser's main job being to fetch data on the network  
  these are structurally slow operations  
* but users expect the browser to be always responsive  
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## callbacks everywhere
<!-- #endregion -->

<!-- #region -->
**callbacks** are one first relatively naive approach to asynchronicity 

* a function that is passed as an argument
* so that it gets triggered in the future
* when some conditions are met

we have seen many examples already

```javascript
window.addEventListener(
    "load", 
    function() { console.log("page loaded"); }
);
```

or 

```javascript
window.setTimeout(
    function () { console.load("10 seconds later"); },
    10000);
```


<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### callbacks
<!-- #endregion -->

<!-- #region -->
in this context, it is common to create functions **on the fly**
```javascript
window.addEventListener(
    "load", 
    // returns a function object
    function() { console.log("page loaded"); }  
);
```
<!-- #endregion -->

<p class="rise-footnote">this style of creating function objects is extremely common in JavaScript; it is kind of close to `lambda` expressions in Python.

<!-- #region slideshow={"slide_type": "slide"} -->
## closures
<!-- #endregion -->

* it is rather frequent that a callback needs to access context data
* it is safe to use lexically-bound variables inside the callback
* see the `context` variable in the example below

```javascript
// remember this code runs in a node.js instance
// so there is no 'window' global in this runtime 
{ 
    let context = {a:1, b:2};
    setTimeout( 
        function() {
            console.log("context is", context);
        },
        2000);
    console.log("timeout armed");
} 
```

<!-- #region slideshow={"slide_type": "slide"} -->
### closures - ctd
<!-- #endregion -->

<!-- #region cell_style="split" -->
```javascript
{ 
  let context = {a:1, b:2};
  setTimeout( 
    function() {
      console.log(context);
    },
    2000);
  console.log("armed");
}
```
<!-- #endregion -->

<!-- #region cell_style="split" -->
* `context` is created in a block
* that is long gone at the time  
  the callback triggers
* but it is still reachable  
  from the callback
* as it was *captured* in the closure

<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## arrow functions
<!-- #endregion -->

an alternative syntax to create functions on the fly

```javascript cell_style="split"
// create a function
(x) => { console.log(`PING x=${x}`); }
```

```javascript cell_style="split"
// we could have named it
foo = (x) => { console.log(`PING x=${x}`); }
```

```javascript cell_style="split"
// so that we could call it
foo(10)
```

```javascript cell_style="split"
// a common idiom 
setTimeout(
    () => {console.log("PONG")},
    1000);
console.log("armed")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## the limits of callbacks
<!-- #endregion -->

* highly recommended to study the  
  [introduction to callbacks in javascript.info](https://javascript.info/callbacks)
* that highlights the fundamental drawback  
  of using callbacks
* which is that you need to split your code into pieces  
  and fit the pieces into functions
* it easily becomes hard to read and modify  
  especially if there is logic involved
