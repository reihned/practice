/**
 * Sample promise code for review
 */

function getStudents(){
    return new Promise(
        function(resolve, reject){
            fetch("students.json") // fetch itself is a promise
            .then(function (response) { // so we chain it with then
                resolve(response.json()); // resolve with data
            }).catch(reject); // catch errors and send to reject
        } // function resolve reject
    ); // new Promise
}

function displayStudents(response_json){
    const element = window.document.getElementById('students');
    let data = response_json.data;
    let students_string = JSON.stringify(data, null, 2);
    element.innerHTML = students_string;
}

export {
  getStudents,
  displayStudents
};
