document.addEventListener("DOMContentLoaded", function () {
    // Function to show notification
    function showNotification(message) {
        const notification = document.getElementById('notification');
        const notificationMessage = document.getElementById('notification-message');

        notificationMessage.textContent = message; // Set the message
        notification.classList.remove('hidden'); // Show the notification
        notification.classList.add('visible');

        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('visible');
            notification.classList.add('hidden');
        }, 5000);
    }

    // Close notification button
    document.getElementById('close-notification').addEventListener('click', function () {
        const notification = document.getElementById('notification');
        notification.classList.remove('visible');
        notification.classList.add('hidden');
    });

    // Call showNotification when there is an update (this is just an example)
    // You can call this function whenever you want to notify users
    // Example: showNotification('New feature added to the website!');
});
