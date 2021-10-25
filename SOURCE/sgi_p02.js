/*
if (document.readyState == 'complete') {
    if(window.location.search !== ""){
        if(getQueryVariable("re") != false){
            document.getElementById("re").value = getQueryVariable("re");
            document.getElementsByClassName("botao")[0].click()
        }
    }

    var BF = document.getElementsByClassName("botaoForum")[0]; 
    if (BF.parentNode) {
        BF.parentNode.removeChild(BF);
    }

    var tabela3 = document.getElementsByClassName("tabela")[3]; 
    if(typeof tabela3 !== 'undefined'){
        
        var thead = document.getElementsByTagName("head")[0]; 
        var script = document.createElement("script");
        script.innerHTML =   'function alteraRe(repar, cid){'
                            +'  var cidade = document.getElementsByTagName("option");'
                            +'  var cid2 = null;'
                            +'  for (var i = 0; i< cidade.length; i++) {'
                            +'      if(cidade[i].innerHTML == cid){'
                            +'          cid2 = cidade[i].value;'
                            +'      }'
                            +'   }'
                            +'window.open("https://sgi.cbm.sc.gov.br/g11" + "?re=" + repar + "&cid=" + cid2, "_blank");}';
        thead.appendChild(script); 

        var tbody = tabela3.getElementsByTagName("tbody")[0];
        var tr_all = tbody.getElementsByTagName("tr");
        
        for (var i = 0; i< tr_all.length; i++) {
            var btnHTML = '<input type="button" class="botao" style="float:right" value="Alterar" onclick="alteraRe('+ tr_all[i].getElementsByTagName("td")[2].innerText + ',' + tr_all[i].getElementsByTagName("td")[4].innerText +')">'; 
            tr_all[i].getElementsByTagName("td")[2].innerHTML = tr_all[i].getElementsByTagName("td")[2].innerText + btnHTML;
            tr_all[i].getElementsByTagName("td")[0].style.textAlign = "center"; 
            tr_all[i].getElementsByTagName("td")[1].style.textAlign = "center";  
            tr_all[i].getElementsByTagName("td")[2].style.textAlign = "center";     
            tr_all[i].getElementsByTagName("td")[3].style.textAlign = "center";  
            tr_all[i].getElementsByTagName("td")[4].style.textAlign = "center";  
        }
    }
}

function alteraRe(repar, cid){
    var cidade = document.getElementsByTagName("option"); 
    var cid2 = null; 
    for (var i = 0; i< cidade.length; i++) {
        if(cidade[i].innerHTML == cid){
            cid2 = cidade[i].value; 
        }
    }
    window.open("https://sgi.cbm.sc.gov.br/g11" + "?re=" + repar + "&cid=" + cid2, "_blank");
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
*/
