function updateUTCTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const utcTimeString = now.toUTCString();
    timeElement.textContent = `Current UTC Time: ${utcTimeString}`;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);