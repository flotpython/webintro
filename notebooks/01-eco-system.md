---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all
    formats: ipynb,md
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
  notebookname: Web ecosystem (frontend)
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

```javascript
tools = require('../js/tools');
tools.use_style('../media/in-out.css');
```

<!-- #region slideshow={"slide_type": "slide"} -->
# Web ecosystem (frontend)
<!-- #endregion -->

* crash course on how to write web pages  
*just scratch the surface, a **whole lot** is not even mentioned  
* focus on the core technological bricks
  * HTML (HyperText Markup Language)
  * CSS (Cascading Style Sheets)
  * JavaScript (a.k.a. ECMAScript)

<!-- #region slideshow={"slide_type": "slide"} -->
# evolution speed
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
#  focus

* we will only focus on **grassroots level**
  * that will likely remain valid for a while
* versions for our focus
  * HTML-5, CSS-3, ECMAScript-6
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# backend and frontend 
<!-- #endregion -->

* a typical realcase Web-based application at work involves 2 sides
  * Web server : runs on the application provider's side
  * Web browser : runs on your laptop
* code running on the former is called ***backend*** 
* code that runs on the latter is called ***frontend***
  * even though it is provided by the backend, of course
* typical backend technologies
  * PHP, Python/django, Ruby/on rails, SQL databases
  * apache, nginx, load balancing
* typical frontend technologies
  * HTML, CSS, JavaScript
