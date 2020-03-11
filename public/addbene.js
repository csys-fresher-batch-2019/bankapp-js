function addbene() {
    
    var CusNo = document.getElementById("accNo").value;
    var name = document.getElementById("name").value;
    var ifsc = document.getElementById("ifsc").value;
    var url = "http://localhost:9000/api/addBene?accNo="+ accNo +"&cusAcc="+ CusNo +"&ifs="+ ifsc +"&name="+ name;

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
        addbene();
    }else{
        alert("Invalid Account Number");
    }
}