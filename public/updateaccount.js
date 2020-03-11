function updateaccount() {
    
    var AccountNo = document.getElementById("accNo").value;
    var amount = document.getElementById("price").value;
    var url = "http://localhost:9000/api/updateBalance?accNo="+ AccountNo +"&amount="+amount;

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
    updateaccount();
    }else{
        alert("Invalid Account Number");
    }
}