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
      left: 23.5px
      top: 552.333px
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

* what should be the entry point ?
* the browser does many things on its own  
  or upon actions triggered by the user
  all at the same time
* also, as importantly
  the browser's main job being to fetch data on the network  
  these are structurally slow operations  
* but users expect the browser to be always responsive  
<!-- #endregion -->

```javascript
https://javascript.info/callbacks#pyramid-of-doom
```
