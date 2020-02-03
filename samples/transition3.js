WIDTH = 100;
STEP = 10;
direction = 1;

function grow() {
    let growing = document.getElementById("growing");
    growing.style.width = `${WIDTH}px`;
    WIDTH += STEP;
}

function grow_forever() {
    grow();
    setTimeout(grow_forever, 2500);
}
