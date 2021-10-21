if(getQueryVariable("re") !== false && getQueryVariable("cidade") !== false){
    //createObserver([['#row4', 0], ['button', 0]], a);
    b(); 
}

function a(elemento){
    createObserver([['#row16', 0]], b);
    elemento.click();
}

function b(elemento){
    // -> Até então, é a melhor solução
    // -> É preciso criar um script dentro da página para conseguir detectar o carregamento do Angular.
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
    `
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

        var pesquisar = function(id, texto, cidade) {

            var scope =  angular.element(document.querySelectorAll('#tab_0')[0]).scope(); 

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
                        //scope.form.objects.reSelecionadaAntigoSistema = html[0];
                        //scope.form.objects.resultado = [html[0]];
                        //scope.$digest(); 
                    }
                }
            );
        };

        var wait = async function() {
            sleep(200).then(()=>{
                if(!window.angular){
                    wait();
                }else{
                    pesquisar("ID_EDIFICACAO", ${getQueryVariable("re")}, ${getQueryVariable("cidade")});
                }
            }); 
        }
        wait(); 

        function atualizaValores(){
            var scope =  angular.element(document.querySelectorAll('#tab_0')[0]).scope(); 
            scope.form.objects.tpPesquisa = { id: "ID_EDIFICACAO", label: "RE" };
            scope.form.objects.cidadeEdificacaoAntigoSistema = {id: ${getQueryVariable("cidade")}};
            //scope.form.objects.nm_pesquisa_edificacao = "${getQueryVariable("re")}";     
            scope.$digest();
        }   
    `;
    document.documentElement.appendChild(script);
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