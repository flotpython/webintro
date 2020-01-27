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
  notebookname: web frontend ecosystem
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
  toc:
    base_numbering: 1
    nav_menu: {}
    number_sections: false
    sideBar: false
    skip_h1_title: false
    title_cell: Table of Contents
    title_sidebar: Contents
    toc_cell: false
    toc_position:
      height: 179px
      left: 25px
      top: 134px
      width: 202.391px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>


# Introduction to web frontend

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## Web ecosystem (frontend)
<!-- #endregion -->

* crash course on how to write web pages  
* just scratch the surface, a **whole lot** is not even mentioned  
* focus on the core technological bricks
  * HTML (HyperText Markup Language)
  * CSS (Cascading Style Sheets)
  * JavaScript (a.k.a. ECMAScript)

<!-- #region slideshow={"slide_type": "slide"} -->
## evolution speed
<!-- #endregion -->

* all this started in a very awkward way
  * early versions were always quick and dirty
  * for example, the first JavaScript version [was written in 10 days](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/)
* evolving very rapidly
* most notably
  * in the way all the pieces are integrating together
  * as well as with over-layers that try to improve / mitigate some flaws
  * like less for css, TypeScript for JavaScript, and many many more


<!-- #region slideshow={"slide_type": "slide"} -->
##  focus on HTML - CSS - JavaScript
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* we will only focus on **grassroots level**
  * that will likely remain valid for a while
* versions for our focus
  * HTML-5, CSS-3, ECMAScript-6
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## backend and frontend 
<!-- #endregion -->

* typical Web-based application at work involves 2 sides
  * Web server : runs on the application provider's side
  * Web browser : runs on your laptop
* code running on the former is called ***backend*** 
* code that runs on the latter is called ***frontend***
  * even though it is provided by the backend, of course  

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/client-server.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## you may have heard of
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* typical backend technologies
  * PHP, Python/django, Ruby/on rails, SQL databases
  * apache, nginx, load balancing
* typical frontend technologies
  * HTML, CSS, JavaScript
* in between
  * TCP/IP : low-level protocol of the Internet
  * HTTP : HyperText Transfer Protocol
  * WebSocket : full-duplex communication channel over a single TCP connection 
<!-- #endregion -->
