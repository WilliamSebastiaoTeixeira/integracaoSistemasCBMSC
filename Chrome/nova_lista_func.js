scriptInjetado(); 

function scriptInjetado(){
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
        `
        document.getElementsByClassName("container-form")[0].removeChild(document.getElementsByClassName("legendaListaFunc")[0])
        `;
    document.documentElement.appendChild(script);
}