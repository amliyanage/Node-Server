import express from 'express';
const app = express();
// Middleware - function that has access to the request and response object
app.use((req, res, next) => {
    console.log('Middleware...');
    next(); // Move to the next middleware
});
app.get('/', (req, res) => {
    console.log('Landing page...');
    res.send('<h1>Landing page...</h1>');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.get('/delete', (req, res) => {
    res.send('<h1>Delete page...</h1>');
});
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`<h1>Delete page for ID: ${id}</h1>`);
});
