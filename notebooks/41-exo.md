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
  notebookname: exo - spinning wheel
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

<!-- #region slideshow={"slide_type": ""} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# practice : a spinning wheel
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');

tools.init();
```

<!-- #region slideshow={"slide_type": ""} -->
## objective : the outcome
<!-- #endregion -->

```javascript hide_input=true
tools.iframe_exo("spinning-wheel")
```

<!-- #region slideshow={"slide_type": ""} -->
## a few hints
<!-- #endregion -->

* write a JavaScript class `SpinningWheel` 
* that can be created from :
  * a `svg` element
  * the circle's center and radius `cx`, `cy`, `cr`,
  * the number of dots, the radius of dots `n_dots`, `r_dots`
  * the period in milliseconds (for one wheel round)
  * two colours for the 'dark' and 'light' ends of the spectrum
* and with methods like
  * `start()`
  * `stop()`
  * `resume()`
  * `clear()` 


* attach to the `load` event of your page
* a function that creates the spinnig wheel
  and then and stops it after a fixed duration

<!-- #region slideshow={"slide_type": "slide"} -->
## remember also that
<!-- #endregion -->

<!-- #region -->
* svg elements need to be created with the right namespace, i.e.:

```javascript
const svgNS = "http://www.w3.org/2000/svg";
let dot = document.createElementNS(svgNS, 'circle');
```

<!-- #endregion -->
