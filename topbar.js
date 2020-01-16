topbar();

function topbar() {
    var head = document.getElementsByTagName("head");
    var fontAwScript = document.createElement("script");
    var src = document.createAttribute("src");
    src.value = "https://kit.fontawesome.com/a076d05399.js";
    fontAwScript.setAttributeNode(src);
    head[0].appendChild(fontAwScript);


    var images = document.getElementsByTagName("img");
    images[0].setAttribute("src", "/academia/images/layout/Logo.bmp");
    var logo = document.getElementsByClassName("top-left-logo");
    logo[0].style.width = "40px";
    images[6].style.display = "none";

    var leftElements = document.querySelectorAll('[style="float:left; "]');

    var mainTitle = document.createElement("h1");
    mainTitle.innerText = "USIS - BRAC UNIVERSITY";
    mainTitle.style.padding = "10px";
    mainTitle.style.fontWeight = "bold";
    var titleDiv = document.createElement("div");
    titleDiv.style.float = "left";
    titleDiv.appendChild(mainTitle);
    leftElements[0].appendChild(titleDiv);

    var notificationIcon = document.getElementById("btn_login_new_message");
    notificationIcon.style.display = "none";

    document.getElementsByClassName("text")[1].style.display = "none";

    var buttonUL = document.getElementsByTagName("ul")[0];
    $(buttonUL).empty();

    var homeButton = makeButtonWithList("/academia/dashBoard/show", "btn btn-success", "Home", "fa fa-home");
    buttonUL.appendChild(homeButton);
    var changePasswordButton = makeButtonWithList("http://usis.bracu.ac.bd/academia/dashBoard/show#/academia/systemUser/changePassword", "btn btn-warning", "Change Password", "fa fa-key");
    changePasswordButton.style.width = "126px";
    buttonUL.appendChild(changePasswordButton);
    var logoutButton = makeButtonWithList("/academia/logout/index", "btn btn-danger", "Logout", "fas fa-door-open");
    buttonUL.appendChild(logoutButton);

}

function makeButtonWithList(href, className, title, iconClass) {
    var button = document.createElement("a");
    button.setAttribute('href', href);
    button.setAttribute('class', className);
    var titleSpan = document.createElement("span");
    titleSpan.innerText = title;

    var icon = document.createElement("i");
    icon.setAttribute("class", iconClass);
    icon.style.color = "white";
    icon.style.paddingRight = "3px";
    button.appendChild(icon);
    button.appendChild(titleSpan);

    var list = document.createElement("li");
    list.style.width = "67px";
    list.appendChild(button);
    return list;
}