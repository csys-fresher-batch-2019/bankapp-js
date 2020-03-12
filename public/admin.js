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
function capLock(e){
    kc = e.keyCode?e.keyCode:e.which;
    sk = e.shiftKey?e.shiftKey:((kc == 16)?true:false);
    if(((kc >= 65 && kc <= 90) && !sk)||((kc >= 97 && kc <= 122) && sk))
     document.getElementById('divMayus').style.visibility = 'visible';
    else
     document.getElementById('divMayus').style.visibility = 'hidden';
   }
function myFunction() {
    var x = document.getElementById("pin");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }