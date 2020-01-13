var advCourses = new XMLHttpRequest();
advCourses.open('POST', 'http://usis.bracu.ac.bd/academia/studentCourse/advisedCourse', true);
advCourses.send();
advCourses.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var courses = getCourses(this.responseText);
       console.log({courses});
    }
};

var profile = new XMLHttpRequest();
profile.open('POST', 'http://usis.bracu.ac.bd/academia/student/showProfile', true);
profile.send();
profile.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var info = getInfo(this.responseText);
       console.log({info});
    }
};

function getCourses(advDoc){
    var doc = new DOMParser().parseFromString(advDoc, "text/html");
    var tds = doc.getElementsByTagName("td");
    var courses = [];
    for (var i = 7; i < tds.length; i++) {
        if(i%7 === 0){
            var cd = tds[i].innerText;
            var sec = tds[i+2].innerText;
            var ini = tds[i+3].innerText;
            courses.push({
                code: cd,
                section: sec,
                initial: ini
            });
        }
    }
    return courses;
}

function getInfo(profile){
    var doc = new DOMParser().parseFromString(profile, "text/html");
    var divs = doc.getElementsByClassName("element-input-value");
    var p = doc.getElementsByClassName("element-input-value-program");
    var id = divs[0].innerText;
    var name = divs[1].innerText;
    var email = divs[10].innerText;
    var bloodGroup = divs[12].innerText;
    var program = p[0].childNodes[2].data;
    var info = {id, name, email, bloodGroup, program};

    return info;
}