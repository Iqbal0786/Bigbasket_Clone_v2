
  async function loginData() {
    try{
      let id = document.querySelector("#username").value;
      let pass = document.querySelector("#password").value;
      let mail = {email: id,
                  password: pass}
                let response = await fetch("http://localhost:9999/login",{
                method:"POST",
                body:JSON.stringify(mail),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            console.log(data.user)
            localStorage.setItem("UserInfo",JSON.stringify(data))
            // nameApnd()
            if(data.message){
              
              alert(data.message)
            }
            else{
              alert("Successfully Logged In ")
              window.location.href="../products.html"
            }
    }catch(err){
        console.log(err.message)
    }
  }

//     function nameApnd(){
//       let userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
//       if(userData){
//         let uName = document.getElementById("loginbutton");
//         uName.innerHTML = userData.user.name;
//       }
//   }