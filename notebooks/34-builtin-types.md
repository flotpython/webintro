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
  notebookname: bultin types
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
      height: 247.719px
      left: 1274.52px
      top: 29px
      width: 253.469px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<!-- #region slideshow={"slide_type": "slide"} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# JS builtin types
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## nothing but the usual
<!-- #endregion -->

* set of builtin types similar to Python's offering
* atomic : numbers, strings, booleans
* containers : arrays (lists), maps (dicts) and sets
* objects

<!-- #region slideshow={"slide_type": "slide"} -->
## atomic types
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `number` is the default type for numeric values  
* `string`
* `boolean` may be `true` or `false`
<!-- #endregion -->

```javascript cell_style="split"
// usual operators, here modulo
(100 ** 9) % 11
```

```javascript cell_style="split"
let s1 = "abc" + "def";
let s2 = "ab" + "cdef";
s1 == s2
```

<p class="rise-footnote">
    be aware that <code>number</code> is similar to Python's </code>float</code> -- so with imprecision !  
    <br>
    google for <code>bigint</code> for error-free calculus on integers - like Python's <code>int</code>
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### atomic types (ctd)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `null` is similar to Python's `None`
* `undefined` 
  * as mentioned earlier, JavaScript is very permissive
  * some expressions return `undefined` instead of raising an exception
* `NaN` is "Not a Number"
<!-- #endregion -->

```javascript cell_style="split"
object = { x: 10, y: 20}

// this in Python would 
// trigger an exception
console.log(object.z)
```

```javascript cell_style="split"
// unlike Python
3 * "abc" 
```

<!-- #region slideshow={"slide_type": "slide"} -->
### boolean operators
<!-- #endregion -->

the syntax for boolean operators is here again inherited from C / C++ / Java

```javascript cell_style="split"
if (true && true) {
    console.log(
        "logical and is &&")
}
```

```javascript cell_style="split"
if (true || false) {
    console.log(
        "logical or is ||")
}
```

```javascript
if ( ! false) console.log("not is ! ")
```

<!-- #region slideshow={"slide_type": "slide"} -->
### see also

* [on numbers](https://javascript.info/number)
* [on strings](https://javascript.info/string)
* [operators on booleans](https://javascript.info/logical-operators)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## arrays 
<!-- #endregion -->

* similar to Python's `list`s

```javascript cell_style="split"
let array = ["some", "words"]
let array2 = new Array()

// insert at the end
array2.push("some")
array2.push("words")
console.log(array2)
```

```javascript cell_style="split"
// searching; >=0 means it is found
console.log(array.indexOf("words"))
```

```javascript cell_style="split"
// otherwise -1
console.log(array.indexOf("absent"))
```

<!-- #region slideshow={"slide_type": "slide"} -->
### iterating over a list
<!-- #endregion -->

**common pitfall**
* Python programmers tend to do `for (x in array)`
* that is **not** the way to go
* also notice how to use `let` to define  
  a variable local to the `for` loop
* see also [more on arrays](https://javascript.info/array)

```javascript cell_style="split"
// the equivalent of Python's
// iterating style

for (let x of array) {
    console.log(x);
}
```

```javascript cell_style="split"
// for .. in 
// iterates on the INDEXES

for (let i in array) {
    console.log(i);
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
## hash-based data types
<!-- #endregion -->

* `Map` and `Set` are JavaScript builtin types
  * that match Python's `dict` and `set` respectively
* they exhibit the same constant-time lookup nice property
* [read the full story](https://javascript.info/map-set)

```javascript cell_style="split"
let map = new Map();

map.set('key1', 'value1');
map.set(1000, 'value1000');

map.get(1000)

```

```javascript cell_style="split"
// iterating over map

for (let k of map.keys()) {
    console.log(`key=${k}, value=${map.get(k)}`)
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
## objects
<!-- #endregion -->

* as the name suggests, objects are the building block for inheritance
* they are similar to Python's class instances
  * in that they can hold attributes (Python vocabulary)
  * that in JavaScript are called key-value pairs

```javascript cell_style="split"
let bond = {
    first_name: "James",
    last_name: "Bond"
}

console.log(`my name is ${bond.last_name}`);
```

```javascript cell_style="split"
// check for a key
'first_name' in bond
```

<!-- #region trusted=true -->
<p class="rise-footnote"> 
    the syntax for JavaScript objects, as well as the <i>key/value</i> vocabulary <br>
    make them **look like** Python dictionaries
    **do not get confused though**, JavaScript objects are much more like Python class instances.
</p>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### iterating over an object's keys
<!-- #endregion -->

* one can access an object's key/attribute with 2 syntaxes
  * `object.first_name` takes the key name litterally
  * `object[var]` **evaluates** `var`, that should give a key name

```javascript
// so we can use this to iterate over an object's contents
for (key in bond) {
    console.log(key, ':', bond[key])
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
## class instances are objects
<!-- #endregion -->

```javascript
class Person {
    constructor(first, last) {
        this.first_name = first;
        this.last_name = last;
    }
}

let person = new Person("John", "Doe")

typeof(person)
```
