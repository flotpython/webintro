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
    let left = `<pre><code>${escape(fragment)}</code></pre>`;
    let right = fragment;
    let whole = `<div style="display:grid; grid-template-columns: auto auto;"><div>${left}</div><div>${right}</div></div>`;
    return $$.html(whole);
}

exports.one_column = one_column;
exports.two_columns = two_columns;