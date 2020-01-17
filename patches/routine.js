traverseRoutine();

function traverseRoutine(){
    console.log("traversing");
    var $routineTable = $(".simple-table-css").children("tbody");
    var rows = $routineTable.children();
    var cursor = rows.first();
    console.log("rows length: "  + rows.length);
    for(let i = 0; i < rows.length; i++){
        console.log("Row " + i);
        var arrayOfDatas = cursor[0].children;
        for(let j = 0; j < arrayOfDatas.length; j++){
            // swap wednesday tuesday
            if(j == 4){
                console.log("Swapping");
                swap(arrayOfDatas[j-1], arrayOfDatas[j]);
            }
            modifyInitials(arrayOfDatas[j]);
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