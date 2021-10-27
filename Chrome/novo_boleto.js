scriptInjetado(); 

function scriptInjetado(){
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = 
        `
        var campo_data = document.getElementsByTagName("tbody")[5].getElementsByTagName("td")[5].getElementsByTagName("input")[0];

        var date = new Date();
        date.setDate(date.getDate() + 15);
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        var dateString = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;

        campo_data.value = dateString; 
        `;
document.documentElement.appendChild(script);
}
