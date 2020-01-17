traverseRoutine();
addEventHandler();
showDialog();

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

function teachersTemplate(teacher) {
    // TODO check which properties the teacher has and show accordingly.
    let template = $("<div></div>");
    let name = $("<span class=\"teacherName\">" + teacher.name + "</span>");
    template.append(name);
    let initial = $("<span class=\"teacherInitial\"><b>" + teacher.initial + "</b></span>");
    template.append(initial);
    template.append("<br/>");
    // TODO email might not available, FIXIT
    let mail = $("<a href='mailto:"+ teacher.mail_id +"' class=\"teacherInitial\">Send Email</a>");
    template.append(mail);
    return template;
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
            $('#mag-content').html(teachersTemplate(data));
        }
    });
}

function showDialog(teacher){
    let dialog = $("<div class=\"initialDialog\" id='draggable'></div>");
    let dragger = $("<div id='dragzone'>Click here to move</div>");
    let content = $("<div id='mag-content'>The Magicians</div>");
    dialog.append(dragger);
    dialog.append(content);

    $("body").append(dialog);
}