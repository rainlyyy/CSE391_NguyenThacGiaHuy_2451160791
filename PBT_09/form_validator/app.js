const nameInput =
document.querySelector("#name");

const emailInput =
document.querySelector("#email");

const passwordInput =
document.querySelector("#password");

const confirmInput =
document.querySelector("#confirmPassword");

const phoneInput =
document.querySelector("#phone");

const submitBtn =
document.querySelector("#submitBtn");

const strengthBar =
document.querySelector("#strengthBar");

function validateName(){

const value =
nameInput.value.trim();

const msg =
document.querySelector("#nameMsg");

if(
value.length >= 2 &&
value.length <= 50
){
msg.textContent = "✅ Hợp lệ";
msg.className = "success";
return true;
}

msg.textContent =
"❌ Tên từ 2-50 ký tự";

msg.className = "error";

return false;
}

function validateEmail(){

const msg =
document.querySelector("#emailMsg");

const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(regex.test(emailInput.value)){

msg.textContent =
"✅ Email hợp lệ";

msg.className="success";

return true;
}

msg.textContent =
"❌ Email không hợp lệ";

msg.className="error";

return false;
}

function validatePassword(){

const value =
passwordInput.value;

const msg =
document.querySelector("#passwordMsg");

let strength = 0;

if(value.length >= 8)
strength++;

if(/[A-Za-z]/.test(value)
&& /\d/.test(value))
strength++;

if(
/[A-Z]/.test(value)
&&
/[a-z]/.test(value)
&&
/\d/.test(value)
&&
/[^A-Za-z0-9]/.test(value)
)
strength++;

if(strength === 1){

strengthBar.style.width="33%";
strengthBar.style.background="red";

msg.textContent="Yếu";

return true;
}

if(strength === 2){

strengthBar.style.width="66%";
strengthBar.style.background="orange";

msg.textContent="Trung bình";

return true;
}

if(strength === 3){

strengthBar.style.width="100%";
strengthBar.style.background="green";

msg.textContent="Mạnh";

return true;
}

strengthBar.style.width="0%";

msg.textContent="";

return false;
}

function validateConfirm(){

const msg =
document.querySelector("#confirmMsg");

if(
confirmInput.value ===
passwordInput.value
&&
confirmInput.value
){

msg.textContent =
"✅ Khớp mật khẩu";

msg.className =
"success";

return true;
}

msg.textContent =
"❌ Không khớp";

msg.className =
"error";

return false;
}

function validatePhone(){

const msg =
document.querySelector("#phoneMsg");

const digits =
phoneInput.value
.replace(/\D/g,"");

if(digits.length === 10){

msg.textContent =
"✅ Số điện thoại hợp lệ";

msg.className =
"success";

return true;
}

msg.textContent =
"❌ Phải đủ 10 số";

msg.className =
"error";

return false;
}

function formatPhone(){

let digits =
phoneInput.value
.replace(/\D/g,"")
.substring(0,10);

if(digits.length > 4){

digits =
digits.slice(0,4)
+
"-"
+
digits.slice(4);
}

if(digits.length > 8){

digits =
digits.slice(0,9)
+
"-"
+
digits.slice(9);
}

phoneInput.value =
digits;
}

function checkForm(){

submitBtn.disabled =
!(
validateName()
&&
validateEmail()
&&
validatePassword()
&&
validateConfirm()
&&
validatePhone()
);
}

nameInput.addEventListener(
"input",
()=>{
validateName();
checkForm();
}
);

emailInput.addEventListener(
"input",
()=>{
validateEmail();
checkForm();
}
);

passwordInput.addEventListener(
"input",
()=>{
validatePassword();
validateConfirm();
checkForm();
}
);

confirmInput.addEventListener(
"input",
()=>{
validateConfirm();
checkForm();
}
);

phoneInput.addEventListener(
"input",
()=>{
formatPhone();
validatePhone();
checkForm();
}
);

document
.querySelector("#registerForm")
.addEventListener(
"submit",
e=>{

e.preventDefault();

alert(`
Đăng ký thành công!

Tên:
${nameInput.value}

Email:
${emailInput.value}

Phone:
${phoneInput.value}
`);
});