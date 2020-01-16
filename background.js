chrome.webNavigation.onCompleted.addListener(function(details) {
        chrome.tabs.executeScript({file: 'sidebar_tabs.js'});
        chrome.tabs.executeScript({file: "./patches/branding.js"});
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
    }
}, {urls : ['http://usis.bracu.ac.bd/*']});