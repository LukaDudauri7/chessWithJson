var test;
var activeElement;
var moveDone = false;
$(document).ready(function() {
    $("td").click(function() {
        id = this.id;
        test = this.id;
        if (document.getElementById(id).style.backgroundColor == "rgb(26, 83, 255)") {
            activeElement.offsetParent.innerHTML = "";
            $("#" + test).append(activeElement);
            moveDone = true;
        }

        if (document.getElementById(id).style.backgroundColor == "rgb(255, 0, 0)") {
            document.getElementById(test).firstChild.remove();
            document.getElementById(test).append(activeElement);
            moveDone = true;
        }

        resetColor();

        if (checkPositionFree(id) == 0) {
            return 0;
        }

        var figureName = document.getElementById(id).lastChild.alt;
        var color = figureColor(id);

        if (moveDone != true) {
            switch (figureName) {
                case "queen":
                    checkQueen(id);
                    break;
                case "pawn":
                    checkPawn(id, color);
                    break;
                case "rook":
                    checkRook(id);
                    break;
                case "bishop":
                    checkBishop(id);
                    break;
                case "king":
                    checkKing(id);
                    break;
                case "knight":
                    checkKnight(id);
                    break;
            }
        }
        moveDone = false;
    });
});


var moves = [];

function canMove(id) {
    activeElement = document.getElementById(id).lastChild;
    for (var i = 0; i < 8; i++)
        for (var j = 1; j <= 8; j++) {
            var k = String.fromCharCode(i + 97);
            var cell = k + j;
            var colorChecker = checkBlueColor(cell);
            if (colorChecker) {
                moves.push(cell);
            }
        }
}

function canKill(id) {
    activeElement = document.getElementById(id).lastChild;
    for (var i = 0; i < 8; i++)
        for (var j = 1; j <= 8; j++) {
            var k = String.fromCharCode(i + 97);
            var redCell = k + j;
            var colorChecker = redLight(redCell);
            if (colorChecker) {
                moves.push(redCell);
            }
        }
}

function redLight(id) {
    if (document.getElementById(id).style.backgroundColor == "rgb(255, 0, 0)") {
        return true;
    } else {
        return false;
    }
}

function checkBlueColor(id) {
    if (document.getElementById(id).style.backgroundColor == "rgb(26, 83, 255)") {
        return true;
    } else {
        return false;
    }
}


function figureColor(id) {
    if (document.getElementById(id) == null) {
        return 0;
    }
    var imgtag = document.getElementById(id).lastChild;

    if (imgtag != null)
        return imgtag.className;
}

function resetColor() {
    var chessboard = document.getElementsByClassName("chessboard");
    for (var i = 0; i < chessboard.length; i++) {
        chessboard[i].style.backgroundColor = "#996633";
    }

    var chessboardwhite = document.getElementsByClassName("chessboardwhite");
    for (var i = 0; i < chessboardwhite.length; i++) {
        chessboardwhite[i].style.backgroundColor = "#dfbe9f";
    }
}

function checkPositionFree(id) {
    if (document.getElementById(id) == null || document.getElementById(id).childNodes.length) {
        return 1;
    }
    return 0;
}

function checkboundSize(row, column) {
    if (row >= 1 && row <= 8 && column >= "a" && column <= "h") {
        return true;
    } else {
        return false;
    }
}