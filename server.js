const express = require('express');
const app = express();
const port = 5004;

app.use('/', express.static(__dirname));

app.listen(port, () => console.log(`Preview app listening on port ${port}!`))