// function registerUser(){
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
// }

async function registerUser() {
    try{
            let mail = {email:document.querySelector("#email").value,
                        name: document.getElementById("name").value,
                        password: document.getElementById("password").value
                      };
            let response = await fetch("http://localhost:7000/register",{
                method:"POST",
                body:JSON.stringify(mail),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            console.log(data)
        } catch(err){
            console.log(err.message)
        }
  }