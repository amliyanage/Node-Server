import express from 'express';

const app = express();

// Middleware - function that has access to the request and response object
app.use((req, res, next) => {
    console.log('Middleware...');
    next(); // Move to the next middleware
});

app.get('/', (req, res) => {
  console.log('Landing page...');
    res.send(`
            <form method="delete" action="/delete">
                <input type="text" name="Name" />
                <button type="submit" value="Submit">Submit</button>
            </form>
        `)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/delete', (req, res) => {
    res.send('<h1>Delete page...</h1>');
});
