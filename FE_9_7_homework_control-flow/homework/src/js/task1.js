const login = prompt('please enter your login');
if (!login) {
    alert('canceled');
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === 'User') {
    let password = prompt('please enter your password');
    if (!password) {
        alert('canceled');
    } else if (password === 'SuperUser') {
        alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening');
    } else {
        alert('wrong password');
    }
} else {
    alert('I don’t know you');
}