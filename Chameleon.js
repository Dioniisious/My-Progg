var i = 0;

function changeColors() {
    var colors = ["white", "red", "blue", "green", "yellow", "orange", "purple", "gray", "black"];

    document.getElementsByTagName("body")[0].style.background = colors[i++];

    if (i > colors.length - 1) {
        i = 0;
    }
}