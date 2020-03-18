function updateAccount() {
    
    var accountNo = document.getElementById("accNo").value;
    var amount = document.getElementById("price").value;
    var url = "http://localhost:9000/api/updateBalance?accNo="+ accountNo +"&amount="+amount;

    console.log(url);
    $.post(url, function (data) {
        console.log(data)
        if(data.infoMessage="Amount Successfully added"){
            alert("Amount Successfully added!!");
            window.location.href='AdminPage.html';
                }else{
                    alert("Amount Not added added!!");
                    window.location.href='AdminPage.html';
                }
    });
  
}
function validate(){
    event.preventDefault();
    var accNo = $("#accNo").val();
    // console.log(accNo.length);
    if(accNo.length == 10){
    updateAccount();
    }else{
        alert("Invalid Account Number");
    }
}