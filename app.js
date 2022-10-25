const email="shantanuchavhan10@gmail.com"
const password="shantanu"

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs
})

function getInputValue(){
    // Selecting the input element and get its value 
    var inputemail = document.getElementById("email").value;
    var inputpassword = document.getElementById("password").value;
    console.log(inputemail)
    console.log(inputpassword)
    if (inputemail==email && inputpassword==password){
        window.location.href = "http://127.0.0.1:5500/home.html";
        
    }else if(inputemail!=email){
        alert("worng email")
        document.getElementById("email_error").style.display="block";
        

    }else{
        alert("wrong pass")
        document.getElementById("pass_error").style.display="block";

    }
    
    // Displaying the value
    alert(inputVal);
}