const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const bodyParser = require('body-parser');


module.exports = {
    express,
    config,
    jwt,
    axios,
    bodyParser
}