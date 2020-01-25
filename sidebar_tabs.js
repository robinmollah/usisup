/*
SideBar Fix
Author: Rafi Uddin Sadik
*/

//Including Font Awesome 5

init();

function init(){
    //Including Font Awesome 5
    var head = document.getElementsByTagName("head");
    var fontAwScript = document.createElement("script");
    var src = document.createAttribute("src");
    src.value = "https://kit.fontawesome.com/a076d05399.js";
    fontAwScript.setAttributeNode(src);
    head[0].appendChild(fontAwScript);


    var sideBarComponents = document.querySelectorAll('[onclick="highlight(this)"]');
    var mainDiv = document.getElementById("accordion1");

    //hiding all components of old side-menu
    $("#accordion1").children().hide();

    var visible = [
        "My Profile",
        "Registration Form",
        "Student Grade Sheet",
        "Show Class Schedule",
        "Advising Panel",
        "Seat Status",
        "Class Schedule",
        "Advised Course(s)",
        "Bank Payment Slip",
    ];

    var icons = [
        "fas fa-user",
        "far fa-file-alt",
        "far fa-file-archive",
        "far fa-clock",
        "fas fa-chalkboard-teacher",
        "fas fa-users",
        "fas fa-user-clock",
        "fas fa-book-reader",
        "fas fa-money-bill-alt",
    ];

    for(var i = 0; i < visible.length; i++){
        var newMenuBar = getMenuBlock();
        var icon = getIcon(icons[i]);
        newMenuBar.appendChild(icon);
        newMenuBar.appendChild(getTargetSideBar(visible[i], sideBarComponents));
        mainDiv.appendChild(newMenuBar);
    }

    $('.sidebarTabs').hover(function(){
        $(this).css("background-color", "#408ab4");
        $(this).css("cursor", "pointer");
        $(this).css("transform", "scale(0.95)");
    }, function(){
        $(this).css("background-color", "#34699a");
        $(this).css("transform", "scale(1.0)");
    });
}

function getMenuBlock(){
    var menuBlock = document.createElement("div");
    menuBlock.setAttribute("class", "sidebarTabs")
    menuBlock.style.backgroundColor = "#34699a";
    menuBlock.style.padding = "7px";
    menuBlock.style.border = "3px solid #113f67";
    menuBlock.style.margin = "3px";
    menuBlock.style.borderRadius = "5   px";
    return menuBlock;
}

function getIcon(className){
    var icon = document.createElement("i");
    var cls = document.createAttribute("class");
    cls.value = className;
    icon.setAttributeNode(cls);
    icon.style.color = "white";
    return icon;
}

function getTargetSideBar(name, sideBarComponents){
    for(var j = 0; j < sideBarComponents.length; j++){
        if(sideBarComponents[j].innerHTML === name){
            sideBarComponents[j].style.color = "White";
            sideBarComponents[j].style.paddingLeft = "15px";
            return sideBarComponents[j];
        }
    }
}