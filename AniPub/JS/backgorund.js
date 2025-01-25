let userCredential =  JSON.parse(localStorage.getItem("WL")) ||[{
    name :"Adnan",
    email : "Admin",
    passward: "1234"

}]

let Passward = document.querySelector(".pass");
let cpassward = document.querySelector(".c-pass");
let Name = document.querySelector(".full-name");
let Email = document.querySelector("#MAil");

document.querySelector(".registar-up-button").addEventListener('click',()=>{
  if (Passward.value === cpassward.value) {
    if (Name.value !== '') {
          if (Email.value !== '') {
            setTimeout(()=>{
                document.querySelector(".r-n").innerText = `Info is on way to the server`;
            },1000)
            setTimeout(()=>{
                document.querySelector(".r-n").innerText = `Info saved`;
            },2000)
            setTimeout(()=>{

                document.querySelector(".r-n").innerText = `Registration Successful  ✔ `;
                userCredential.push(
                    {
                        name : Name.value,
                        email : Email.value,
                        passward : Passward.value, 
                    }
                )
                localStorage.setItem("WL",JSON.stringify(userCredential));
            },3000)

            
                
        }
          else {
            Email.placeholder = `Please provide mail/username`
          }       
    }
    else {
        Name.placeholder = `Please provide a name`
    }
  }




  else {
    cpassward.placeholder = `Password didn't match`;
  }
  

   
    

});


