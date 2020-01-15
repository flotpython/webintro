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
  notebookname: html basics
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
      height: calc(100% - 180px)
      left: 10px
      top: 150px
      width: 245.391px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": "slide"} -->
# HTML basics
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
## html document structure
<!-- #endregion -->

the overall structure of a HTML document looks like this :

```javascript hide_input=true
fragment1 = `<html>
  <head>
     <!-- various document-wide declarations -->
  </head>
  <body>
     <!-- the actual document contents -->
     Hello
  </body>
</html>
`;

tools.one_column(fragment1)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## browser and server
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
### regular setup

![](../media/client-server.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
### our setup today

![](../media/local-file.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* create a file named `hello.html`
* copy the above template
* open it in your web browser
* you will see something like this
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.two_columns(fragment1)

```

<!-- #region slideshow={"slide_type": "slide"} -->
## devel tools
<!-- #endregion -->

using a right click on the 'Hello' text

<!-- #region slideshow={"slide_type": ""} -->
![](../media/inspect-element-menu.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
you can reach your browser's devel tools  
(may need additional prep / install)  
use Chrome in case it is not working as expected  
![](../media/inspect-element-elements.png) 
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
another interesting part is the (javascript) Console  
where you can interact with the browser (more on this later)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
![](../media/inspect-element-console.png) 
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## DOM = Document Object Model
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* the `<tag> ... </tag>` notation 
* unambiguously maps to a tree structure - known as an Abstract Syntax Tree
* referred to in all documentation as "*the DOM*"
<!-- #endregion -->

```javascript cell_style="center" hide_input=true slideshow={"slide_type": "slide"}
tree_html = `<html>
  <head>
    <title> top title </title>
  </head>
  <body>
    <p> a paragraph </p>
    <p> a paragraph </p>
  </body>
</html>`;
tools.one_column(tree_html)
```

<!-- #region cell_style="center" hide_input=true -->
![](../media/abstract-syntax.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## be rigourous
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* browsers tend to be as tolerant as possible
* e.g. omitting a closing tag may well render fine
* **however** there's only so much that can be guessed
* this may cause **huge headaches** down the road
* so make sure to **always** close your tags properly
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
fragment_unclosed = `<p> do not
<p> do this`;

tools.two_columns(fragment_unclosed)
 
```

```javascript hide_input=true
fragment_closed = `<p> do this instead </p>
<p> clean up behind yourself </p>`;

tools.two_columns(fragment_closed)
 
```
