if (document.readyState == 'complete') {
    var frm = document.frm_detalhes;
    frm.target = "_blank";

    var fieldset = document.getElementsByTagName("fieldset")[0]; 
    
    var caixaPesquisa  = '<div style="border-radius:0px;background-color:white;padding:1px;width:100%">';
        caixaPesquisa +=    '<input id="inputPesquisa" size="25" "type="text" class="campo" placeholder="Pesquise...">';
        caixaPesquisa +=    '<select class="campo_obr" id="selectFiltro">';
        caixaPesquisa +=        '<option value="0">Data</option>';
        caixaPesquisa +=        '<option value="1">Nome</option>';
        caixaPesquisa +=        '<option value="2">Cidade</option>';
        caixaPesquisa +=        '<option value="3">Tempo</option>';
        caixaPesquisa +=        '<option value="4" selected>Área</option></select></div>'; 
    
    fieldset.innerHTML = caixaPesquisa + fieldset.innerHTML; 
    
    document.getElementById("inputPesquisa").onkeyup = function(){
        var input, filter, td, tr, txtValue;

        tr = document.getElementsByTagName("tbody")[2].getElementsByTagName("tr");

        input = document.getElementById("inputPesquisa");
        filter = input.value.toUpperCase();

        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[document.getElementById("selectFiltro").value];
            if(td){
                if(parseInt(document.getElementById("selectFiltro").value) < 4){
                    txtValue = td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }else {
                        tr[i].style.display = "none";
                    }
                }else if(parseInt(document.getElementById("selectFiltro").value) > 3){ 
                    txtValue = td.innerText;
                    txtValue = txtValue.replace("(m²)", "");
                    if (parseInt(txtValue) > parseInt(filter)) {
                        tr[i].style.display = "";
                    }else if(txtValue.toUpperCase().indexOf(filter) > -1){
                        tr[i].style.display = "";
                    }
                    else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    };
}
