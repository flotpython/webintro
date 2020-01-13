"use strict";

// helper
function escape(string) {
    return string
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
    ;
}

// css
let show_html_css = `
div.show-html-top {
    font-size: 0.8em;
    display: grid;
    grid-template-columns: auto auto;
}
div.show-html-css-left {
    display: grid:
    grid-template-rows: auto auto;
}
div.show-html-css-top-left, 
div.show-html-css-bottom-left {
    display: grid;
}
div.show-html-cell {
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #00f;
    background-color: #fafafa;
}
div.show-html-left {
    margin-right: 25px;
}
div.show-html-right, div.show-html-css-right {
    margin-left: 25px;
}
span.lang {
    margin-top: 10px;
    padding: 5px;
    border-radius: 5px;
    font-size: larger;
}
span.lang.html {
    background-color: #dcb313;
}
span.lang.css {
    background-color: #0cba27;
}
div.show-html-top pre {
    padding: 8px;
    border-width: 1px dashed red;
    border-radius: 10px;
    border-style: dashed;
    border-color: #ccf;
}
`;

function injected_css(css) {
    return `<style>${css}</style>`;
}


function one_column(html) {
    let left = `<pre><code>${escape(html)}</code></pre>`;
    return $$.html(left);
}


function two_columns(html) {
    let left = `<pre><code>${escape(html)}</code></pre>`;
    let right = html;
    let whole = `<div class="show-html-top">
<div class="show-html-left">${left}</div>
<div class="show-html-right show-html-cell">${right}</div>
</div>`;
    return $$.html(injected_css(show_html_css) + whole);
}


function html_css(html, css) {
    let top_left = `<span class="lang html">HTML</span><pre><code>${escape(html)}</code></pre>`;
    let bottom_left = `<span class="lang css">CSS</span><pre><code>${escape(css)}</code></pre>`;
    let right = injected_css(css) + html;
    let whole = `<div class="show-html-top">
<div class="show-html-css-left">
<div class="show-html-css-top-left">${top_left}</div>
<div class="show-html-css-bottom-left">${bottom_left}</div>
</div>
<div class="show-html-css-right show-html-cell">${right}</div>
</div>    
`;
    return $$.html(injected_css(show_html_css) + whole);    
}


//////////
exports.one_column = one_column;
exports.two_columns = two_columns;
exports.html_css = html_css;