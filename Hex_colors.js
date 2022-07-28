function newColor() {
    var hex_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hexcode = "";

    for (var i = 0; i < 6; i++) {
        var random_ind = Math.floor(Math.random() * hex_nums.length);

        hexcode += hex_nums[random_ind];
    }

    document.getElementById("hex_code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}