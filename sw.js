self.addEventListener('push', function(e) {
    var options = {
      body: e.data? e.data.text():"",
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      }
    };
    e.waitUntil(
      self.registration.showNotification('Service Status', options)
    );
  });