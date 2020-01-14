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
  notebookname: css basics
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

<!-- #region slideshow={"slide_type": ""} -->
# how to apply CSS
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
# 3 ways to apply CSS

* located in a separate CSS URL
* embedded in html within a `<style>` html tag
* hard-attached to an element itself with `style=`
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# preferred method : a separate CSS

* write you CSS in a separate file, e.g. `mystyle.css`
* which, assuming it is in the same directory as your `hello.html`
* can be kind-of included in `hello.html` 
* by inserting the following <link> line
* in the `<head>` part of your html
<!-- #endregion -->

<!-- #region cell_style="center" slideshow={"slide_type": "slide"} -->
```html
<html>
  <head>
    <!-- this is the line that matters -->
    <link rel="stylesheet" href="mystyle.css" />  
  </head>
  <body>
     Hello
  </body>
</html>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### notes on URLS

* `href` is a URL - remember the `<a>` tag
* which means it can be fetched anywhere with http
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
### notes on self-closing tags

* note also the terminating `/>` in the `<link ... />` element
* which could remind you of `<br />`
* it applies to elements that have no contents
* so the tag is closed immediately - no matching `</tag>` is searched
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# second method : inline in html
<!-- #endregion -->

* you can also insert a `<style>` tag in your html
* and mention the CSS code there directly
* it is **less recommended** as it kind of ruins
* desired separation between contents and presentation

<!-- #region slideshow={"slide_type": "slide"} hide_input=false -->
```html
<p> CSS can be inlined right into the HTML 
    as a &lt;style&gt; tag
</p>
<style>
  p {
    color: red;
    font-size: huge;
  }
</style>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# hardwired in the element with `style=`

* attach a `style=` attribute on a HTML tag
* this method is by far **the worst**
* and should be used in last resort
<!-- #endregion -->

```javascript hide_input=true
embedded_html = `<p 

style="background-color: red; 
font-size: x-large; 
line-height: 50px;
padding:30px;"

>

If you attach styling to a HTML tag with a
<code>style=</code> attribute, it will 
likely take precedence on
everything else;
more on this later on

</p>`;
tools.two_columns(embedded_html)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# practice (1)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} hide_input=true -->
* copy `hello.html` into `mycv.html`
* create a more realistic skeleton for a resume
  * with 3 sections 'work experience', 'education' and 'other activities'
  * keep it simple for now, nothing too elaborate
  * make sure all the text gets attached to adapted tags like `<p>` or `<li>` 
  * and **not** directly under `<body>` like it was done in `hello.html`
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# practice (2)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} hide_input=true -->
* create a CSS file `mycv.css`
  * with some settings that should apply to `mycv.html`
* add a `<link>` tag in the html `<head>` area
  * load `mycv.html` in a browser
  * change the CSS and reload the browser page to see the effect
<!-- #endregion -->
