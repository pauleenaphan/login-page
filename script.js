var sub_btn = document.getElementById("sub_btn");
var pass = document.getElementById("password");
var pass_con = document.getElementById("password_confirm");
//sub_btn.addEventListener("click", subFunc);

// Checks whether or not the passwords match
function check_pass(){
    if(pass.value == pass_con.value){
        sub_btn.disabled = false;
        pass.classList.remove("invalid");
        pass_con.classList.remove("invalid");
    }else{
        sub_btn.disabled = true;
        pass.classList.add("invalid");
        pass_con.classList.add("invalid");
    }
}

