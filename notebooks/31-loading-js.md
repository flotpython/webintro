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
  notebookname: Loading JS
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
# Loading JavaScript
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## open topic
<!-- #endregion -->

* loading JavaScript is IMHO **still an open topic** 
* because in the general sense it is about  
  **smooth dependencies**
* typical use case  
  module X needs module Y  
  just like when a Python module does `import another`

<!-- #region slideshow={"slide_type": "slide"} -->
## simplest case
<!-- #endregion -->

* restricting ourselves to the simplest case
* where a single HTML page needs to load one JS fragment
* there are 1 simple way
  * the `<script>` tag
  * that comes in 2 flavours,
  * whether code is inline or in a separate location

<!-- #region slideshow={"slide_type": "slide"} -->
## `<script>` with inline code
<!-- #endregion -->

<!-- #region cell_style="split" -->
* quite simply, you can inject some JS code 
* right into your HTML document 
* through a `<script>` tag
<!-- #endregion -->

<!-- #region cell_style="split" hide_input=false slideshow={"slide_type": ""} -->
```html
<script>
  function hello() {
    console.log("Hello world");
  }
  hello()
</script>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## `<script src="">` to load from a URL
<!-- #endregion -->

* most often though, code is stored in separate location
  * either as a companion to the HTML page
  * or in a remote location
* for that, use `<script src="some-url"></script>` 

<!-- #region slideshow={"slide_type": "slide"} -->
### `<script src="">` - examples
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `<script src="foo.js"></script>`  
  loads `foo.js` from the same  
  directory as the current page 

* and <span style="font-size:0.4em"><code>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js&quot;&gt; &lt;/script&gt;</code></span>  
  loads jQuery (more on that later)  
    from a publicly available CDN
  
  
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

* create a HTML document
* as a collection of 3 files, 
* say : `resume.html`, `resume.css`, `resume.js`
* make sure the html header loads the css and js companions


then 

* edit the JavaScript code
* so that your resume background
* alternates every 1 second
* between 2 different colours
* see example 2 for inspiration

<!-- #region slideshow={"slide_type": "slide"} -->
## the browser cache (yet again)
<!-- #endregion -->

* the browser cache thing (see CSS loading)
* applies exactly the same  
* in the case of JavaScript code

**Remember**
* to use Shift-load, or other cache-cleaning tool  
* if changes in a file do not seem to kick in
