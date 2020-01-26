init();

function init(){
    //UI Fix
    document.getElementsByTagName("legend")[0].style.background = "rgb(52, 105, 154)";
    document.getElementsByTagName("legend")[0].style.border = "2px solid rgb(17, 63, 103)";
    var tHeads = document.getElementsByTagName("tr")[0].getElementsByTagName("td");
    for(let i = 0; i < tHeads.length; i++){
        tHeads[i].style.backgroundColor = "rgb(64, 138, 180)";
        tHeads[i].style.color = "rgb(225, 242, 251)";
    }

    var tds = document.getElementsByTagName("td");
    for (var i = 7; i < tds.length; i++) {
        if(i%7 === 0){
            modifyInitials(tds[i+3]);
        }
    }
    addEventHandler();
}

function modifyInitials(ini){
    let initial = ini.innerHTML;
    let start = " <span class='initial' initial='" + initial + "'> ";
    let end = " </span> ";
    let compiled = start + initial + end;
    ini.innerHTML = compiled;
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
            $('#mag-content').html(teachersTemplate(data));
        }
    });
}