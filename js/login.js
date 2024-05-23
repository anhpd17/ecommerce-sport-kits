function handleLogin() {
    let username = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;

    if (username && password) {
        checkInfo(username, password);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }
}

function checkInfo(username, password) {
    let usersLS = JSON.parse(localStorage.getItem("users")) || [];
    let findResult = usersLS.find(
        (x) => x.username == username && x.password == password
    );
    if (!findResult) {
        alert("Không tìm thấy tài khoản");
        return;
    } else {
        window.location.href = "./index.html";
    }
}
