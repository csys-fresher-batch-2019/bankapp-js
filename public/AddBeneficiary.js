function addBeneficiary() {  
    var cusNo = document.getElementById("accNo").value;
    var name = document.getElementById("name").value;
    var ifsc = document.getElementById("ifsc").value;
    var url = "http://localhost:9000/api/addBene?accNo="+ accNo +"&cusAcc="+ cusNo +"&ifs="+ ifsc +"&name="+ name;

    console.log(url);
    $.post(url, function (data) {
        console.log(data) ; 
        if(data.infoMessage="Beneficiary added"){
            alert("Amount Successfully added!!");
            window.location.href='UserPage.html';
                }else if(data.errorMessage="Beneficiary already exists"){
                    alert("Beneficiary already exists");
                    window.location.href='UserPage.html';
                }else{
                    alert("problem occurs");
                    window.location.href='UserPage.html';
                }
    });
}
function validate(){
    event.preventDefault();
    var accNo = $("#accNo").val();
    // console.log(accNo.length);
    if(accNo.length == 10){
        addBeneficiary();
    }else{
        alert("Invalid Account Number");
    }
}