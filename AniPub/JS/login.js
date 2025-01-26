let User  = document.querySelector(".username")
let Pass = document.querySelector(".pass")

function login() {
    
userCredential.forEach((value)=>{
    if (value.email === User.value && value.passward === Pass.value) {
        document.querySelector(".login-a").setAttribute("href","Home.html")
    
    }
    else {
        document.querySelector(".warning").innerText = `Please provide correct Info`
    }

})
}
