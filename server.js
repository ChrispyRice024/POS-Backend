const inquirer = import('inquirer');
const express = require('express');
const Models = require('./models');
const routes = require('./controllers');
const Sequelize = require('./config/connection');
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', routes)

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {console.log('running at localhost:3001')})
})