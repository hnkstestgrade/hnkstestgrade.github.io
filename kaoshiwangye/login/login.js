 var loginDiv = document.getElementById("login");
    var divW = loginDiv.clientWidth;
    var divH = loginDiv.clientHeight;
    var w = window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth;
    var h = window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    var x = (w-divW)/2;
    var y = (h-divH)/2;
    loginDiv.style.left = x + "px";
    loginDiv.style.top = y + "px";



    function Name()
    {
	var Na=document.getElementById("Na").value;
	
        
    if(Na=="宁鹤翔"){
        document.getElementById("namexia").innerHTML=null;
	    return;}
       if(Na==""||Na==null){
        document.getElementById("namexia").innerHTML="输入信息不能为空";
	    return;} 
        if(Na!="宁鹤翔"||Na!=""||Na!=null){
             document.getElementById("namexia").innerHTML="该用户不存在";
        return;}
    }
	   
    

    function checkPwd(){
	var pwd=document.getElementById("pwd").value;
	if (pwd=null||pwd==""){
		document.getElementById("pwdId").innerHTML="输入信息不能为空";
		return;}
         document.getElementById("pwdId").innerHTML=null;
        return;}
    
function login(){
    var pwd=document.getElementById("pwd").value;
    var Na=document.getElementById("Na").value;
    if(pwd=="430281199405121311"||Na=="宁鹤翔"){
        alert("登入成功");
        window.location.href="../login-success/login-success.html";
    return true;}
        alert("信息有误，无法登陆");
        return false
}



