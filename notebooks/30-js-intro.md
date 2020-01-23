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
  notebookname: JS intro
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
# JavaScript
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## the missing piece
<!-- #endregion -->

JavaScript comes in addition to
* HTML for **content**
* CSS for **style**

JavaScript
* it is a full-fledged **programming language** 
* and provides for **behaviour**

<!-- #region slideshow={"slide_type": "slide"} -->
## JavaScript characteristics
<!-- #endregion -->

* runs **inside the browser**
* has direct **access to the DOM**
* that it can freely manipulate
  * to dynamically change properties 
  * in response to user-triggered events

<!-- #region slideshow={"slide_type": "slide"} -->
## example 1
<!-- #endregion -->

in this example we will :
* create two `<div>` elements
* one acts as a button, that can make  
  the other one visible or not
* for that we create a JavaScript  
  **function** named `toggle()`
* that is bound to the `onclick` event   
  of the button `<div>` element

```javascript hide_input=true slideshow={"slide_type": "slide"}
all3_html = `<!-- binding a JS function 
     to user-triggered event -->
<div id="button"
     onclick="toggle()">
  click me to hide or show next item
</div>
<div id="area">
    This area will come and go
    <br/> Check console output 
    in the devel tools area
</div>`;
all3_css = `#button {
  padding: 20px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: #ffb6b9;
}
#area {
  padding: 10px;
  background-color: #f5f0e3;
}`;
all3_js = `function toggle() {
  // locate the element that we want to toggle
  let to_toggle = document.getElementById("area");
  // find its current status
  let current = to_toggle.style.display;
  // apply the opposite status
  if (current == "none") {
    to_toggle.style.display = "block";
  } else {
    to_toggle.style.display = "none";    
  }
  // show a message in the JS console
  console.log(\`display \${current} →\`
              \`\${to_toggle.style.display}\`);
}`;
tools.iframe_html_css_js("foo-all3", all3_html, all3_css, all3_js, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## example 2
<!-- #endregion -->



```javascript

```
