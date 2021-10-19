/*
if (document.readyState == 'complete') {  
    if(window.location.search !== ""){
        if(getQueryVariable("re") != false){
            document.getElementById("processo").value = getQueryVariable("re");
        }
        
        if(getQueryVariable("cidade") != false){
            if(getQueryVariable("cidade") == "ararangua"){
                document.getElementsByTagName("select")[0].value = 8027;
            }

            if(getQueryVariable("cidade") == "balnearioarroiodosilva"){
                document.getElementsByTagName("select")[0].value = 8885;
            }

            if(getQueryVariable("cidade") == "maracaja"){
                document.getElementsByTagName("select")[0].value = 8391;
            }
        }

        if(getQueryVariable("cidade") == false){
            document.getElementsByTagName("select")[0].value = 8027;
            document.getElementsByClassName("botao")[0].click();
        }else{
            document.getElementsByClassName("botao")[0].click();
        }
            
    }

    
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