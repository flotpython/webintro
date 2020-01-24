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
  notebookname: JS intro
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
      height: 47.7431px
      left: 91.9861px
      top: 25.9618px
      width: 159.497px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# JavaScript
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## the missing piece
<!-- #endregion -->

JavaScript comes in addition to
* HTML for **content**
* CSS for **style**

JavaScript
* it is a full-fledged **programming language** 
* and provides for **behaviour**

<!-- #region slideshow={"slide_type": "slide"} -->
## JavaScript characteristics
<!-- #endregion -->

* runs **inside the browser**
* has direct **access to the DOM**
* that it can freely manipulate
  * to dynamically change properties 
  * in response to user-triggered events

<!-- #region slideshow={"slide_type": "slide"} -->
## example 1
<!-- #endregion -->

in this example we will :
* create two `<div>` elements
* one acts as a button, that can make  
  the other one visible or not
* for that we create a JavaScript  
  **function** named `toggle()`
* that is bound to the `onclick` event   
  of the button `<div>` element

```javascript hide_input=true slideshow={"slide_type": "slide"}
all3_html = `<!-- binding a JS function 
     to user-triggered event -->
<div id="button"
     onclick="toggle()">
  click to hide or show next item
</div>
<div id="area">
    This area will come and go
    <br/> Check console output 
    in the devel tools area
</div>`;
all3_css = `#button {
  padding: 20px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: #ffb6b9;
}
#area {
  padding: 10px;
  background-color: #f5f0e3;
}`;
all3_js = `function toggle() {
  // locate the element that we want to toggle
  let to_toggle = document.getElementById("area");
  // find its current status
  let current = to_toggle.style.display;
  // apply the opposite status
  if (current == "none") {
    to_toggle.style.display = "block";
  } else {
    to_toggle.style.display = "none";    
  }
  // show a message in the JS console
  console.log(\`display \${current} →\`
              \`\${to_toggle.style.display}\`);
}`;
tools.iframe_html_css_js("foo-all3", all3_html, all3_css, all3_js, true)
```

<!-- #region slideshow={"slide_type": "slide"} hide_input=true -->
## example 2
<!-- #endregion -->
in this further example :
* we create a button, a graphic area (`<svg>`)  
  both inside a container
* the page runs a cyclic task 
* which, when active, adds a random point  
  to the graphic area

```javascript hide_input=true slideshow={"slide_type": "slide"}
turtle_html = `<div class="top">
<span 
  id="button"
  onclick="start_stop()">
Pause / Stop
</span>

<svg width="400" height="100">
</svg>
</div>`;
turtle_css = `.top {
  display: flex;
  align-items: center;
}
#button {
  border: 1px solid blue;
  border-radius: 6px;
  padding: 10px;
}
svg {
  margin-top: 20px;
  border: 5px solid #75b79e;
}
circle {
  stroke: #6e5773; 
  fill: none;
  stroke-width: 2;
}
`;
turtle_js = `svgNS = "http://www.w3.org/2000/svg";

// a JavScript object looks like this
the_turtle = {
  w: 400, h: 100, 
  x: 100, y: 50,
  r: 4,
  angle: 180,
}

// messing with the DOM: adds a circle inside <svg>
function draw(turtle) {
  let canvas = document.querySelector("svg");
  console.log(canvas);
  let circle = document.createElementNS(svgNS, 'circle');
  circle.setAttribute('cx', turtle.x);
  circle.setAttribute('cy', turtle.y);
  circle.setAttribute('r', turtle.r);
  canvas.append(circle);
}

// compute next random position
function move(turtle) {
  let [rx, ry] = [Math.random(), Math.random()];
  turtle.x = rx * turtle.w;
  turtle.y = ry * turtle.h;
}

// start disabled
active = false;

function start_stop() {
  active = ! active;
}

// heartbeat
function run() {
  if (active) {
    draw(the_turtle);
    move(the_turtle);
    console.log(the_turtle);
  }
  // this will cause run() to be called again in 400 ms
  // that's what makes it run forever
  window.setTimeout(run, 400);
}

// calling run once will run it forever
// because run() installs itself through a timeout 
run()

`;
tools.iframe_html_css_js("turtle", turtle_html, turtle_css, turtle_js, true)
```

```javascript

```
