if (document.readyState == 'complete') {
    
    var body = document.body; 
    
    //Container
    var container = document.createElement("div");
    container.className="popup";
    container.id="popup";

    container.style.width="200px";
    container.style.height="30px";
    container.style.left="1105px"; 
    container.style.top="72px"; 
    container.style.backgroundColor="blue";
    container.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.50)";
    container.style.position="fixed"; 
    container.style.zIndex="1000";

    if(localStorage.getItem("topLast") !== null && localStorage.getItem("leftLast") !== null){
        container.style.top = localStorage.getItem("topLast");
        container.style.left = localStorage.getItem("leftLast");
    }

    body.appendChild(container);
    
    dragElement(); 

    function dragElement() {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var topLast = 0, leftLast = 0; 
        var elemento = document.getElementById("popup"); 

        document.getElementById(elemento.id).onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault(); 
            // get the mouse cursor position at startup:
            pos3 = e.clientX;   
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elemento.style.top = (elemento.offsetTop - pos2) + "px";
            topLast = (elemento.offsetTop - pos2) + "px";
            elemento.style.left = (elemento.offsetLeft - pos1) + "px";
            leftLast = (elemento.offsetLeft - pos1) + "px";
        }  
        
        function closeDragElement() {
            // stop moving when mouse button is released:
            localStorage.setItem("topLast", topLast);
            localStorage.setItem("leftLast", leftLast);
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function criaJanela(){
        var body = document.body; 
        
        //Container
        var container = document.createElement("div");
        container.className="popup";
        container.id="popup";

        container.style.width="200px";
        container.style.height="200px";
        container.style.left="1105px"; 
        container.style.top="72px"; 
        container.style.backgroundColor="white";
        container.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.50)";
        container.style.position="fixed"; 
        container.style.zIndex="1000";

        if(localStorage.getItem("topLast") !== null && localStorage.getItem("leftLast") !== null){
            container.style.top = localStorage.getItem("topLast");
            container.style.left = localStorage.getItem("leftLast");
        }

        body.appendChild(container);
        
        //Header
        var header = document.createElement("div");
        header.className="popupHeader";
        header.id="popupHeader"

        header.style.backgroundColor="#3a4a8c";
        header.style.float="up"; 
        header.style.height="30px"; 
        header.style.color="white"; 
        header.style.textAlign="left";
        header.style.padding="1px";
        header.style.fontSize="15px";

        container.appendChild(header);
    }
}