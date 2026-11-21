
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");
const chatContent = document.getElementById("chatContent");

function sendMessage() {
    const text = input.value.trim();

    if (!text) return;

    welcome.style.display = "none";

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message";

    const userBubble = document.createElement("div");
    userBubble.className = "message-user";

    const userText = document.createElement("p");
    userText.textContent = text;

    userBubble.appendChild(userText);
    userMessage.appendChild(userBubble);
    messages.appendChild(userMessage);

    input.value = "";

    // UI placeholder for AI response
    const aiMessage = document.createElement("div");
    aiMessage.className = "message";

    const aiContent = document.createElement("div");
    aiContent.className = "message-ai";
    aiContent.textContent =
        "Đây là giao diện demo. Chưa kết nối API trả lời.";

    aiMessage.appendChild(aiContent);
    messages.appendChild(aiMessage);

    chatContent.scrollTop = chatContent.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

// Suggestion buttons
document.querySelectorAll(".suggestion").forEach(button => {
    button.addEventListener("click", () => {
        input.value = button.dataset.question;
        input.focus();
    });
});

// New chat
document.getElementById("newChatBtn").addEventListener("click", () => {
    messages.innerHTML = "";
    welcome.style.display = "block";
    input.value = "";
});
