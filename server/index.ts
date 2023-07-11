import express from 'express';
import path from 'path';
const app = express();
const port = 8080;

const buildPath = path.normalize(path.join(__dirname, '../../client/build'));
app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});