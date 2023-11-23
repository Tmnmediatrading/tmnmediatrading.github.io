self.addEventListener('install', function (event) {
    // Perform any installation steps needed
});

self.addEventListener('activate', function (event) {
    // Clean up any old caches or perform other tasks
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    // Handle notification click event (e.g., open a specific URL)
    event.waitUntil(
        //clients.openWindow('https://deriv.com')
    );
});
