 // Fetch the list of chat partners from the JSON file
 fetch('data/users.json')
 .then(response => response.json())
 .then(chatPartners => {
   // Randomly select a chat partner
   const randomPartner = chatPartners[Math.floor(Math.random() * chatPartners.length)];
   document.getElementById("chat-partner-name").textContent = randomPartner.name;
   document.getElementById("chat-partner-img").src = randomPartner.img;
 })
 .catch(error => console.error('Error fetching chat partners:', error));

// Send message on Enter key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
 if (event.key === "Enter") {
   sendMessage();
 }
});

// Send message function
function sendMessage() {
 const userInput = document.getElementById('user-input').value.toLowerCase();
 const chatBox = document.getElementById('chat-box');

 if (!userInput.trim()) return;

 // Display user message
 const userMessage = document.createElement('p');
 userMessage.className = 'user-message';
 userMessage.textContent = userInput;
 chatBox.appendChild(userMessage);

 // Get bot response
 const botMessage = document.createElement('p');
 botMessage.className = 'ai-message';
 botMessage.textContent = botResponses[userInput] || botResponses["default"];
 chatBox.appendChild(botMessage);

 // Clear input field
 document.getElementById('user-input').value = '';

 // Scroll to the bottom of the chat box
 chatBox.scrollTop = chatBox.scrollHeight;
}