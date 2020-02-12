topbar();

function fixImage() {
    let images = document.getElementsByTagName("img");
    images[0].setAttribute("src", "https://www.bracu.ac.bd//sites/all/themes/sloth/logo_white.svg");
    let logo = document.getElementsByClassName("top-left-logo");
    logo[0].style.width = "40px";
    images[6].style.display = "none";
}

function topbar() {
    let head = document.getElementsByTagName("head");
    let fontAwScript = document.createElement("script");
    let src = document.createAttribute("src");
    src.value = "https://kit.fontawesome.com/a076d05399.js";
    fontAwScript.setAttributeNode(src);
    head[0].appendChild(fontAwScript);

    //ui fix
    let top = document.getElementsByClassName("ui-layout-north")[0];
    top.style.backgroundColor = "#113f67";
    top.getElementsByTagName("span")[0].style.color = "#e1f2fb";
    top.getElementsByTagName("span")[0].style.paddingTop = "2px";
    let widgets = document.getElementsByClassName("widget");
    let bgColor = "#34699a";
    widgets[1] && (widgets[1].style.backgroundColor = bgColor);
    widgets[3] && (widgets[3].style.backgroundColor = bgColor);
    widgets[4] && (widgets[4].style.backgroundColor = bgColor);
    let socialIcons = document.getElementsByClassName("content-right");
    socialIcons[1].style.display = "none";
    let resizer = document.getElementsByClassName("ui-layout-resizer");
    resizer[0].style.background = "#b9cced";
    resizer[1].style.background = "#b9cced";
    let toggler = document.getElementsByClassName("ui-layout-toggler");
    toggler[0].style.background = "#6a8caf";
    toggler[1].style.background = "#6a8caf";
    let sideBarBackground = document.getElementsByClassName("left-panel-content");
    sideBarBackground[0].style.backgroundColor = "#e1f2fb";
    let fieldSet = document.getElementsByTagName("fieldset");
    fieldSet[0].style.backgroundColor = "#e1f2fb";
    fieldSet[0].style.margin= "0px";
    document.getElementsByClassName("ui-layout-content")[0].style.padding = "0px";


    //image fix
    fixImage();


    let leftElements = document.querySelectorAll('[style="float:left; "]');

    let mainTitle = document.createElement("h1");
    mainTitle.innerText = "USIS - BRAC UNIVERSITY";
    mainTitle.style.padding = "10px";
    mainTitle.style.fontWeight = "bold";
    mainTitle.style.color = "#e1f2fb";
    let titleDiv = document.createElement("div");
    titleDiv.style.float = "left";
    titleDiv.appendChild(mainTitle);
    leftElements[0].appendChild(titleDiv);

    let notificationIcon = document.getElementById("btn_login_new_message");
    notificationIcon.style.display = "none";

    document.getElementsByClassName("text")[1].style.display = "none";

    let buttonUL = document.getElementsByTagName("ul")[0];
    $(buttonUL).empty();

    let homeButton = makeButtonWithList("/academia/dashBoard/show", "topButton", "Home", "fa fa-home");
    buttonUL.appendChild(homeButton);
    let changePasswordButton = makeButtonWithList("http://usis.bracu.ac.bd/academia/dashBoard/show#/academia/systemUser/changePassword", "topButton", "Change Password", "fa fa-key");
    changePasswordButton.style.width = "124px";
    buttonUL.appendChild(changePasswordButton);
    let logoutButton = makeButtonWithList("/academia/logout/index", "topButton", "Logout", "fas fa-door-open");
    logoutButton.style.width = "67px";
    buttonUL.appendChild(logoutButton);
}

function makeButtonWithList(href, className, title, iconClass) {
    let button = document.createElement("a");
    button.setAttribute('href', href);
    button.setAttribute('class', className);
    let titleSpan = document.createElement("span");
    titleSpan.innerText = title;

    let icon = document.createElement("i");
    icon.setAttribute("class", iconClass);
    icon.style.color = "black";
    icon.style.paddingRight = "3px";
    button.appendChild(icon);
    button.appendChild(titleSpan);

    let list = document.createElement("li");
    list.style.width = "60px";
    list.appendChild(button);
    return list;
}