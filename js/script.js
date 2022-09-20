//Selecting name field, to let it focus when user engages
let userName = document.getElementById("name");

userName.focus();

// Hiding the other job text field 
let jobRole = document.getElementById("title");

let otherJobText = document.getElementById("other-job-role")

otherJobText.style.display = "none";

// If other is picked, other job text field will display
jobRole.addEventListener("change", () =>{
    if (jobRole.value === "other"){
        otherJobText.style.display = 'block';
    } else {
        otherJobText.style.display = "none";
    }
});

//Selecting design and color
const shirtDesign = document.getElementById("design");

const shirtColor = document.getElementById("color");

//Disabling the shirt color on loading page
shirtColor.disabled = true;

const shirtThemes = shirtColor.children;

// Event listener for the design selected
shirtDesign.addEventListener("change", (e) => {
    document.getElementById("color").disabled = false;
    if(e.target.value === shirtTheme[i].getAttribute("data-theme")) {
        shirtThemes[i].hidden = false;
        shirtThemes[i].setAttribute("selected", true);
      } else {
        shirtThemes[i].hidden = true;
        shirtThemes[i].removeAttribute("selected");
      }
});

// Making fieldset and <p> elements listent for user changes when detected.Starting at 0

let activityField = document.getElementById("activities");
const totalCost = document.getElementById("activities-cost");
let newCost = 0;
const events = document.querySelectorAll("#activities-box input");


// Added event listener to change activityField, if it gets selected

activityField.addEventListener("change", (e) => {
    let costs = parseInt(e.target.getAttribute("data-cost"));
    if (e.target.checked) {
      newCost += costs;
    } else {
      newCost -= costs;
    }
    for (let i = 0; i < events.length; i++) {
      if (
        e.target.getAttribute("data-day-and-time") ===
         events[i].getAttribute("data-day-and-time") &&
        e.target.checked === true
      ) {
        events[i].disabled = true;
        e.target.disabled = false;
      } else if (
        e.target.getAttribute("data-day-and-time") ===
          events[i].getAttribute("data-day-and-time") &&
        e.target.checked === false
      ) {
        events[i].disabled = false;
      }
    }
    totalCost.innerHTML = `Total: ${newCost}`;
  });
  


  //payment variables 

const paymentSelected = document.getElementById('payment');

const creditCard = document.getElementById('credit-card');

const paypal = document.getElementById('paypal');

const bitcoin = document.getElementById('bitcoin');

paymentSelected.children[1].setAttribute("selected", true);
paypal.style.display = "none";
bitcoin.style.display = "none";

// changes in the selected payment will be found by event listener, and it will match the the method selected 

paymentSelected.addEventListener("change",(e) =>{
    if (e.target.value === "bitcoin") {
        document.getElementById("bitcoin").style.display = "block";
        creditCard.style.display = "none";
        paypal.style.distplay = "none";
    }else if (e.target.value === 'paypal'){
        document.getElementById("paypal").style.display = "block";
        creditCard.style.display = "none";
        bitcoin.style.display = "none";
    } else{
        document.getElementById("credit-card").style.display = "block";
        bitcoin.style.display = "none";
        paypal.style.display = "none";
    }
});

// new variables for users information


const emailField = document.getElementById("email");

const cvvField = document.getElementById("cvv");

const zipField = document.getElementById("zip");

const formField = document.querySelector("form");

const cardField = document.getElementById("cc-num");

const activitiesArray = document.querySelectorAll('[type="checkbox"]');

//function so see if input is correct
const nameValidation = () => {
    let nameInput = username.value;
    let validName = /^[a-zA-Z ]{2,30}$/.test(nameInput);
    return validName;
  };
  
  const emailValidation = () => {
    let emailSubmited = emailField.value;
    let validEmailed = /^\w+([\.-]?\w+)*@\w+([\.-]\w+)*(\.\w{2,3})+$/.test(
      emailSubmited
    );
    return validEmail;
  };
  
  const registerValidation = () => {
    if (addedCost > 0) {
      return true;
    } else {
      return false;
    }
  };
  
  const cardValidation = () => {
    let cardSubmited = cardField.value;
    let validCard = /^[0-9]{16}$/.test(cardSubmited);
    return validCard;
  };
  
  const zipValidation = () => {
    let zipSubmited = zipField.value;
    let validZip = /^[0-9]{5}$/.test(zipSubmited);
    return validZip;
  };
  
  const cvvValidation = () => {
    let cvvSubmited = cvvField.value ;
    let validCvv = /^[0-9]{3}$/.test(cvvSubmited);
    return validCvv;
  };

// event listenr for all users sumbtion 
form.addEventListener("submit", (e) => {
    if(invalidated) {
      e.preventDefault();
    }
    
      if (!nameValidation()) {
        invalidated(userName);
      } else {
        validated(userName);
      }
    
      if (!emailValidation()) {
        invalidated(emailField);
      } else {
        validated(emailField);
      }
    
      if (!activityField()) {
        invalidated(activityField);
      } else {
        validated(activityField);
      }
    
      if (paymentSelected.value === "credit-card") {
        if (!cardValidator()) {
          invalidated(cardField);
        } else {
          validated(cardField);
        }
    
        if (!zipValidatorion()) {
          invalidated(zipField);
        } else {
          validated(zipField);
        }
    
        if (!cvvValidation()) {
          invalidated(cvvField);
        } else {
          validated(cvvField);
        }
      }
    });
    