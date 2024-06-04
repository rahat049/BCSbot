const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, 'user');
        handleUserInput(userMessage); // New function to handle user input
        userInput.value = '';
    }
}

function handleUserInput(message) {
    // Example: Check for keywords and provide relevant responses
    if (message.includes('Bangladesh Affairs')) {
        appendMessage('Here is the link for Bangladesh Affairs:', 'bot');
        appendMessage('Google Drive link: [Your link here]', 'bot');
    } else if (message.includes('PDF')) {
        appendMessage('Here are some PDF resources:', 'bot');
        // Add more links or logic as needed
    } else {
        appendMessage("I'm sorry, I didn't understand that.", 'bot');
    }
}

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}
