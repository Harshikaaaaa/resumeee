
document.getElementById("contactForm")?.addEventListener("submit", function (e) { 
    e.preventDefault(); 
 
    let name = document.getElementById("name").value.trim(); 
    let email = document.getElementById("email").value.trim(); 
    let subject = document.getElementById("subject").value.trim(); 
    let message = document.getElementById("message").value.trim(); 
    let error = document.getElementById("error"); 
 
    if (!name || !email || !subject || !message) { 
        error.textContent = "All fields are required!"; 
        error.style.color = "red"; 
    } else { 
        error.textContent = "Message sent successfully!"; 
        error.style.color = "green"; 
    } 
}); 
 
