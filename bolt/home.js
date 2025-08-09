document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let emailInput = document.getElementById("emailInput").value;
    let subscribeStatus = document.getElementById("subscribeStatus");
    
    if (emailInput) {
        subscribeStatus.innerText = "Thanks for subscribing!";
        subscribeStatus.style.color = "green";
        document.getElementById("emailInput").value = "";
    } else {
        subscribeStatus.innerText = "Please enter a valid email!";
        subscribeStatus.style.color = "red";
    }
});