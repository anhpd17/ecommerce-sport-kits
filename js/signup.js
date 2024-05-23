function handleSignUp() {
    let username = document.getElementById("username-input").value;
    let password = document.getElementById("password-input").value;
    let confirmPassword = document.getElementById(
        "confirm-password-input"
    ).value;

    if (username && password && confirmPassword) {
        if (password.length < 6) {
            alert("Mật khẩu phải lớn hớn 6 ký tự.");
            return;
        } else if (password != confirmPassword) {
            alert("Mật khẩu nhập lại không trùng khớp");
            return;
        } else {
            saveUser(username, password);
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }
}

function saveUser(username, password) {
    let usersLS = JSON.parse(localStorage.getItem("users")) || [];
    let newUser = {
        username: username,
        password: password,
    };

    usersLS.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersLS));
    alert("Đăng ký tài khoản thành công");
    window.location.href = "./login.html";
}
