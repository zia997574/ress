// Endpoint to receive and store location data
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    if (!latitude || !longitude) {
        return res.status(400).send('Latitude and longitude are required');
    }

    locationData = { latitude, longitude };
    res.send('Location data received and stored');
});

// Endpoint to retrieve the last stored location data
app.get('/location', (req, res) => {
    if (!locationData) {
        return res.status(404).send('Location data not found');
    }

    res.send(locationData);
});
