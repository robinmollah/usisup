$(document).ajaxComplete(function() {
    console.log("Hello I am getting executed");
    // changeHeaderStyle();
    traverseRoutine();
});

$(document).ajaxStart(function() {
    console.log("Hello I am getting started");
    // changeHeaderStyle();
    traverseRoutine();
});

$(document).ajaxStop(function() {
    console.log("Hello I am getting succeeded");
    // changeHeaderStyle();
    traverseRoutine();
});


$(document).ajaxSuccess(function() {
    console.log("Hello I am getting succeeded");
    // changeHeaderStyle();
    traverseRoutine();
});

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
        }
        cursor=cursor.next();
    }

    function swap(obj1, obj2){
        let tmp = obj1.innerHTML;
        obj1.innerHTML = obj2.innerHTML;
        obj2.innerHTML = tmp;
    }
}
