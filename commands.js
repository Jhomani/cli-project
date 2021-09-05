#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addContainer,
} = require('./index');

// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'module',
    message: 'Module name:'
  },
  {
    type: 'input',
    name: 'name',
    message: 'Container name:'
  },
  {
    type: 'input',
    name: 'pageName',
    message: 'page name display (Spanish):'
  },
];

program
  .version('1.0.0')
  .description('Client Management System')

// Add Command
program
  .command('container')
  .alias('ct')
  .description('create new container')
  .action(() => {
    prompt(questions).then(answers => addContainer(answers));
  });

program.parse(process.argv);
