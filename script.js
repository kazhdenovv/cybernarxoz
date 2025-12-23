// Кестені толтыру
const data = [
    { name: "Major Copenhagen", game: "CS2", prize: "$1.25M" },
    { name: "The International", game: "Dota 2", prize: "$15M" },
    { name: "Valorant Masters", game: "Valorant", prize: "$1M" }
];

const tbody = document.getElementById('table-data');
if (tbody) {
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.name}</td><td>${item.game}</td><td>${item.prize}</td></tr>`;
    });
}

// Чат-бот
function openChat() {
    const box = document.getElementById('chat-box');
    box.style.display = (box.style.display === "block") ? "none" : "block";
}

function sendMsg() {
    const input = document.getElementById('user-msg');
    const msgDiv = document.getElementById('messages');
    if (input.value) {
        msgDiv.innerHTML += `<p><b>Сен:</b> ${input.value}</p>`;
        setTimeout(() => {
            msgDiv.innerHTML += `<p><b>Бот:</b> Киберспорт — бұл болашақ! Сұрағыңызға рақмет.</p>`;
        }, 500);
        input.value = "";
    }
}