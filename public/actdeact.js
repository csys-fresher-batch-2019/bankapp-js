function actdeact() {
// event.preventDefault();
    var AccountNo = document.getElementById("accNo").value;
    var status = document.getElementById("status").value;
    var url = "http://localhost:9000/api/activeAccount?accNo="+ AccountNo +"&status="+status;
    console.log(url);
    $.post(url, function (data) {
        console.log(data)
    });
}

function validate(){
    event.preventDefault();
    var accNo = $("#accNo").val();
    // console.log(accNo.length);
    if(accNo.length == 10){
        actdeact();
    }else{
        alert("Invalid Account Number");
    }
}

