

const button = document.getElementById("submitbtn"); //define here
button.addEventListener("click", function () { // add event listener

    // get individual element by id
    const fullName =document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message");
    
    // form validation

    if (fullName===""|| email ===""|| address===""||password ===""){
        message.innerHTML = "please fill in your details"

    }else{ // details are properly filled in
        message.innerHTML ="Thankyou"+ fullName +"!your form was submitted"
    }
});

