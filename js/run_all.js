function run_all_button() {
    let html = `<style>
span.run-all {
    border: 1px solid black;
    background-color: #50d97b;
    padding: 6px 20px;
    border-radius: 8px;
}
</style>
<span>Tip&nbsp;:
<span class="run-all" onclick="Jupyter.notebook.execute_all_cells()">Click this button to run all cells</span>
before running the slideshow</span>
`;
    return html;
}

exports.run_all_button = run_all_button;