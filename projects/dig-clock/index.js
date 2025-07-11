// digital clock program

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0);
    const secs = now.getSeconds().toString().padStart(2, 0);
    const timeStrng = `${hours}:${mins}:${secs} ${meridiem}`;

    document.getElementById("clock").textContent = timeStrng;
}

updateClock();
setInterval(updateClock, 1000);