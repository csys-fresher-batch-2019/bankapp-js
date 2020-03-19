function userLogin() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var password = document.getElementById("pin").value;
    var formData = { "name": name, "password": password };
    console.log(name, password);

    var url = "http://localhost:9000/api/userLogin?email=" + name + "&pass=" + password;
    console.log(url);

    $.post(url, function (data) {
        console.log(data.infoMessage);

        if (data.infoMessage == "Login success") {
            localStorage.setItem("Logged_in_user", JSON.stringify(formData));
            let url2 = "http://localhost:9000/api/getAccount?email=" + name;
            $.getJSON(url2, function (accDetails) {
                console.log(accDetails);
                sessionStorage.setItem("accountNumber", accDetails.accNo);
                sessionStorage.setItem("availableBalance", accDetails.availableBalance);
                window.location.href = "UserPage.html";
            });
        } else {
            alert("Invalid Username 0r password");
        }
    });
}
