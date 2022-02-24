// function registerUser(){
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
// }

async function registerUser() {
    try{
            let mail = {
                        name: document.getElementById("name").value,
                        email:document.querySelector("#email").value,
                        password: document.getElementById("password").value
                      };
            let response = await fetch("http://localhost:9999/register",{
                method:"POST",
                body:JSON.stringify(mail),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            if(data){
                alert("Registration Successfull!!");
                window.location.href="../login.html"
            }
        } catch(err){
            console.log(err.message)
        }
  }