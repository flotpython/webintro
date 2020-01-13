function run_all_button() {
    let html = `<span>Tip&nbsp;:
<button onclick="Jupyter.notebook.execute_all_cells()">Run all cells</button>
before running the slideshow</span>
`;
    $$.html(html);
}

exports.run_all_button = run_all_button;