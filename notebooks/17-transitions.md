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
  notebookname: CSS animations
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
      height: 47.7431px
      left: 91.9861px
      top: 25.9618px
      width: 159.497px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# CSS transitions and animations
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## transitions
<!-- #endregion -->

* we have seen that properties can change over time
* either on events (e.g. a hyperlink when you hover over or click it)
* or programmatically (typically through JavaScript)

<!-- #region slideshow={"slide_type": "slide"} -->
### transitions (ctd)
* the browser has the ability to perform those changes **smoothly**
  * over a certain duration
  * in a continuous way
* of course this applies to some properties only
  * lengths
  * colors
* everything that can be mapped to a **continuous** space
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## transition example 1
<!-- #endregion -->

```javascript hide_input=true
tools.iframe_samples_html_css("transition1")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## transition example 2
<!-- #endregion -->

```javascript hide_input=false slideshow={"slide_type": "-"}
tools.iframe_samples_html_css("transition2")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## transition example 3
<!-- #endregion -->

```javascript hide_input=false slideshow={"slide_type": "-"}
tools.iframe_samples_html_css_js("transition3")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## see also

* [transitions on css-tricks](https://css-tricks.com/almanac/properties/t/transition/)
* [animations on css-tricks](https://css-tricks.com/almanac/properties/a/animation/)
* an explanation, among other things, [on `ease-in`, `ease-out`, `ease-in-out`, and `linear`](https://www.freecodecamp.org/news/css-transitions-explained-d67ab9a02049/)
<!-- #endregion -->
