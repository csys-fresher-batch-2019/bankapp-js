function activateAccount() {
// event.preventDefault();
    var accountNo = document.getElementById("accNo").value;
    var status = document.getElementById("status").value;
    var url = "http://localhost:9000/api/activeAccount?accNo="+ accountNo +"&status="+status;
    console.log(url);
    $.post(url, function (data) {
        console.log(data)
    });
    if(status=="active"){
        alert("Successfully Activated");
        window.location.href='AdminPage.html';
    }else
    {
        alert("Successfully Deactivated");
        window.location.href='AdminPage.html';
    }   
}

function validate(){
    event.preventDefault();
    var accNo = $("#accNo").val();
    // console.log(accNo.length);
    if(accNo.length == 10){
        activateAccount();
    }else{
        alert("Invalid Account Number");
    }
}

