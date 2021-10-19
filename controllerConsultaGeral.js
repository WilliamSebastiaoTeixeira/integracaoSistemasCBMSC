
//console.log(getQueryVariable("re") + " : " + getQueryVariable("cidade"));

if(getQueryVariable != false){
    createObserver("row4", a);
}

function a(canvas){
    canvas.getElementsByTagName('button')[0].click();
    createObserver("row16", b);  
}

function b(canvas){
    canvas.
    console.log(canvas);
}

function createObserver(element, func){
    var observer = new MutationObserver(function (mutations, me) {
        var canvas = document.getElementById(element);
        if (canvas) {
            var handle = func; 
            handle(canvas); 
            me.disconnect();
            return;
        }   
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });    
} 

function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++){
        var pair = vars[i].split("=");
        if(pair[0] == variable){
            return pair[1];
        }
    }
    return(false);  
}