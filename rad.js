function clrChgr() {
    setInterval(function() {
        var r = Math.floor(255 * Math.random());
        var g = Math.floor(255 * Math.random());
        var b = Math.floor(255 * Math.random());
        var r2 = Math.floor(255 * Math.random());
        var g3 = Math.floor(255 * Math.random());
        var b4 = Math.floor(255 * Math.random());
        var colorStr = "rgb(" + r + "," + g + "," + b + ")";
        var colorStr2 = "rgb(" + r2 + "," + g3 + "," + b4 + ")";
        $("#title").css("color", colorStr);
        $("#added").css("color", colorStr2);
    }, 175);
}

function wowie() {
    setInterval(function() {
        var a = ["wow!", "yeehaw!!!!", "(◠‿・)—☆", "(｡•̀ᴗ-)✧", "Watch screen, neglect work", "Binge watching is my coping mechanism", "Pain Arc best Arc", "Cola & Potato Chip kinda day", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "Are ya winning, son?"];
        var r = Math.floor(9 * Math.random());
        $("#added").text(a[r]);
    }, 1200);
}

function bkgrnd() {
    setInterval(function() {
        var b = 1 + Math.floor(8 * Math.random());

        var u = "url('img/b" + b + ".webp')";
        $("#yeehaw").css("background-image", u);
    }, 1570);
}


function calc(){
    var ep = $("#episodes").val();
    var leng = $("#length").val();
    var inout = $("#tros").val();

    console.log("ep " + ep);
    console.log("leng " + leng);
    console.log("inout " + inout);

    var totalLength = (ep * leng) / 60;
    var inoutTotal = ep * inout * 2;
    console.log("inout total time in seconds: " + inoutTotal);
    var ioHours = (inoutTotal / 60) / 60;
    console.log("inout total time in hours: " + ioHours);
    var fourH = totalLength / 4;
    var eightH = totalLength / 8;
    var teenH = totalLength / 16;

    $("#total-time").text(totalLength.toFixed(2));
    $("#four-hour").text(fourH.toFixed(2));
    $("#eight-hour").text(eightH.toFixed(2));
    $("#sixteen-hour").text(teenH.toFixed(2));
    $("#saved-time").text(ioHours.toFixed(2));
}

window.onload = function() {
    bkgrnd();
    clrChgr();
    wowie();
    calc();
}

$("#form-submit-button").click( function() {
    calc();
    $("#get").css("display", "none");
    $("#show").css("display", "inline");
});

$("#form-return-button").click( function() {
    $("#show").css("display", "none");
    $("#get").css("display", "inline");
});