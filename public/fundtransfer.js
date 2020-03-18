 function fundTransfer() {
   // event.preventDefault();
    var accNo = sessionStorage.getItem("accountNumber");
    var beneAccNo = document.getElementById("beneAccNo").value;
    var amount = document.getElementById("amount").value;

    console.log(accNo, beneAccNo, amount);
    var url = "http://localhost:9000/api/fundTransfer?accNo=" + accNo + "&amount=" + amount + "&beneAccNo=" + beneAccNo;
    console.log(url);
    $.post(url, function (data) {
        console.log(data);
        if(data.infoMessage="Transaction successful"){
            alert("Transaction Successful");
            window.location.href='UserPage.html';
                }else{
                    alert("Transaction not successful");
                    window.location.href='UserPage.html';
                }
        
    });
}
function validate(){
    event.preventDefault();
    var accNo = $("#beneAccNo").val();
    // console.log(accNo.length);
    if(accNo.length == 10){
        fundTransfer();
    }else{
        alert("Invalid Account Number");
    }
}

