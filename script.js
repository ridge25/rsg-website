document.getElementById("chatbot-toggle").addEventListener("click", () => {
    const frame = document.getElementById("chatbot-frame");
  
    // Check if the iframe is hidden or not
    if (frame.style.display === "none" || frame.style.display === "") {
      frame.style.display = "block";  // Show the iframe
    } else {
      frame.style.display = "none";   // Hide the iframe
    }
  });
