-"use strict";

let fs = require('fs');

// helper
function _escape(string) {
    return string
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
    ;
}

function _verbatim(html) {
    return `<pre><code>${_escape(html)}</code></pre>`;
}

function _injected_css(css) {
    return `<style>
${css}
</style>`;
}
function _injected_js(css) {
    return `<script>
${css}
</script>`;
}

function _label(cls) {
    return `<span class="lang ${cls}"></span>`;
}


function _iframe_for_stored_html(filename, html) {
    fs.writeFileSync(filename, html);
    return `<iframe class="show-html" src="${filename}" />`;
}


function _external_iframe_button(filename) {
    return `<a class="external"
    onclick="window.open('${filename}', '${filename}', 'width=500,height=250'); return false;"
    >
    <div style="display: flex; flex-direction: column; align-items: center;">
    <span>open in a separate window</span>
    <span>(beware of ad blockers)</span>
    </div></a>`
}


function one_column(html) {
    return $$.html(_verbatim(html));
}

function two_columns(html) {
    let left = _verbatim(html);
    let right = html;
    let whole = `<div class="show-html-2columns">
<div class="show-html-left">${left}</div>
<div class="show-html-right show-html-no-iframe">${right}</div>
</div>`;
    return $$.html(whole);
}


function iframe_html_css(iframe, html, css, external) {
    let filename = `./${iframe}.html`;
    let top_left = _verbatim(html);
    let bottom_left = _verbatim(css);
    let full_code = `${_injected_css(css)}
${html}`;
    let right = _iframe_for_stored_html(filename, full_code);
    let external_button = ``;
    let external_class = ``;
    if (external) {
        external_class = `external`;
        external_button = _external_iframe_button(filename);
    }
    let whole = `<div class="show-html-2columns">
<div class="show-html-css-left">
  <div class="show-html-css-top-left">${_label("html")}${top_left}</div>
  <div class="show-html-css-bottom-left">${_label("css")}${bottom_left}</div>
</div>
  <div class="show-html-css-right ${external_class}">${right}${external_button}</div>
</div>    
`;
    return $$.html(whole);    
}

function iframe_html_css_js(iframe, html, css, js, external) {
    let filename = `./${iframe}.html`;
    let full_code = `${html}
${_injected_css(css)}
${_injected_js(js)}
`;
    /* produce html file */
    let html_area = _verbatim(html);
    let css_area = _verbatim(css);
    let js_area = _verbatim(js);
    let iframe_area = _iframe_for_stored_html(filename, full_code);
    let [external_class, external_button] = ['', ''];
    if (external) {
        external_class = 'external';
        external_button = _external_iframe_button(filename);
    }
    let result_area = `<div class="${external_class}">
${iframe_area}${external_button}
</div>`;
    let whole = `<div class="show-html-2columns">
    <div class="show-html-left">
      <div class="show-html-css-js-html">${_label("html")}${html_area}</div>
      <div class="show-html-css-js-css">${_label("css")}${css_area}</div>
    </div>
    <div class="show-html-right">
      <div class="show-html-css-js-js">${_label("js")}${js_area}</div>
      <div class="show-html-css-js-result">${result_area}</div>
    </div>
</div>
    `;
    return $$.html(whole);
}

//////////
exports.one_column = one_column;
exports.two_columns = two_columns;
exports.iframe_html_css = iframe_html_css;
exports.iframe_html_css_js = iframe_html_css_js;
