self.addEventListener('message', (event) => {
    if (event.data.type === 'TICK') {
        const title = `äway: ${event.data.degree}`;
        const options = {
            body: event.data.weather,
            silent: true,
            tag: 'solar-pos', // Overwrites the same bar
            renotify: false
        };
        self.registration.showNotification(title, options);
    }
});
