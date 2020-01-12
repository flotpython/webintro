var fs = require('fs');

function use_style(path) {
    let css = fs.readFileSync(path, "utf-8");
    let style = `<style>${css}</style>`;
    $$.html(style);
}

exports.use_style = use_style;
