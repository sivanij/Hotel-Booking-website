var text = "login";
var loginELE = document.getElementById('login');
var paymentBtn = document.getElementById('paynow_button');
if(islogin()){
    var text = "Log out";
    loginELE.innerHTML = text;
    loginELE.removeAttribute('data-target');
    loginELE.addEventListener('click', logout)
} else {
    paymentBtn.setAttribute('disabled', true);
}

function logout() {
    login()
}

function islogin(){
    return localStorage.getItem('username')  && localStorage.getItem('password');
}



var login = () =>{
    if(!islogin()){
                    
            var username = document.getElementById('userName').value;
            var password = document.getElementById('password').value;

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('user logged successfully!!!');
    } 
    else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        loginELE.removeEventListener('click', logout);
        location.reload();
    }
}