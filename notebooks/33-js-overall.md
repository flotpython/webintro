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
      height: 247.719px
      left: 1483.53px
      top: 169px
      width: 354.469px
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
# 30,000 ft overview
<!-- #endregion -->

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
## syntax
<!-- #endregion -->

* looks a lot like Java (hence the name), and C/C++
* like Java and C++, and unlike Python, indentation does not matter
* comments :

```javascript tags=["raises-exception"]
// this is a comment, no need to close
// but must be repeated on each line

a = 10;

/* this is another one
   everything including newlines 
   is ignored until matching */
```

<span class="footnote"> **NOTE** as we will see below, real code should **always** declare variables, so this would read `let a = 10;` instead, but let us keep it simple for now </span>

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
## declaring variables with `let`
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
## basic types
<!-- #endregion -->

* `number` is the default type for all numeric values  
  similar to Python's `float` -- with imprecision !
* `bigint` can be used explicitly  
  for **exact** integer calculus - no precision limit
