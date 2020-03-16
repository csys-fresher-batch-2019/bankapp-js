function adminlogin() {
   event.preventDefault();
    var name = document.getElementById("name").value;
    var password = document.getElementById("pin").value;
    var formData = {"name":name,"password":password};
    console.log(name, password);
    var url = "http://localhost:9000/api/adminLogin?name=" + name + "&password=" + password;
    console.log(url);
    $.post(url, function (data) {
        console.log(data.infoMessage);
        if (data.infoMessage == "Login successsful") {
            localStorage.setItem("Logged_in_user", JSON.stringify(formData));
            window.location.href = "adminpage.html";
         } else {
            alert("Invalid Username 0r password");
        }
    });
}
