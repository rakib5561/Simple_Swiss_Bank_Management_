// login Athuntication code
document.getElementById('btn-login').addEventListener('click', function(){
    //get user input email and pass
    const emaliField = document.getElementById('user-email');
    const email = emaliField.value;

    const passField = document.getElementById("user-pass");
    const pass = passField.value;

    // verify email and password

    if(email === 'user@gmail.com' && pass === 'user1234'){
        console.log('valid user');
        emaliField.value = '';
        passField.value = '';
    }
    else{
        alert('Invaild user or password');
        emaliField.value = '';
        passField.value = '';
    }
})