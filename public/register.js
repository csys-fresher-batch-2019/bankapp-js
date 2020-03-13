function register() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var Accounttype = document.getElementById("accType").value;
    var mobileNO = document.getElementById("mbleNo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var url = "http://localhost:9000/api/register?accType=" + Accounttype + "&city=" + city + "&email=" + email + "&mbleNo=" + mobileNO + "&name=" + name + "&password=" + password + "&street=" + street;
    console.log(url);
    $.post(url, function (data) {
        console.log(data);

        if (data.errorMessage == "Failed to register") {
            //localStorage.setItem("Logged_in_user", JSON.stringify(formData));
         alert("Not registered");
            window.location.href = "register.html"; 
        } else {
            alert(data.infoMessage);
            window.location.href = "index.html";
        }
    });
}
