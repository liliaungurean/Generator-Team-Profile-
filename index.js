const generateHTML = require('./Output/geneateHTML');

const Manager = require ('./Team/Manager');
const Engineer = require('./Team/Engineer');
const Intern = require('./Team/Intern');

const fs = require('fs');
const inquirer = require ('inquirer');

const teamArray = [];

//input for manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Who is your team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Manager name required');
                    return flase;
                }
            }
        }, 
        {
            type: 'input',
            message: 'Managers ID nummber',
            validate: nameInput => {
                if (inNaN(nameInput)){
                    console.log ('Managers ID number required')
                    return flase;
                } else {
                    return true;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Please enter Managers Email address.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        }, {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your managers office number?',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])

    .then(nanagerInput =>{
        const {name, id, email, officeNumber}= managerInput;
        const manager =  new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
}

const addEmployee = () => {
    console.log ('Adding Employee to the team');
    
    return inquirer.prompt([
        {
            type:'list',
            name: 'role',
            message: 'Choose your emloyees role.',
            choice: ['Engineer', 'Intern']
        }
        {
            type: 'input',
            name: 'name', 
            message: 'Employees name?',
            validate: nameInput => {
                if (nameInput){
                    return true
                } else {
                    console.log('Please enter name');
                    return false
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: 'What is the Employes ID number>',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('employees ID required!')
                    return false; 
                } else {
                    return true;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        }
    ])
}