const app = require('./app');
const port = process.env.PORT || 3333;
app.listen(port, (err) => console.log(`Server is listening on port ${port}.`));
