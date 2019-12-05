"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v1_1 = require("./api/v1/v1");
const app = express();
app.disable('x-powered-by');
app.use('/v1', v1_1.routerV1);
app.listen(process.env.PORT || 8091, () => console.log('Server staring....'));
