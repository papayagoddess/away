// sw.js - updated for phïs transition
self.onmessage = (e) => {
    if (e.data.type === 'TICK') {
        const data = e.data.payload;
        let displayDate = data.standardDate;

        // Ensure the background notification respects the phïs naming
        if (new Date().getMonth() === 0) {
            displayDate = displayDate.replace(/january/gi, 'phïs');
        }

        self.registration.showNotification('äway', {
            body: `${data.localDegree} | ${displayDate} | ${data.weather}`,
            icon: 'time.png',
            tag: 'äway-tick',
            renotify: false,
            silent: true,
            ongoing: true
        });
    }
};
