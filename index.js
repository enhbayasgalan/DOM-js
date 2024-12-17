// const parent = document.getElementById("game-container").innerHTML = "hello world";
// const parent2 = document.getElementById("game-container").style()

// const p_tag = document.createElement("p");
// p_tag.innerHTML = "i need p tag";

// document.getElementById("game-container").appendChild(p_tag);

// const new_element = document.createElement("div");
// new_element.innerHTML = "replead";

// document.getElementById("game-container").replaceChild(new_element, p_tag);

// new_element.style.color = "red";
// new_element.style.fontSize = "60px";



// new_element.addEventListener("mouseenter", () => {
//     new_element.style.color = "red";
// });

// new_element.addEventListener("mouseout", () => {
//     new_element.style.color = "green";
// });

// new_element.addEventListener("click", () => {
//     console.log("clicked");
// });

// const butt


const form = document.getElementById("form")
const fistname = document.getElementById("fistname")
const lastname = document.getElementById("lastname")
const usename = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")

form.addEventListener("sumbit", (e) => {
    e.preventDefault()

    Validateform()
});
const setmessage = (type, element, message = "") => {
    const inputgroup = element.parentElement;
    const errorfield = inputgroup.queryselector("error__field")
    
    switch(type){
        case messagetype.Error:
          errorfield.innertext = message;
          inputgroup.classlist.add("error");
          break;
          case messagetype.SUCCESS:
            errorfield.innertext = "";
            inputgroup.classlist.remove("error");
            break;
    }
};
 
const isNumberic = (num) => {
    return !isNaN(num - parseFloat(num));
};

const isValidEmail = (val) => {
    return val.match()
}

const Validateform = () => {
    const fistnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const userNamevalue = userName.value.trim();
    const emailvalue = email.value.trim();
    const phonevalue = phone.value.trim();

    let isformvold = true;
    if(fistnamevalue === ""){
      setmessage(messagetype.Error, fistname, "First Name is required");
      isFormValid = false;
    }else{
        setmessage(messagetype.SUCCESS, fistname);
    }

    if(lastnamevalue === ""){
        setmessage(messagetype.Error, lastname, "Last Name is required");
        isformvaild = false;
      } else {
          setmessage(messagetype.SUCCESS, lastname);
      }

      if(userNamevalue === ""){
        setmessage(messagetype.error, usename, "user name is required");
        isformvaild = false;
      }else if(userNamevalue.length < 3 || userNamevalue > 20){
        setmessage(
            messagetype.Error, 
            userName,
            "user name should contain 3-20 characters"
        );
        isFormValid = false;
      } else {
        setmessage(messagetype.SUCCESS, userName)
      }

      if (emailValue === "") {
        setmessage(messagetype.Error, email, "email is required");
        isFormValid = false;
      } else if (!isValidEmail(emailvalue)) {
        setmessage(messagetype.Error, email, "Email is invalid")
        isformVaild = false;
      } else {
        setmessage(messagetype.SUCCESS, email);
      }

      if(phonevalue === "") {
        setmessage(messagetype.Error, phone, "phone number is required");
        isFormValid = false;
      } else if (phonevalue.length !== 10) {
        setmessage(
            messagetype.Error,
            phone,
            "Phone number should contain 10 digits"
        );
        isFormValid = false;
      } else if (!isNumber(phonevalue)) {
         setmessage(messagetype.Error, phone, "phone number dhould only ")
      }
      
      
};
