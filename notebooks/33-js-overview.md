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
  notebookname: 30,000 ft overview
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
      height: 453.719px
      left: 1059px
      top: 110px
      width: 343.469px
    toc_section_display: true
    toc_window_display: false
  version: '1.0'
---

<!-- #region slideshow={"slide_type": "slide"} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# 30,000 ft overview
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## preamble
<!-- #endregion -->

* from now on, we will very briefly cover  
  **some** features of the language
* for a more thorough study,  
  refer to [this excellent tutorial on javascript.info](https://javascript.info/)
* we will point at a selection of fragments as we go
* students interested should probably read it through

<!-- #region slideshow={"slide_type": "slide"} -->
## various runtimes
<!-- #endregion -->

<!-- #region -->
* FYI, JavaScript is not restricted to being used in a browser
* among others, the [`node.js` runtime](https://nodejs.org/en/about/)
  * e.g. to power a backend web server
  * or simply from a regular terminal


```bash
$ node
Welcome to Node.js v12.5.0.
Type ".help" for more information.
> console.log("hello world")
hello world
> process.exit()
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## syntax
<!-- #endregion -->

* looks a lot like Java (hence the name), and C/C++
* like Java and C++, and unlike Python, indentation does not matter
* a `;` is expected at the end of each statement
* 2 styles of comments

```javascript tags=["raises-exception"]
// this is a comment, no need to close
// but must be repeated on each line

// you should end all statements with a ;
a = 10;

/* this is another one
   everything including newlines 
   is ignored until matching */
```

<span class="footnote"> **NOTE** as we will see below, real code should **always** declare variables, so this would read `let a = 10;` instead, but let us keep it simple for now </span>

<!-- #region slideshow={"slide_type": "slide"} -->
### tests and loops
<!-- #endregion -->

* `if` and `while` statements are straightforward
* `for` are a little more awkward - more on iterations as we go

```javascript cell_style="split"
// conditional if 
if (a == 10) {
    console.log("YES");
}
```

```javascript cell_style="split"
while (a >= 5) {
    console.log(a);
    a -= 3;
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
## variables ([link in tuto](https://javascript.info/variables))
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* as usual, variables are **names** that refer to **data in memory**
* like in Python, any such data is **typed**
* core language has some **basic types**
<!-- #endregion -->

```javascript cell_style="split"
n = 10;
typeof(n)
```

```javascript cell_style="split"
s = "hello world";
typeof(s)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## variable scope 
<!-- #endregion -->

* like in all other languages
  * need to limit the scope of a variable
  * so that variable `x` in 2 distinct functions do not clash
* use **lexical nested scope**
  * a variable is visible only within its code block
* a very common strategy, like in Python, C++, Java, …

<!-- #region slideshow={"slide_type": "slide"} -->
### scope illustrated
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} tags=["raises-exception"]
// this is a global variable
a = "global";

function foo() {
    // this local declaration 
    // hides the global variable
    let a = "local";
    console.log("in foo():", a);
}

console.log("in global context:", a);
foo()
```

<!-- #region slideshow={"slide_type": "slide"} -->
### declaring variables with `let`
<!-- #endregion -->

* you should **always** declare your variables with **`let`** 
  * even though (a lot of) legacy code does not
  * also note that older-school code may use `var` instead

* for new code, just **always** use `let`


<p class="footnote"> 
    when declaring a variable with <code>let</code>,
    it cannot be declared a second time within the same block; 
<br>
    in the context of notebooks, a drawback of this is
    that you cannot run a cell twice if 
    it uses a toplevel <code>let</code>
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### blocks are delimited by `{}`
<!-- #endregion -->

* the elementary unit for scope is the **block**
* which is materialized by `{}`

```javascript tags=["raises-exception"]
let y = "outermost";
{ 
    let y = "intermediate";
    { 
        let y = "innermost";
        console.log("level 2", y);
    }
    console.log("level 1", y);
}
console.log("level 0", y);
```

<!-- #region slideshow={"slide_type": "slide"} -->
## globals
<!-- #endregion -->

* context (browser components mostly) is exposed to programer
* through a set of **global variables**, e.g.
  * `document` to access the DOM
  * `window`, remember `window.setTimeout()`
  * `console` like in `console.log()`
  * `this` - a tricky one
* may depend on the runtime  


<p class="footnote"> surprising as it may be, the notebook's JavaScript engine is an instance of <code>node</code>, and so is <b>not browser-related</b> <br> so we could not inspect the <code>document</code> or <code>window</code> variables in this context; of course you can do so from the browser's console though</p>

<!-- #region slideshow={"slide_type": "slide"} -->
## functions
<!-- #endregion -->

* like in other languages
* we have seen examples already

```javascript
function foo(x, y) {
    console.log(x, '+', y, '=', x+y);
}

foo(10, 20)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### duck typing
<!-- #endregion -->

* like in Python, 
* **objects** are typed
* but **variables** are not typed 

```javascript
function foo(x, y) {
    console.log('x is a ', typeof(x));
    console.log(x, '+', y, '=', x+y);
}

// like in Python, function arguments
// are not statically typed
foo('abc', 'def')
```

<!-- #region slideshow={"slide_type": "slide"} -->
### loose binding
<!-- #endregion -->

* JavaScript is **very permissive**
* for example, number of args is not checked

```javascript
function fuzzy(x, y, z) {
    console.log("x = ", x, " y = ", y, " z = ", z);
}
fuzzy(10)
fuzzy(10, 20)
fuzzy("abc", "def", "ghi")
```

<!-- #region slideshow={"slide_type": "slide"} -->
### `this`
<!-- #endregion -->

* a very specific feature of JavaScript
* is that the implicit variable `this` is always defined
* useful and relevant **only** for
  * methods (more on this later)
  * some callbacks

```javascript
function show_this() {
    console.log(typeof(this));
}

show_this()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## classes
<!-- #endregion -->

as of ES6, the language has a proper `class` statement

```javascript
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    display() {
        console.log(`[Vector x=${this.x} y=${this.y}]`)
    }
}

let v = new Vector(10, 20)
v.display()
```

<p class="footnote"> here again, running this cell twice will cause an error; this is because, like with <code>let</code>, 
    <br>
    the language won't let you define the same <code>Vector</code> variable 
    twice in the same scope</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### notes on classes
<!-- #endregion -->

**NOTICE** the following from that first class example :

* `constructor` is very much alike `__init__` in Python
* the implicit `this` variable refers to the current object 
* it is very much alike the traditional `self` argument in Python
* except that it is **not mentioned** as a method parameter
* objects get created with `new Vector()` - Java and C++ style
  * not just plain Python-style `Vector()` 


<p class="footnote"> 
    also notice the string-formatting syntax 
    <code>`text ${variable}`</code>
    similar to Python's f-strings,
    <br>
    except that an expression is inserted with  <code>${expr}</code> rather than simply <code>{expr}</code> in f-strings
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### old-school classes
<!-- #endregion -->

* ES6 is relatively recent
* you may come across older-school code that uses other techniques
* typically involving a `prototype` thingy
* here again for new code you should stick to the new idiom
* except in case of constraints, like support for older browsers

<!-- #region slideshow={"slide_type": "slide"} -->
## exceptions
<!-- #endregion -->

* JavaScript supports exceptions, just like Python
* same bubbling mechanism
  * that scans the call stack 
  * until a catch statement is found

```javascript
try {
    // referring to an unknown variable
    unknown;
} catch (err) {
    console.log(`OOPS name=${err.name}, message=${err.message}`);
}
```