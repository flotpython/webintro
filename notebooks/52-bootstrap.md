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
  notebookname: bootstrap
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
    sideBar: true
    skip_h1_title: false
    title_cell: Table of Contents
    title_sidebar: Contents
    toc_cell: false
    toc_position:
      height: 247.719px
      left: 1274.52px
      top: 29px
      width: 253.469px
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
# bootstrap
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## what is bootstrap ?
<!-- #endregion -->

originally developped by twitter, [bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) is a - mostly CSS - library that offers
* a [grid-based framework for easier responsive layouts](https://getbootstrap.com/docs/4.4/layout/overview/)
* a distinctive look & feel for [usual content](https://getbootstrap.com/docs/4.4/content/typography/)
* [some components](https://getbootstrap.com/docs/4.4/components/alerts/) like navbars, paginations...





```javascript slideshow={"slide_type": "slide"} hide_input=true
tools.iframe_exo("bootstrap", true, true)
```
