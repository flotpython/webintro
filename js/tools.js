//////////
var show_html = require('./show_html');

exports.one_column = show_html.one_column;
exports.two_columns = show_html.two_columns;
exports.html_css = show_html.html_css;

//////////
var inject_css = require('./inject_css');
exports.use_style = inject_css.use_style;

//////////
var run_all = require('./run_all');
exports.run_all_button = run_all.run_all_button;