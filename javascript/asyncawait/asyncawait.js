/**
 * Sample async await code for review
 */

async function getStudents() {
    let response = await fetch("students.json");
    return response.json();
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
