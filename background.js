chrome.webNavigation.onCompleted.addListener(function(details) {
        chrome.tabs.executeScript({file: 'sidebar_tabs.js'});
        chrome.tabs.executeScript({file: "./patches/branding.js"});
        chrome.tabs.executeScript({file: "topbar.js"});
        chrome.tabs.executeScript({file: "dashboardScrapper.js"});
        chrome.tabs.executeScript({file: "bracuBot.js"});
        chrome.tabs.executeScript({file: "loginPage.js"});
    }, {url: [
        {urlMatches : 'http://usis.bracu.ac.bd/'}
        ]}
    );

chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    chrome.tabs.executeScript({file: 'jquery.js'});
});

chrome.webRequest.onCompleted.addListener(function(details){
    if(details.url.indexOf("showStudentClassSchedule") > 10){
        chrome.tabs.executeScript({file: "./patches/routine.js"});
    } else if(details.url.indexOf("studentCourse/advisedCourse") > 1){
        console.log("Advised Course loaded");
        chrome.tabs.executeScript({file: "./patches/advisedCourses.js"});
    }
    chrome.tabs.executeScript({file: './patches/header.js'});
}, {urls : ['http://usis.bracu.ac.bd/*']});