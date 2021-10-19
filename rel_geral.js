if (document.readyState == 'complete') {
    var td_14 = document.getElementsByTagName("td")[14];
    var re = document.getElementsByClassName("campo")[1];
    var cidade = document.getElementsByName("hdn_id_cidade")[0]; 

    var formSGI = '<form action="https://sgi.cbm.sc.gov.br/p02" method="post"  target="_blank" accept-charset="utf-8">'
                 +'<input id="re" name="re" value="'+ re.value +'" type="hidden">'
                 +'<input type="submit" name="btn_enviar" value="SGI" title="Abrir RE no SGI" class="campo">'
                 +'</form>';

    var formNewEsci = '<a  class="campo" style="text-decoration:none;color:black" target="_blank"' + 
                      'href="https://esci.cbm.sc.gov.br/Safe/Geral/ControllerConsultaGeral/?re='+ re.value +'&cidade='+ cidade.value +'">Nova no e-SCI</a>' ;  

    var newDiv = document.createElement('div');
    newDiv.style.float = "left";
    newDiv.innerHTML = formSGI + formNewEsci; 
    td_14.appendChild(newDiv);

    // Original     
    var funcionamento = document.getElementsByTagName("fieldset")[7];
    var tableFuncinamento = funcionamento.getElementsByTagName("table")[0];
    var tbodyFuncionamento = tableFuncinamento.getElementsByTagName("tbody")[0];
    var trFuncionamento = tbodyFuncionamento.getElementsByTagName("tr");

    //Clone
    var clone = funcionamento.cloneNode(true);
    var cloneTable = clone.getElementsByTagName("table")[0];
    var cloneTbody = cloneTable.getElementsByTagName("tbody")[0];
    var cloneTr = cloneTbody.getElementsByTagName("tr");

    //Table que vai receber
    var tableRecebe = funcionamento.getElementsByTagName("table")[0].cloneNode(true); 
    tableRecebe.innerHTML = "";
    tbodyRecebe = document.createElement("TBODY");
    tbodyRecebe.id = "corpoRecebe";
    var trRecebe = tbodyRecebe.getElementsByTagName("tr");
    tableRecebe.appendChild(tbodyRecebe);   
    funcionamento.appendChild(tableRecebe);

    //Reorganiza as linhas
    for(var i = 0; i < trFuncionamento.length; i++){
        if(i < 1){
            tbodyRecebe.appendChild(cloneTr[i]);
        }
        else{
            for(var x = 0; x< cloneTr.length; x++){
                if(cloneTr[x].getElementsByTagName("td")[4].innerText == trFuncionamento[i].getElementsByTagName("td")[4].innerText){  
                    tbodyRecebe.appendChild(cloneTr[x]);
                    x = -1;
                }
            }
        }
    }
    funcionamento.removeChild(tableFuncinamento); 
    
    //Mudança de cor
    trRecebe[1].style.backgroundColor = "blue";
    trRecebe[1].style.color = "white"; 
 
    for (var i = 2; i < trRecebe.length; i++) {
        if(trRecebe[i].getElementsByTagName("td")[4].innerText == trRecebe[i - 1].getElementsByTagName("td")[4].innerText){
            trRecebe[i].style.backgroundColor = trRecebe[i - 1].style.backgroundColor; 
            if(trRecebe[i - 1].style.backgroundColor == "blue"){
                trRecebe[i].style.color = "white";  
            }
        }else{
            if(trRecebe[i - 1].style.backgroundColor == "blue"){
                trRecebe[i].style.backgroundColor = "white"; 
            }else if(trRecebe[i - 1].style.backgroundColor == "white"){
                trRecebe[i].style.backgroundColor = "blue";
                trRecebe[i].style.color = "white";  
            }
        }
    }

    //Abrir o protocolo em uma nova aba
    var tr = document.getElementById("corpoRecebe").getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        if(tr[i].getAttribute("onclick").slice(0,4) === "gera"){

        }else{
            var temp = location.href.replace('/solicitacoes/rel_geral.php','') + tr[i].getAttribute("onclick").slice(19);
            var janela = "window.open(" + "'" + temp +  ", '_blank')"
            tr[i].setAttribute('onclick',janela);
        }   
    }
 
    //Filtro
    var caixaPesquisa = '<div style="border-radius:0px;background-color:white;padding:1px;width:100%"><input id="inputPesquisa" size="25" "type="text" class="campo" placeholder="Pesquise..."><select class="campo_obr" id="selectFiltro"><option value="0">Protocolo</option><option value="1">Data</option><option value="2">Status</option><option value="3">Descrição</option><option value="4">Empresa</option></select></div>'; 
    funcionamento.innerHTML = caixaPesquisa + funcionamento.innerHTML; 

    document.getElementById("inputPesquisa").onkeyup = function(){
        var input, filter, td, txtValue, tr;

        tr = document.getElementById("corpoRecebe").getElementsByTagName("tr"); 
    
        input = document.getElementById("inputPesquisa");
        filter = input.value.toUpperCase();

        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[document.getElementById("selectFiltro").value];
            if (td) {
                txtValue = td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }else {
                    tr[i].style.display = "none";
                }
            }    
        }
    };
}

/*
function newSgi(par) {
    window.open("https://sgi.cbm.sc.gov.br/p02" + "?re=" + par, "_blank"); 
}
*/ 
 



