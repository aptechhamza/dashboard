function website(){
    var userimg = localStorage.getItem("userimg");
    var username = localStorage.getItem("username");
    var useremail = localStorage.getItem("useremail");
    
    var dashImage=userimg;
    var immmg = document.getElementById("dashboardImg").setAttribute("src",dashImage);


    var loginname= document.getElementById("loginname");
    loginname.innerHTML=username
    var loginemail= document.getElementById("loginemail");
    loginemail.innerHTML=useremail

  }