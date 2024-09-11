function loginOn() {
    document.getElementById("login").style.display = "flex";
  }
  
  function loginOff() {
    document.getElementById("login").style.display = "none"
  }

  function registerOn() {
    document.getElementById("register").style.display = "flex";
  }

  function registerOff() {
    document.getElementById("register").style.display = "none";
  }

  function login(){
    document.getElementById("logged").style.display = "flex";
    document.getElementById("unlogged").style.display = "none";
    loginOff();
    registerOff();
  }

  function logout(){
    document.getElementById("logged").style.display = "none";
    document.getElementById("unlogged").style.display = "flex";
    loginOff();
    registerOff();
  }