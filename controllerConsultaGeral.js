if(getQueryVariable("re") !== false && getQueryVariable("cidade") !== false){
    console.log(getQueryVariable("re") + " " + getQueryVariable("cidade"));
    createObserver("row4", a);  
}

function a(canvas){
    canvas.getElementsByTagName('button')[0].click();
    createObserver("row16", b);  
}

function b(canvas){

    canvas.getElementsByTagName('select')[0].value = "ID_EDIFICACAO"; 
    canvas.getElementsByTagName('input')[0].value = getQueryVariable("re");
    canvas.getElementsByTagName('select')[1].value = getQueryVariable("cidade");

    /*var $scope = angular.element($0).scope(); */

    /* 
    var app = angular.module('myApp');
    app.controller('controllerConsultaGeral', function($scope){
        $scope.form.objects.tpPesquisa = '{RE : "ID_EDIFICACAO"}'; 
        //$scope.form.objects.nm_pesquisa_edificacao = '582565832'
    }); 
    */

    /*
    canvas = document.getElementById('row17'); 
    canvas.getElementsByTagName('button')[1].removeAttribute('disabled');
    canvas.getElementsByTagName('button')[1].click();
    createObserver("row17", c); 
    */
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