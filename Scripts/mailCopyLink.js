document.querySelectorAll('.copy-email-link').forEach(function (element) {
    element.addEventListener('click', async function (e) {
        e.preventDefault();
        const email = 'info@strangerdudes.com';
        try {
            await navigator.clipboard.writeText(email);
            showTemporaryMessage('Email Copied to the clipboard!');
        } catch (err) {
            console.error("There was an error copying the email");
        }
    });
});

function showTemporaryMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'temporary-message';
    messageElement.textContent = message;

    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);

    setTimeout(() => {
        messageElement.classList.remove('show');
        messageElement.addEventListener('transitionend', () => messageElement.remove());
    }, 2000);
}
