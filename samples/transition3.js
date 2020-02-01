// window.onload = run;
WIDTH = 100;
STEP = 100;
direction = 1;

function grow() {
    let growing = document.getElementById("growing");
    growing.style.width = `${WIDTH}px`;
    WIDTH += STEP;
}

function grow_forever() {
    console.log("PING");
    grow();
    window.setTimeout(grow_forever, 2500);
}
