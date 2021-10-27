scriptInjetado(); 

function scriptInjetado(){
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
        `
        if(getQueryVariable("re") !== false && getQueryVariable("cidade") !== false){
            waitAngular(()=>{
                carregarAbaCriarPreenchida("ID_EDIFICACAO", getQueryVariable("re"), getQueryVariable("cidade"));
            }); 
        }else if(getQueryVariable("reesci") !== false){
            carregarDadosRe(getQueryVariable("reesci"));  
        }

        function carregarDadosRe(re){
            fetch('https://esci.cbm.sc.gov.br/Safe/Geral/ControllerConsultaGeral/consultar/', {
                method : "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: '{"texto":"'+ re +'","numgCidade":null,"numrQuantidade":0,"flagMostrarReExcluido":false,"flagOnlyRe":true,"flagOnlyProtocolo":false}', 
            }).then(
                response => response.json()
            ).then(
                (html) => {                      
                    var f = document.createElement('form');
                    f.action='https://esci.cbm.sc.gov.br/Safe/Gerencial/ControllerRegistroEdificacoes/carregarDadosRe/';
                    f.method='POST';

                    var i = document.createElement('input');
                    i.type='hidden';
                    i.name='numgEdificacao';
                    i.value=html[0].numgEdificacao;
                    f.appendChild(i);

                    document.body.appendChild(f);
                    f.submit();
                } 
            );
        }

        function carregarAbaCriarPreenchida(id, texto, cidade) {
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
                }         
            }).then(
                response => response.json()
            ).then(
                (html) => {
                    if (html != null) {
                        scope.form.objects.cidadeEdificacaoAntigoSistema = {id: parseInt(cidade)};
                        scope.form.objects.reSelecionadaAntigoSistema = html[0]; 
                        scope.form.changeActiveTab(scope.form.tabs[scope.tab.abaCadastrarNovoRe]);
                        scope.$digest(); 
                        scope.form.objects.edificacao.nomeFantasia = html[0].nm_edificacao; 
                        scope.$digest(); 
                    }
                }
            );
        };

        async function waitAngular(funcao, ms = 100) {
            await new Promise(resolve => setTimeout(resolve, ms))
                .then(() => !window.angular ? waitAngular() : funcao()); 
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