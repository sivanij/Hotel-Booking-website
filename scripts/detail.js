function pricecal(){
    var Adults = document.getElementById('Adults').value;
    var fromdate = new Date(document.getElementById('fromDate').value);
    var todate   = new Date(document.getElementById('toDate').value);
    var total = document.getElementById('total');
    
    if(Adults && fromdate && todate) {
        var dateDiff = todate.getDate() - fromdate.getDate();
        var totalCal = Adults * dateDiff * 1000
        total.value = 'Rs ' + totalCal.toLocaleString('en-IN')
    } else {
        total.value = 0
    }

}
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