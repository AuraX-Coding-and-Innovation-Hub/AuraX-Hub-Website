// handles AuraX contact form submission using formspree

document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

/* replace with your formspree form ID after creating the form */
const endpoint = "https://formspree.io/f/mnjgnedg";

form.addEventListener("submit", async (event) => {

event.preventDefault();

status.textContent = "Sending...";
status.style.color = "#ffffff";

const formData = new FormData(form);

try {

const response = await fetch(endpoint,{
method:"POST",
body:formData,
headers:{ "Accept":"application/json" }
});

if(response.ok){

status.textContent = "✅ Message sent successfully!";
status.style.color = "#4caf50";

form.reset();

}else{

status.textContent = "⚠️ Something went wrong. Please try again.";
status.style.color = "#f24e1e";

}

}catch(error){

status.textContent = "❌ Network error. Please check your connection.";
status.style.color = "#f24e1e";

console.error(error);

}

});

});