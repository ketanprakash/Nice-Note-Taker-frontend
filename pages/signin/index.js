const body = document.querySelector("body");

const apiUrl = "http://localhost:8000";
window.addEventListener('load', () =>{
    body.classList.add('visible');
});

const signUpForm = document.querySelector(".signup");
const signInForm = document.querySelector(".signin");

signInForm.addEventListener("submit", () =>{
    event.preventDefault();
    console.log("submitted")
    const email = document.querySelector(".signin-email").value;
    const password = document.querySelector(".signin-password").value;
    // console.log(name, email, password, cpassword);
    fetch(`${apiUrl}/auth/signin`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})}).then((res) => res.json()).then((data) => {
            console.log(data)
            const {token} = data; 
            if (token){
                localStorage.setItem("jwt", token);
                location.href = "/pages/dashboard/dashboard.html"
            }
            else{
                alert("signup/signin again");
            }
        }).catch((err) => {
        alert("Error Signing In!!");
        console.log(err);
    })
})

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted")
    const email = document.querySelector(".signup-email").value;
    const name = document.querySelector(".signup-name").value;
    const password = document.querySelector(".signup-password").value;
    const cpassword = document.querySelector(".csignup-password").value;
    // console.log(name, email, password, cpassword);
    if (password !== cpassword){
        alert("passwords don't match");
        return;
    }
    fetch(`${apiUrl}/auth/signup`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password})}).then((res) => res.json()).then((data) => {
            console.log(data)
            const {token} = data; 
            if (token){
                localStorage.setItem("jwt", token);
                location.href = "/pages/dashboard/dashboard.html"
            }
            else{
                alert("signup/signin again");
            }
        }).catch((err) => {
        alert("Error Signin Up!!");
        console.log(err);
    })
})
