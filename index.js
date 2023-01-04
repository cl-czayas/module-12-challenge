const inquirer = require('inquirer')
const db = require('./config/connection')

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database.');
    employeeTracker();
});

function employeeTracker() {
    inquirer.prompt([{
        type: 'list',
        name: 'main',
        message: 'Choose an option.',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Exit'
        ]
    }]).then((answers) => {
        
        }
    )
}