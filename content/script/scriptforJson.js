var click = 0;
var startPosition;
var lastPosition;
var deathFigures = [];

$(document).ready(function() {
    $("#next").click(function() {
        startPosition = movesObject.MoveList[click].from;
        lastPosition = movesObject.MoveList[click].to;
        if (document.getElementById(lastPosition).childNodes.length == 0) {
            var figureImg = document.getElementById(startPosition).lastChild;
            document.getElementById(startPosition).firstChild.remove();
            document.getElementById(lastPosition).append(figureImg);
            click++;
        } else if (document.getElementById(lastPosition).childNodes.length != 0) {
            var otherFigureImg = document.getElementById(lastPosition).lastChild;
            var figureImg = document.getElementById(startPosition).lastChild;
            deathFigures.push({
                key: lastPosition,
                value: otherFigureImg.src
            })
            document.getElementById(startPosition).firstChild.remove();
            document.getElementById(lastPosition).firstChild.remove();
            document.getElementById(lastPosition).append(figureImg);
            click++;
        }
    });
});


$(document).ready(function() {
    $("#back").click(function() {
        startPosition = movesObject.MoveList[click - 1].from;
        lastPosition = movesObject.MoveList[click - 1].to;
        var figureImg = document.getElementById(lastPosition).lastChild;
        document.getElementById(lastPosition).firstChild.remove();
        document.getElementById(startPosition).append(figureImg);
        click--;
        for (var index = deathFigures.length - 1; index >= 0; index--) {
            if (deathFigures[index].key == lastPosition) {
                var image = document.createElement("img");
                image.src = deathFigures[index].value;
                document.getElementById(deathFigures[index].key).append(image);
                //document.getElementById(deathFigures[index].key).innerHTML = "<img src=" + deathFigures[index].value + ">";
                deathFigures.splice(index, 1);
                break;
            }
        }
    });
});