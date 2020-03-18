function register() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var accountType = document.getElementById("accType").value;
    var mobileNo = document.getElementById("mbleNo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var url = "http://localhost:9000/api/register?accType=" + accountType + "&city=" + city + "&email=" + email + "&mbleNo=" + mobileNo + "&name=" + name + "&password=" + password + "&street=" + street;
    console.log(url);
    $.post(url, function (data) {
        console.log(data);

        if (data.errorMessage == "Failed to register") {
            //localStorage.setItem("Logged_in_user", JSON.stringify(formData));
         alert("Not registered");
            window.location.href = "Register.html"; 
        } else {
            alert(data.infoMessage);
            window.location.href = "Index.html";
        }
    });
}
