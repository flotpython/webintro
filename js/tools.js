//////////
var show_html = require('./show_html');

exports.one_column = show_html.one_column;
exports.two_columns = show_html.two_columns;
exports.html_css = show_html.html_css;
exports.iframe_html_css = show_html.iframe_html_css;

//////////
var inject_css = require('./inject_css');

//////////
var run_all = require('./run_all');

function init() {
    let css = inject_css.read_style('../css/in-out.css');
    css += inject_css.read_style('../css/show-html.css');
    let button = run_all.run_all_button();
    $$.html(css + button);
}
exports.init = init;