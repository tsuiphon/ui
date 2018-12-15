"use strict";
const express = require('express')
const app = express()
app.use('/', express.static('pages'));
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port hoge!'))
