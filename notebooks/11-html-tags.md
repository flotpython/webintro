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
  notebookname: html tags
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
# basic tags
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
# header tags `<h1>` .. `<h5>`
<!-- #endregion -->

```javascript hide_input=true
headers_fragment = `<h1> toplevel title </h1>
<h2> first sublevel title </h2>
<h3> and so on </h3>
<h3> other subsublevel </h3>
<h2> second sublevel title </h2>
`;
tools.two_columns(headers_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# text tags `<p>` and `<br/>` 
<!-- #endregion -->

```javascript hide_input=true
text_fragment = `<p> it is wise to always embed your text 
in a text tag like &lt;p&gt;, 
that stands for paragraph, and that of course gets justified 
when the text is too wide to fit within the available space.</p>

<p>Sometimes the separation between paragraphs is too much, 
<br/> and in this case you can insert a simple linebreak 
instead using the &lt;br/&gt; tag
</p>
`
tools.two_columns(text_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# lists with `<ul>`  and `<li>`
<!-- #endregion -->

```javascript hide_input=true
bullet_fragment = `<p> a typical bullet list with &lt;ul&gt;;  ul stands for "unordered list"
<ul>
<li> the first bullet </li>
<li> the second bullet </li>
</ul>
</p>
`;
tools.two_columns(bullet_fragment)
```

```javascript hide_input=true
bullet_fragment = `<p> the same with &lt;ol&gt;; instead;  ol stands for "ordered list"
<ol>
<li> the first bullet </li>
<li> the second bullet </li>
</ol>
</p>
`;
tools.two_columns(bullet_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# anchor tag `<a>`
<!-- #endregion -->

the anchor tag serves two purposes :
* create a **hyperlink** that can bring users to another location
* create a **name** locally so that this particular location can be the target of a hyperlink

<!-- #region slideshow={"slide_type": "slide"} -->
## hyperlink `<a href="some-url">`
<!-- #endregion -->

typical **hyperlink** reads like this  
**NOTE** that clicking the link will cause you to leave the present notebook !

```javascript hide_input=true
hyperlink_fragment = `<a href="https://www.google.com/">the hyperlink</a>`;
tools.two_columns(hyperlink_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## name anchor `<a name="some-name">`
<!-- #endregion -->

if you need a hyperlink to point, not at the beginning of this page, but somewhere in the middle, then create an anchor at that location

```javascript hide_input=false
anchor_fragment = `<a name="the-anchor-name">the magic location</a>`;
tools.two_columns(anchor_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## URL to an anchor

* you can then refer to that anchor from any other webpage using a URL that ends with `#the-anchor-name`
* so if this page is published as `https://example.com/some/page.html`
* then you can create a direct access to *the magic location* 
* with a `<a href="https://example.com/some/page.html#the-anchor-name">`

<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## local URL
<!-- #endregion -->

```javascript hide_input=true
redirect_fragment = `<p>it is easy to craft a local URL;
here this hyperlink 
<a href="#the-anchor-name">will go backwards</a>
<br/>
(although in slideshow mode this does not exactly behave well)
</p>
`;
tools.two_columns(redirect_fragment);
```

<!-- #region slideshow={"slide_type": "slide"} -->
# styling

* a handful of convenience tags for quick styling
  * like bold, italics, underline and similar
* however there are **much more powerful** mechanisms
  * so **don't use this at scale**, they are just conveniences
<!-- #endregion -->

```javascript hide_input=true
styling_fragment = `<p>
tags for <b>bold</b> or <i>italics</i> or <u>underline</u> or <s>strike-through</s>
</br>
that of course <u><b><i>can be combined</i></b></u>
</p>`;
tools.two_columns(styling_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# code-like

* `<pre>` stands for preformatted \
* `<code>` is for a terminal-like font and style
<!-- #endregion -->

```javascript hide_input=true
code_fragment = `<p>for inserting code that should be kept as-is

<code><pre>
import numpy as np
import matplotlib.pyplot as plt

X = np.linspace(-2*np.pi, 2*np.pi)
Y = np.sin(X)
plt.plot(X, Y)
</pre></code>
</p>
`;
tools.two_columns(code_fragment)
```
