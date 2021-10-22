// Até então, é a melhor solução 
// É preciso criar um script dentro da página para conseguir detectar o carregamento do Angular.

scriptInjetado(); 

function scriptInjetado(elemento){
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
        `
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        if(getQueryVariable("re") !== false && getQueryVariable("cidade") !== false){
            wait(); 
        }
        
        async function wait() {
            sleep(200).then(()=>{
                if(!window.angular){
                    wait();
                }else{
                    //atualizaValores("ID_EDIFICACAO", getQueryVariable("re"), getQueryVariable("cidade"));
                    pesquisar("ID_EDIFICACAO", getQueryVariable("re"), getQueryVariable("cidade"));
                }
            }); 
        }
   
        function pesquisar(id, texto, cidade) {
            var scope = angular.element(document.querySelectorAll('.ng-scope')[124]).scope();

            let url =
                "https://sigat.cbm.sc.gov.br/sigat_sincronia/modulos/relatorio/consulta_edif_esci.php?tipo_consulta="
                + id
                + '&texto_consulta=' + texto
                + '&cidade='+ cidade;
        
            fetch(url, {
                method : "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },         
            }).then(
                response => response.json()
            ).then(
                (html) => {
                    if (html != null) {
                        console.log(html[0]); 
                        
                        scope.form.objects.cidadeEdificacaoAntigoSistema = {
                            id: parseInt(getQueryVariable("cidade")) 
                        };

                        scope.form.objects.reSelecionadaAntigoSistema = html[0]; 

                        console.log(scope.form.objects); 

                        scope.form.changeActiveTab(scope.form.tabs[scope.tab.abaCadastrarNovoRe]);
                        scope.$digest(); 
                    }
                }
            );
        };

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
    `;
    document.documentElement.appendChild(script);
}

//Observa a criação de elementos na tela e executa uma função
/*

createObserver([['#row4', 0], ['button', 0]], a);

function a(elemento){
    console.log(elemento); 
}

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
*/

//Pega os parametros do URL
/*
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
*/

//log nos scopes do Angular
/*
var scopeArr = document.querySelectorAll('.ng-scope');
scopeArr.forEach(((scope, index)=>{
    if(angular.element(scope).scope().tab != undefined){
        console.log(index)
        console.log(scope); 
        console.log(angular.element(scope).scope());    
    }
}));
*/