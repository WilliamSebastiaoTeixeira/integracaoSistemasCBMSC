if (document.readyState == 'complete') {

    var campo_data = document.getElementsByTagName("tbody")[5].getElementsByTagName("td")[5].getElementsByTagName("input")[0];

    var date = new Date();
    date.setDate(date.getDate() + 15);
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var dateString = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;

    campo_data.value = dateString; 

    //var tipo = document.getElementsByTagName("tbody")[2].getElementsByTagName("select")[1]; 
    //tipo.getElementsByTagName("option")[0].innerHTML = tipo.getElementsByTagName("option")[1].selected = " "; 
}
