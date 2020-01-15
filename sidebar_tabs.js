/*
SideBar Fix
Author: Rafi Uddin Sadik
*/

//Including Font Awesome 5

function jadu(){
    var head = document.getElementsByTagName("head");
    var fontAwScript = document.createElement("script");
    var src = document.createAttribute("src");
    src.value = "https://kit.fontawesome.com/a076d05399.js";
    fontAwScript.setAttributeNode(src);
    head[0].appendChild(fontAwScript);


    var sideBarComponents = document.getElementsByClassName("autoload");
    var mainDiv = document.getElementById("accordion1");

//hiding all components of old side-menu
    $("#accordion1").children().hide();

//For SideBar Header
//var sidebarHeader = document.createElement("h1");
//sidebarHeader.innerText = "Menu Bar";
//sidebarHeader.style.color = "Navy";
//sidebarHeader.style.paddingLeft = "65px";
//mainDiv.appendChild(sidebarHeader);


//setting styles for all anchor tags
    for(var i = 3; i < sideBarComponents.length; i++){
        sideBarComponents[i].style.color = "White";
        sideBarComponents[i].style.paddingLeft = "15px";
    }

    var newMenuBar = getMenuBlock();
    var icon = getIcon("fas fa-user");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[3]);
    mainDiv.appendChild(newMenuBar);

//MyProfile
    newMenuBar = getMenuBlock();
    icon = getIcon("fas fa-user");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[3]);
    mainDiv.appendChild(newMenuBar);

//Registration Form
    newMenuBar = getMenuBlock();
    icon = getIcon("far fa-file-alt");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[3]);
    mainDiv.appendChild(newMenuBar);

//Grade Sheet
    newMenuBar = getMenuBlock();
    icon = getIcon("far fa-file-archive");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[4]);
    mainDiv.appendChild(newMenuBar);

//Show Class Schedule
    newMenuBar = getMenuBlock();
    icon = getIcon("far fa-clock");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[4]);
    mainDiv.appendChild(newMenuBar);

//Advising Panel
    newMenuBar = getMenuBlock();
    icon = getIcon("fas fa-chalkboard-teacher");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[8]);
    mainDiv.appendChild(newMenuBar);

//Seat status
    newMenuBar = getMenuBlock();
    icon = getIcon("fas fa-users");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[8]);
    mainDiv.appendChild(newMenuBar);

//Class Schedule
    newMenuBar = getMenuBlock();
    icon = getIcon("fas fa-user-clock");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[8]);
    mainDiv.appendChild(newMenuBar);

//Advised Courses
    newMenuBar = getMenuBlock();
    icon = getIcon("fas fa-book-reader");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[8]);
    mainDiv.appendChild(newMenuBar);

//Bank Payment
    newMenuBar = getMenuBlock();
    icon = getIcon("fas fa-money-bill-alt");
    newMenuBar.appendChild(icon);
    newMenuBar.appendChild(sideBarComponents[10]);
    mainDiv.appendChild(newMenuBar);


    function getMenuBlock(){
        var menuBlock = document.createElement("div");
        menuBlock.style.backgroundColor = "#496bd3";
        menuBlock.style.padding = "7px";
        menuBlock.style.border = "3px solid #3a3ac7";
        return menuBlock;
    }

    function getIcon(className){
        var icon = document.createElement("i");
        var cls = document.createAttribute("class");
        cls.value = className;
        icon.setAttributeNode(cls);
        icon.style.color = "white";
        return icon;




    }}