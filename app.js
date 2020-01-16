`use-strict`

const Metro = require('metro')
const http = require('http')



const express = require('express');
const app = express();

app.use(
    Metro.
    Metro.processRequest.bind(metroBundlerServer),
);

app.listen(8081);
