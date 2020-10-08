function login(){
  var name = document.getElementById("Username").value;
  var pw = document.getElementById("Password").value;
  if(name=="admin" && pw == "password"){
    window.location.href = "schedule.html";
  }
  else {
    alert("Failure")
  }
}
