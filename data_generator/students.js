const faker = require('faker');
const fs = require('fs');

let students = Array.from(
    Array(10), 
    (x, index) => { 
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email(firstName, lastName);
        return {
            "id": index + 1,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        } 
    }
);

// console.log(students);

let students_simulated_api_response = {
    data: students
};

let data = JSON.stringify(students_simulated_api_response, null, 2);
fs.writeFileSync('students.json', data);