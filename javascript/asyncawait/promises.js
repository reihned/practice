/**
 * Sample promise code for review
 */

function getStudents(){
    fetch('students.json')
        .then(function (response) {
            return response.json();
        })
        .then(displayStudents);
}

function displayStudents(response_json){
    const element = window.document.getElementById('students');
    let data = response_json.data;
    let students_string = JSON.stringify(data, null, 2);
    element.innerHTML = students_string;
}

export { getStudents, displayStudents };