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
    if(teacher.status === "failed"){
        let mail = $("<span style='color: red; padding: 6px'><b>No Information Found<b></span>");
        template.append(mail);
        return template;
    }
    let name = $("<span class=\"teacherName\">" + teacher.name + "</span><br>");
    template.append(name);
    let initial = $("<span class=\"teacherInitial\"><b>" + teacher.initial + "</b></span><br>");
    template.append(initial);
    if(teacher.room_number){
        let mail = $("<span>Room: UB"+teacher.room_number+"</span><br>");
        template.append(mail);
    }
    if(teacher.mail_id){
        let mail = $("<span>Email: "+teacher.mail_id+"</span><br><a href='mailto:"+ teacher.mail_id +"' class=\"teacherInitial\" target=\"_blank\">Send Email</a>");
        template.append(mail);
    }else{
        let errorMail = $("<small style='color:grey;'>Mail ID Unavailable<small>");
        template.append(errorMail);
    }
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
    let dragger = $("<div id='dragzone'>Magician's Portal<br><small>Click here to move</small></div>");
    let content = $("<div id='mag-content' style='padding: 10px'>Click Initials For Details</div>");
    dialog.append(dragger);
    dialog.append(content);
    $('.ui-layout-center').prepend(dialog);
    makeDraggable(document.getElementById("draggable"));

}

function makeDraggable(elm) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elm.id + "dragzone")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elm.id + "dragzone").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elm.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elm.style.top = (elm.offsetTop - pos2) + "px";
        elm.style.left = (elm.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}