function handleButtonClick(option) {
    const messages = document.getElementById("chatbot-messages");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = option;
    messages.appendChild(userMessage);
    scrollToBottom();

    const typingBubble = document.createElement("div");
    typingBubble.classList.add("message", "bot-message", "typing");

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("typing-dots");

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("div");
        dot.classList.add("typing-dot");
        dotsContainer.appendChild(dot);
    }

    typingBubble.appendChild(dotsContainer);
    messages.appendChild(typingBubble);
    scrollToBottom();

    setTimeout(() => {
        messages.removeChild(typingBubble);

        let botMessage = "";
        switch (option) {
            case "Hello":
                botMessage = "Hi there! How can I assist you today?";
                break;
            case "Services":
                botMessage = "We offer higher education consulting, custom AI system integration, and digital media solutions. Which will help with your needs?";
                break;
                case "Contact":
                botMessage = 'You can contact us through email, or fill out our contact form <a href="contact.html" target="_blank">here!</a> We look forward to working with you!';
                break;                              
                case "Help":
                botMessage = 'Just click one of the buttons to interact with me. I\'m here to help! Have additional questions? Fill out our <a href="contact.html" target="_blank">contact form</a>!';
                break;
            case "Campus Insight":
                botMessage = "Campus Insight helps institutions by providing guidance on aspects from enrollment strategies to executive transition. Would you like more details or to contact us for a consultation?";
                break;
            case "Pennock Systems":
                botMessage = "Pennock Systems helps automate processes, improve the user experience as well as productivity. From custom chatbots to personalized web design, we've got you covered. How can we help?";
                break;
            case "5-Star Media":
                botMessage = "5-Star Media enhances brand presence through creative digital strategies. From social media campaigns to personal brand display, we tailor solutions to boost your online visibility. How can we assist?";
                break;
            case "Custom Chatbots":
                botMessage = "We specialize in creating custom AI chatbots tailored to your business needs. Whether you're looking for FAQ automation, customer support, or advanced AI-driven interactions, we can help bring your vision to life!";
                break;
            case "Web Design":
                botMessage = "Our web design services focus on creating modern, responsive, and user-friendly websites. We aim to enhance user experience and drive engagement with beautiful, functional, and optimized designs.";
                break;
            default:
                botMessage = "I'm not sure how to respond to that. Please choose a valid option.";
                break;
        }

        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.textContent = botMessage;
        botResponse.innerHTML = botMessage; // Use innerHTML here to render HTML
        messages.appendChild(botResponse);
        scrollToBottom();

        if (option === "Services") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");

                const button1 = createButton("Campus Insight");
                const button2 = createButton("Pennock Systems");
                const button3 = createButton("5-Star Media");

                buttonContainer.appendChild(button1);
                buttonContainer.appendChild(button2);
                buttonContainer.appendChild(button3);
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "Campus Insight") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");

                const button1 = createButton("Learn More", "insight-solutions.html");
                const button2 = createButton("Contact Us", "contact.html");

                buttonContainer.appendChild(button1);
                buttonContainer.appendChild(button2);
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "5-Star Media") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");

                const button5 = createButton("Learn More", "5-Star-Media.html");
                const button6 = createButton("Contact Us", "contact.html");

                buttonContainer.appendChild(button5);
                buttonContainer.appendChild(button6);
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "Pennock Systems") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");

                const button1 = createButton("Custom Chatbots");
                const button2 = createButton("Web Design");
                const button3 = createButton("Contact Us", "contact.html");
                const button4 = createButton("Learn More", "technology-consulting.html");

                buttonContainer.appendChild(button1);
                buttonContainer.appendChild(button2);
                buttonContainer.appendChild(button3);
                buttonContainer.appendChild(button4);
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

    }, 1000);
}

function createButton(label, url = null) {
    let button;

    if (url) {
        // Create anchor element styled as a button (for links like Learn More and Contact Us)
        button = document.createElement("a");
        button.href = url;
        button.target = "_blank";
        button.classList.add("chatbot-btn", "chatbot-link-btn");
    } else {
        // Create normal button (for Custom Chatbots, Web Design, etc.)
        button = document.createElement("button");
        button.classList.add("chatbot-btn");
        button.onclick = () => handleButtonClick(label);
    }

    button.textContent = label;
    return button;
}

function greetUser() {
    const messages = document.getElementById("chatbot-messages");
    const greetingMessage = document.createElement("div");
    greetingMessage.classList.add("message", "bot-message");
    greetingMessage.textContent = "Hello! How can I assist you today?";
    messages.appendChild(greetingMessage);
    scrollToBottom();
}

window.onload = greetUser;

function scrollToBottom() {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: "smooth"
        });
    }
}









  
  
  


  
