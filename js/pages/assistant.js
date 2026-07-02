import { askGemini } from "../ai/gemini.js";

export async function send() {

    const input = document.querySelector("#prompt");

    const messages = document.querySelector("#messages");

    const message = input.value.trim();

    if (!message) return;

    messages.innerHTML+= `
<div class="user">
👤 ${message}
</div>
`;

    input.value = "";

    const reply = await askGemini(message);

    messages.innerHTML+= `
<div class="ai">
🤖 ${reply}
</div>
`;

    messages.scrollTop = messages.scrollHeight;

}