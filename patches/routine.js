traverseRoutine();
addEventHandler();

function traverseRoutine(){
    var $routineTable = $(".simple-table-css").children("tbody");
    var rows = $routineTable.children();
    var cursor = rows.first();
    for(let i = 0; i < rows.length; i++){
        var arrayOfDatas = cursor[0].children;
        for(let j = 0; j < arrayOfDatas.length; j++){
            // swap wednesday tuesday
            modifyInitials(arrayOfDatas[j]);
            if(j == 4){
                swap(arrayOfDatas[j-1], arrayOfDatas[j]);
            }
        }
        cursor=cursor.next();
    }

    function swap(obj1, obj2){
        let tmp = obj1.innerHTML;
        obj1.innerHTML = obj2.innerHTML;
        obj2.innerHTML = tmp;
    }
}

function modifyInitials(theColRow){
    let tmp = theColRow.innerHTML;
    let match = matchInitial(tmp);
    if(!match) return;
    let initial = match[1];
    let back = tmp.length - match.index - 5;
    let beforeMatch = tmp.slice(0, match.index);
    let start = " <span class='initial' initial='" + initial + "'> ";

    let end = " </span> ";
    let afterMatch = tmp.slice(-back);

    let compiled = beforeMatch + start + initial + end + afterMatch;
    theColRow.innerHTML=compiled;
}

function matchInitial(text){
    return text.match(/\s(\w{3})\s/i);
}

function addEventHandler(){
    let initials = document.getElementsByClassName("initial");
    for(let initial of initials){
        initial.addEventListener("click", function(){
            let initialText = this.getAttribute("initial");
            getTeachersInfo(initialText);
        });
    }
}

function getTeachersInfo(initial){
    $.ajax({
        url:'https://bracu-bot.appspot.com/teacher/initial',
        type:"POST",
        data: JSON.stringify({initial: initial}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data){
            console.log("Successful " + JSON.stringify(data));
        }
    });
}

function showDialog(teacher){
    console.log($("<div>").load("teachersInfo.html"));
}