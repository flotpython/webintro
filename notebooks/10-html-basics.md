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
  notebookname: html basics
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

```javascript slideshow={"slide_type": "-"}
tools = require('../js/tools');
tools.use_style('../media/in-out.css');
```

<!-- #region slideshow={"slide_type": "slide"} -->
# html basics
<!-- #endregion -->

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
# browser and server
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

* create a file named in `.html`
* copy the above template
* open it in your web browser
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.two_columns(fragment1)

```
