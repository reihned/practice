/**
 * Sample async await code for review
 */

async function getStudents() { // async = return new promise
    // first fetch the student data
    let response = await fetch("students.json");
    // then return the data as a javascript object
    let response_json = response.json();
    return response_json; // here return is similar to resolve
}

function displayStudents(response_json) {
    const element = window.document.getElementById("students");
    let data = response_json.data;
    let students_string = JSON.stringify(data, null, 2);
    element.innerHTML = students_string;
}

export {
    getStudents,
    displayStudents
};
