let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let btn = document.querySelector(".btn");
let signInBtn = document.querySelector(".signin");


btn.addEventListener("click", function(){
    let userData = {
        email:userEmail.value,
        password:userPassword.value,
    }
    console.log(userData);
    signIn(userData);

});

async function signIn(data){
    let res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
    );
    let result = await res.json();
    console.log(result);

}

btn.addEventListener("click", () => {

    window.location.href = "https://ma7moud-elsakkar.github.io/PhotoFilters/";

});

