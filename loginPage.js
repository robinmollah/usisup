bracuLogin();

function bracuLogin() {

    //modifying "BRAC University"
    var bracuColor = document.getElementById("portalWelcome");
    bracuColor.style.color = 'white';
    bracuColor.style.fontSize = "35px";
    bracuColor.style.marginTop = "20px";
    //changing header background color
    var hdCollection = document.getElementsByClassName("hd-bkg");
    for (var i = 0; i < hdCollection.length; i++) {
        hdCollection[i].style.backgroundColor = "#113f67";
    }
    //fixing the placement of the logo
    var header = document.getElementById("at-header");
    header.style.padding = "0px 0px 0px 99px";
    //changing body background color
    var bdCollection = document.getElementsByClassName("bd-bkg");
    for (var j = 0; j < bdCollection.length; j++) {
        bdCollection[j].style.backgroundColor = "#113f67";
    }
    //changing body color
    document.getElementById("bd").style.backgroundColor = "white";

    //modifying the login form
    var username = document.getElementById("lbl_username");
    username.style.display = "none";
    var pass = document.getElementById("lbl_password");
    pass.style.display = "none";
    var input1 = document.getElementsByTagName("INPUT");
    var placeholder1 = document.createAttribute("placeholder")
    input1[0].setAttributeNode(placeholder1);
    placeholder1.value = "email";
    var placeholder2 = document.createAttribute("placeholder")
    input1[1].setAttributeNode(placeholder2);
    placeholder2.value = "password";
    var icon = document.getElementsByClassName("icon");
    for(var d=0; d <icon.length; d++) {
        icon[d].style.display = "none";
    }
    var btmborder = document.getElementsByClassName("border-bottom");
    for(let d=0; d <btmborder.length; d++) {
        btmborder[d].style.display = "none";
    }
    var topBorder = document.getElementsByClassName("border-top");
    for(let d=0; d <topBorder.length; d++) {
        topBorder[d].style.display = "none";
    }
    var ft = document.getElementsByClassName("ft");
    for(let i=0; i<ft.length; i++) {
        ft[i].style.paddingLeft = "10%";
    }
    var td = document.getElementsByTagName("TD");
    for(let i=0; i<td.length; i++){
        td[i].style.backgroundColor = "#113f67";
    }
    var help = document.getElementsByTagName("A");
    help[2].style.color = "white";

    var loginArea = document.getElementsByClassName("title");
    for(let i=0; i<loginArea.length; i++){
        loginArea[i].style.color = "#113f67";
    }
    var helpp = document.getElementsByTagName("FONT");
    for(let i=0; i<helpp.length; i++) {
        helpp[i].style.color = "white";
    }
    var loginColor = document.getElementsByClassName("btn-text");
    for(let i=0; i<loginColor.length; i++){
        loginColor[i].innerText = "SUBMIT";
    }
    var bracuLogo = document.getElementsByTagName("IMG");
    for(let i=0; i<bracuLogo.length; i++){
        bracuLogo[i].style.display = "none";
    }
    var bloop = document.getElementById("at-banner");
    var newLogo = document.createElement("IMG");
    var src = document.createAttribute("SRC");
    src.value = "https://www.bracu.ac.bd//sites/all/themes/sloth/logo_white.svg";
    newLogo.setAttribute("width", "100px");
    newLogo.setAttribute("height", "90px");
    newLogo.setAttributeNode(src);
    bloop.appendChild(newLogo);

    var formHeader = document.getElementsByClassName("title");
    for(let i=0; i<formHeader.length; i++){
        formHeader[i].style.color = "white";
        formHeader[i].style.paddingLeft = "35%";
        formHeader[i].style.paddingTop = "15px";
        formHeader[i].style.fontSize = "33px";
    }
    var headerCss = document.getElementsByClassName("hd")[0];
    headerCss.style.background = "none";
    headerCss.style.backgroundColor = "rgb(17, 63, 103)";
    headerCss.style.paddingTop = "45px";

    var plholder = document.getElementsByClassName("validtxt");
        for(let i=0; i<plholder.length; i++) {
            plholder[i].style.backgroundColor = "white";
            plholder[i].style.border = "0px";
            plholder[i].style.backgroundPosition = "0px";
            plholder[i].style.padding = "8px 7px";
        }
    $(document).ready(function(){
        $("input").focus(function(){
            $(this).css("box-shadow", "none");
            $(this).css("outline", "none");
            $(this).css("background-position", "0 0");
        });
        $("input").validate(function(){
            $(this).css("box-shadow", "none");
            $(this).css("outline", "none");
            $(this).css("background-position", "0 0");
        });
    });
    $(document).ready(function(){
        $(".button.login-btn").hover(function(){
            $(this).css("transform", "translateY(-5px)");
            $(this).css("box-shadow", "0 6px 6px 0 rgba(0,0,0,0.2)");
        }, function(){
            $(this).css("transform", "translateY(0px)");
            $(this).css("box-shadow", "0 6px 6px 0 rgba(0,0,0,0.2)");
        });
        // $(".classname").attr("placeholder", "YOUR TEXT");
        // $(".classname").attr("placeholder", "YOUR TEXT");
    });












}