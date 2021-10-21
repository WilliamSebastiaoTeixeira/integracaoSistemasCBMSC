/*
function b(canvas){

    console.log(canvas); 
    console.log(canvas.getElementsByTagName('select')[0] == undefined); 

    if(canvas.getElementsByTagName('select')[0] != undefined){
        angular.element(document.getElementById('row16').getElementsByTagName('select')[0]).scope().form.objects.tpPesquisa = { id: "ID_EDIFICACAO", label: "RE" }; 
        angular.element(document.getElementById('row16').getElementsByTagName('select')[0]).scope().$digest(); 
    }
    var select0 = angular.element(canvas.getElementsByTagName('select')[0]).scope();  
    select0.form.objects.tpPesquisa = { id: "ID_EDIFICACAO", label: "RE" }; 
    console.log(select0.form.objects.tpPesquisa);
    select0.$digest();
    */

    //scope.form.objects.nm_pesquisa_edificacao.nmPesquisaEdificacao = getQueryVariable("re");

    //scope.$digest(); 

    /*
    canvas.getElementsByTagName('select')[0].value = "ID_EDIFICACAO"; 
    canvas.getElementsByTagName('input')[0].value = getQueryVariable("re");
    canvas.getElementsByTagName('select')[1].value = getQueryVariable("cidade");
    
}
*/
 
if(getQueryVariable("re") !== false && getQueryVariable("cidade") !== false){
    createObserver([['#row4', 0], ['button', 0]], a);
}

function a(elemento){
    createObserver([['#row16', 0]], b);
    elemento.click();
}

function b(elemento){
    //Até então, é a melhor solução
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
    `
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        var wait = async function() {
            sleep(100).then(()=>{
                if(!window.angular){
                    wait();
                }else{
                    atualizaValores();
                }
            }); 
        }
        wait(); 

        function atualizaValores(){

            console.log(${getQueryVariable("re")}); 

            var select0 = angular.element(document.querySelectorAll('#row16')[0].querySelectorAll('select')[0]).scope();  
            select0.form.objects.tpPesquisa = { id: "ID_EDIFICACAO", label: "RE" };
            select0.$digest();

            text0.form.objects.nm_pesquisa_edificacao.nmPesquisaEdificacao = "${getQueryVariable("re")}";             
            var text0 = angular.element(document.querySelectorAll('#row16')[0].querySelectorAll('input')[0]).scope();
            text0.$digest(); 

            var select1 = angular.element(document.querySelectorAll('#row16')[0].querySelectorAll('select')[1]).scope();
            select1.form.objects.cidadeEdificacaoAntigoSistema.id = ${getQueryVariable("cidade")}; 
            select1.$digest();
        }
        
    `;
    document.documentElement.appendChild(script);
    //document.documentElement.removeChild(script);

    /*
    var wait = async function(elemento) {
        sleep(1000).then((elemento)=>{
            showAng();
            b(elemento); 
        }); 
    }
    wait(elemento);
    */
     
    /*
    var select0 = angular.element(elemento.querySelectorAll('select')[0]).scope();  
    select0.form.objects.tpPesquisa = { id: "ID_EDIFICACAO", label: "RE" }; 
    console.log(select0.form.objects.tpPesquisa);
    select0.$digest();
    */
}

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function createObserver(elementoArr, func){
    var observer = new MutationObserver(function (mutations, me) {
        var elemento = runForEach(elementoArr); 
        if (elemento != undefined) {             
            me.disconnect();
            func(elemento); 
            return;
        }   
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });    
}

function runForEach(elementoArr){
    var objeto = document; 
    elementoArr.forEach(elemento => {
        objeto = objeto.querySelectorAll(elemento[0])[elemento[1]]; 
    });
    return objeto; 
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