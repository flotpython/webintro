---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all
    formats: md
    notebook_metadata_filter: all,-language_info
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
      jupytext_version: 1.3.2
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  notebookname: CSS properties
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
      height: 47px
      left: 31px
      top: 87px
      width: 159.359px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# CSS main properties
<!-- #endregion -->

```javascript
// run these 2 cells, and then 
// click the created button
tools = require('../js/tools');
tools.use_style('../media/in-out.css');
```

```javascript
tools.run_all_button();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## too many to be listed

<!-- #endregion -->

* more than 100 properties defined in the standard ([see full list here](https://www.w3schools.com/cssref/))
* we just mention the most obviously needed

<!-- #region slideshow={"slide_type": "slide"} -->
## text properties
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} cell_style="split" hide_input=true
text_html = `<p class="text">a sample text</p>`;
text_css = `.text {
    font-family: times;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
}
`;
tools.html_css(text_html, text_css)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## the box model
<!-- #endregion -->

each visible element can be styled according to the box model, as shown in the browser devel tools

<!-- #region cell_style="split" -->
![](../media/box-model.png)
<!-- #endregion -->

<!-- #region cell_style="split" slideshow={"slide_type": ""} -->
* padding is **inside the border**
* margin is **outside the border**
<!-- #endregion -->

of course padding and margin are blended (added) when no border is visible

<!-- #region slideshow={"slide_type": "slide"} -->
## box example
<!-- #endregion -->

```javascript
box_html = `<div class="box1"><p> a box </p></div>`;
box_css = `.box1 {
    padding-top: 5px;
    padding-right: 20px;
    padding-bottom: 2px;
    paddign-left: 5px;
    border-bottom-width: 5px;
    border-bottom-color: black;
    background-color: #bbb;
}`;
tools.html_css(box_html, box_css);
```

```javascript

```
