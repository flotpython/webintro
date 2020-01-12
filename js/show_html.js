// css
var css = `
.show-html-top {
    font-size: 0.6em;
    display:grid;
    grid-template-columns: auto auto;
}
div.show-html-cell {
    border-radius: 10px;
    padding: 10px;
}
div.show-html-left {
    border: 1px solid #ddd;
    /*background-color: #ccc;*/
    margin-right: 20px;
}
div.show-html-right {
    border: 1px solid #00f;
    background-color: #dd;
    margin-left: 20px;
}    
`;

function injected_css() {
    return `<style>${css}</style>`;
}

// helper
function escape(string) {
    return string
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
    ;
}

function one_column(fragment) {
    let left = `<pre><code>${escape(fragment)}</code></pre>`;
    return $$.html(left);
}

function two_columns(fragment) {
    let left = `<pre><code class="show-html-cell show-html-left">${escape(fragment)}</code></pre>`;
    let right = fragment;
    let whole = `<div class="show-html-top">
<div class="show-html-left">${left}</div><div class="show-html-cell show-html-right">${right}</div>
</div>`;
    return $$.html(injected_css() + whole);
}

exports.one_column = one_column;
exports.two_columns = two_columns;