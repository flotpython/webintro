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
<div class="show-html-right show-html-no-iframe">${right}</div>
</div>`;
    return $$.html(whole);
}


function _html_css(html, css, iframe_filename, external) {
    let top_left = `<span class="lang html">HTML</span><pre><code>${escape(html)}</code></pre>`;
    let bottom_left = `<span class="lang css">CSS</span><pre><code>${escape(css)}</code></pre>`;
    let full_code = `<style>${css}</style>
${html}`;
    let right = _iframe_for_stored_html(iframe_filename, full_code);
    let external_button = ``;
    let external_class = ``;
    if (external) {
        external_class = `external`;
        external_button = `<a class="external"
onclick="window.open('${iframe_filename}', '${iframe_filename}', 'width=500,height=250'); return false;"
>
<div style="display: flex; flex-direction: column; align-items: center;">
<span>open in a separate window</span>
<span>(beware of ad blockers)</span>
</div></a>`;
    }
    let whole = `<div class="show-html-top">
<div class="show-html-css-left">
<div class="show-html-css-top-left">${top_left}</div>
<div class="show-html-css-bottom-left">${bottom_left}</div>
</div>
<div class="show-html-css-right ${external_class}">${right}${external_button}</div>
</div>    
`;
    return $$.html(whole);    
}


function _iframe_for_stored_html(filename, html) {
    fs.writeFileSync(filename, html);
    return `<iframe class="show-html" src="${filename}" />`;
}


function iframe_html_css(iframe, html, css, external) {
    let filename = `./${iframe}.html`;
    return _html_css(html, css, filename, external);
}

//////////
exports.one_column = one_column;
exports.two_columns = two_columns;
exports.iframe_html_css = iframe_html_css
