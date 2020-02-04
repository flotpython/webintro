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
  notebookname: tools intro
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
# tools - intro
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## pretty low level
<!-- #endregion -->

HTML, CSS and JavaScript are powerful each in their field  
but evolution is slowed down   
with the large number of browsers that need to follow up

so some aspects remain tedious  
fuel for the proliferations of tools  
some features sometimes make it to the core 3 pillars

<!-- #region slideshow={"slide_type": "slide"} -->
for example : **CSS variables**   
i.e. ability to define a symbolic name for, say, a color  
and reuse it in different places

has been missing for a long time,  
now available as a native CSS feature  
although with a rather ugly syntax !
<!-- #endregion -->

```javascript hide_input=true
cssvar_html = `<p>using a CSS variable</p>`;
cssvar_css = `/* declaration */
:root {
  --main-bg-color: #eab0d9;
}
/* usage */
p {
  background-color: var(--main-bg-color);
}
`
tools.iframe_html_css("cssvar", cssvar_html, cssvar_css)

```

<!-- #region slideshow={"slide_type": "slide"} -->
## filling the void

such a lacking feature is often taken care of through tooling  

in the case of CSS variables, miscellaneous **preprocessors** available like e.g.  
[Sass](http://sass-lang.com/), [Less](http://lesscss.org/features/)

the principle of a preprocessor being to **transform** the code **before it runs**  
to make it compatible with what the low-level tool expects  
(one famous example being the C/C++ preprocessor)
<!-- #endregion -->

<p class="rise-footnote">
specifically with CSS variables, a preprocessor like `less` will offer its own extra syntax for defining and using variables, and will rewrite the human-written code into CSS</p>    

<!-- #region slideshow={"slide_type": "slide"} -->
### filling the void (2)

several other areas where tooling is important :

* **transpiling** : you want to support as many users as you can, including with - possibly very - old browsers
* **minimizing** : 
* **bundling** :
<!-- #endregion -->
