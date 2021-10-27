scriptInjetado(); 

function scriptInjetado(){
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
        `
        var texto_re = document.getElementsByName("txt_id_edificacao");    
        texto_re[0].removeAttribute("onclick");
        texto_re[0].removeAttribute("onblur");
        texto_re[0].removeAttribute("onkeypress");
        texto_re[0].removeAttribute("onkeyup");
        texto_re[0].removeAttribute("onblur");

        var re = document.getElementsByTagName("td")[31].getElementsByTagName("input")[0]; 

        var td_30 = document.getElementsByTagName("td")[30];
        td_30.innerHTML = "";
        
        var formGeral = '<form action="/sigat/modulos/solicitacoes/rel_geral.php" enctype="multipart/form-data" method="post" name="frm_acomp_solic" target="_blank">'
                    +'<input type="submit" name="btn_enviar" onclick="alterare()" value="RE" title="Abrir RE no SIGAT" class="campo" style="float:left">'
                    +'<input type="hidden" name="hdn_id_tipo" value="1">'
                    +'<input type="hidden" name="hdn_id_edificacao" value="' + re.value + '">'
                    +'<input type="hidden" name="hdn_id_cidade" value="' + document.getElementById("hdn_id_cidade").value + '">'
                    +'</form>';

        var formSGI = '<form action="https://sgi.cbm.sc.gov.br/p02" method="post"  target="_blank" name="frm_sgi" accept-charset="utf-8">'
                    +'<input id="re" name="re" value="'+ re.value +'" type="hidden">'
                    +'<input type="submit" onclick="alterare()" name="btn_enviar" value="SGI" title="Abrir RE no SGI" class="campo" style="float:right">'
                    +'</form>';

        var thead = document.getElementsByTagName("head")[0]; 
        var script = document.createElement("script"); 
        script.innerHTML =   'function alterare(){'
                            +'  document.getElementsByName("hdn_id_edificacao")[0].value = document.getElementsByTagName("td")[31].getElementsByTagName("input")[0].value;'
                            +'  document.getElementsByName("re")[0].value = document.getElementsByTagName("td")[31].getElementsByTagName("input")[0].value;'
                            +'}';

        thead.appendChild(script); 
    
        var newDiv = document.createElement('div');
        newDiv.innerHTML = formGeral + formSGI; 
        td_30.appendChild(newDiv); 
    `;
    document.documentElement.appendChild(script);
}