const app = require('express')();
const express = require('express');
const loggerMiddleware = require('volleyball');
const bodyParser = require('body-parser');


// have middleware (logging, body-parser)
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// be able to access routes
app.use(require('./routes'))


// have error handling middleware
app.use((err, req, res, next) => { // get here by invoking next (in a preceding middleware function) with an error
	console.error(err)
	req.status(err.status || 500).send(err.message || "Internal Error")
})






// const router = require('express').Router()
// app vs Router??
	// Router is a mini app

