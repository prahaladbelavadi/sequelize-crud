const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');

const db = new sequelize('codegig', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres'
})

db.authenticate()
    .then(() => {
        console.log('Connected')
    })
    .catch((err) => {
        console.log("err", err)
    })