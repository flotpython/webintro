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
  notebookname: id and class
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
# HTML elements ids and classes
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
# reminder
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
our first CSS clause 

```
a {
  color: red;
  font-family: times;
}
```
<!-- #endregion -->

<!-- #region cell_style="split" slideshow={"slide_type": ""} -->
will apply both settings  
*on ALL `<a>` elements*

we need **more selective** mechanisms

<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# `id=` : assign a unique identifier

* an element that is unique in your document 
* can be attached a unique identifier
<!-- #endregion -->

```javascript hide_input=true
id_html = `<p id="only-me">This paragraph has an id</p>
<p>this one does not</p>
<p id="another-id">this one has another id</p>
`;
id_css = `/* will apply ONLY to 
 * elements that are tagged <p> 
 * and whose id is 'only-me' 
 */

p#only-me {
    background-color: red;
}`;
tools.html_css(id_html, id_css)
```

<!-- #region slideshow={"slide_type": "slide"} hide_input=true -->
Note that in this case you do not really need to mention the element tag
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": ""}
id2_html = `<p id="me-too">Since it has an id we do not 
really need to specify the html tag</p>`;
id2_css = `/* applies to elements
 * whose id is 'me-too'
 * regardless of the tag */

#me-too {
    background-color: blue;
    color: white;
}`;
tools.html_css(id2_html, id2_css)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# `class=` : styling elements by groups

* it is also possible to create groups of elements
* so that they can be styled together
* this is simply done by setting a `class` attribute 
<!-- #endregion -->

```javascript hide_input=true
class_html = `<p class="yes">yes 1</p>
<p class="no">no 1</p>
<p class="yes">yes 2</p>
<p class="no">no 2</p>
<p class="yes no">yes and no</p>
`;
class_css = `p.yes {
    color: green;
}
p.no {
    background-color: red;
}
`;
tools.html_css(class_html, class_css)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# basic selectors

let's summarize 

| selector | applies to elements |
|----------|------------|
| `p`      |  tagged `<p>` |
| `#someident` | that have `id='someident'` |
| `.someclass` |  that have `someclass` in their `class` attribute |
| `h1.someclass` | tagged `<h1>` **and** of class `someclass` |
| `h1.someclass#someid` | tagged `<h1>` **and** of class `someclass` **and** with `id='someid'` |
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# cascading and inheritance

* cascading : what happens if **several rules** define,  
  say, the 'color' property on one element ?
* inheritance : what happens if **no rule** defines  
  the 'color' property on an element ?
* in a nutshell :
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
##### cascading 
the **most specific** rule wins
<!-- #endregion -->

<!-- #region cell_style="split" -->
##### inheritance 
take the value from  
the **element's parent**
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# cascading  & specificity

in a nushell, the intuition behind the actual rules is that
* if you have maunally defined a property in a `style` attribute, i.e. at the exact same place as the node, it means you want this property to apply
* otherwise if you have specified an `id` this means you expect this setting to be valid on that node
* otherwise if you have specified a `class`, it should apply
* otherwise if the rule is based on the element, it should apply
* otherwise it is a wildcard rule (you can use `*` as the selector) 

<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# specificity

selectors can be more convoluted than what we've seen so far,  
(more on this later on) but the logic to compare
specificity can be reasonably approximated as follows :

* for each property setting, compute a tuple with
  * 1 or 0 whether the property setting is in a `style=` attribute
  * number of applicable `id`s in the rule
  * number of applicable `class`es in the rule
  * number of applicable `element`s in the rule
* compare the tuples - like Python would do
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# specificity example
<!-- #endregion -->

##### (1) embedded `style=` wins

```javascript hide_input=true
spec1_html = `<p class="myclass" id="myid" style="color: yellow">Lorem ipsum dolor sit amet.</p>`;
spec_css = `p {
  color: green;
}

.myclass {
  color: red;
}

#myid {
  color: blue;
}`;
tools.html_css(spec1_html, spec_css)

```

<!-- #region slideshow={"slide_type": "slide"} -->
##### (2) then `id=` wins
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} hide_input=true
spec2_html = `<p class="myclass" id="myid">Lorem ipsum dolor sit amet.</p>`;
tools.html_css(spec2_html, spec_css)

```

<!-- #region slideshow={"slide_type": "slide"} -->
##### (3) then `class=` wins
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} hide_input=false
spec3_html = `<p class="myclass">Lorem ipsum dolor sit amet.</p>`;
tools.html_css(spec3_html, spec_css)

```

<!-- #region slideshow={"slide_type": "slide"} -->
##### (2) then the element's tag wins
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} hide_input=false
spec4_html = `<p>Lorem ipsum dolor sit amet.</p>`;
tools.html_css(spec4_html, spec_css)

```

<!-- #region slideshow={"slide_type": "slide"} -->
# inheritance
<!-- #endregion -->

```javascript cell_style="center" hide_input=false
inherit_html = `<div class="inheritance">
<p> You can use inheritance to avoid setting</p>
<ul>
<li> a lot of different elements</li>
<li> under a common ancestor</li>
</ul>`
inherit_css = `.inheritance {
    color: green;
    font-family: times;
}`;
tools.html_css(inherit_html, inherit_css)
```

<!-- #region slideshow={"slide_type": "slide"} -->
# inheritance (ctd)

the point is that
* we **do not** style the `<p>` and `<li>` elements specifically
* so in this case the properies are fetched 
  * from their parent (the `<div>` element) 
  * that **is targetted** by our CSS rule
* note that not all properties behave that way though
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
# references
<!-- #endregion -->

* list of properties and terms
  * https://www.w3schools.com/cssref/

* reference (hard to read) : detailed description of cascading and inheritance
  * https://www.w3.org/TR/css-cascade-3/


* more readable explanations on specificity :
  * https://pawelgrzybek.com/css-specificity-explained/
