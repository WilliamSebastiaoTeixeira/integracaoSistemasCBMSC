scriptInjetado(); 

function scriptInjetado(){
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
        `
		var descri = document.getElementsByClassName("descricaoPRE");
		
		for(i = 0; i<descri.length; i++){
			descri[i].style="1"; 
		}
	}
	`;
	document.documentElement.appendChild(script);
}