function sendCode(){


let phone =
document.getElementById("phone").value;



if(phone.length !== 11){


alert("شماره موبایل صحیح نیست");

return;


}



document.getElementById("otpBox")
.style.display="block";



alert("کد تایید ارسال شد");


}





function login(){



let code =
document.getElementById("otp").value;



if(code.length < 4){


alert("کد تایید را وارد کنید");


return;

}



alert("ورود موفق بود");


window.location.href="index.html";



}