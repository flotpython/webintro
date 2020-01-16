-"use strict";

let fs = require('fs');

// helper
function escape(string) {
    return string
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
    ;
}

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
    return $$.html(whole);
}


function _html_css(html, css, iframe_filename) {
    let top_left = `<span class="lang html">HTML</span><pre><code>${escape(html)}</code></pre>`;
    let bottom_left = `<span class="lang css">CSS</span><pre><code>${escape(css)}</code></pre>`;
    let right = injected_css(css);
    if (! iframe_filename) {
        right += html;
    } else {
        let full_code = `<style>${css}</style>${html}`;
        let iframe = _iframe_for_stored_html(iframe_filename, full_code);
        right += iframe;
    }
    let whole = `<div class="show-html-top">
<div class="show-html-css-left">
<div class="show-html-css-top-left">${top_left}</div>
<div class="show-html-css-bottom-left">${bottom_left}</div>
</div>
<div class="show-html-css-right show-html-cell">${right}</div>
</div>    
`;
    return $$.html(whole);    
}


function _iframe_for_stored_html(filename, html) {
    fs.writeFileSync(filename, html);
    return `<iframe class="show-html" src="${filename}" />`;
}


function html_css(html, css) {
    return _html_css(html, css, false);
}

function iframe_html_css(iframe, html, css) {
    let filename = `./${iframe}.html`;
    return _html_css(html, css, filename);
}

//////////
exports.one_column = one_column;
exports.two_columns = two_columns;
exports.html_css = html_css;
exports.iframe_html_css = iframe_html_css
