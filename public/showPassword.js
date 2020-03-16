function showPassword() {
    var x = document.getElementById("pin");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }