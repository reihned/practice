/**
 * Sample promise code for review
 */

function getStudents(){
    return new Promise(
        function(resolve, reject){ // promise function being run
            // first fetch the student data
            fetch("students.json") // fetch itself is a promise
                .then(function (response) { 
                    // then resolve with data
                    resolve(
                        response.json()  // .json() translates the text data to a javascript object
                    ); 
                })
                // .then(resolve)
                .catch(reject); // catch errors and send to reject
        } 
    ); 
}

function displayStudents(response_json){
    // response_json = response.json();
    let data = response_json.data;
    const element = window.document.getElementById('students');
    let students_string = JSON.stringify(data, null, 2);
    element.innerHTML = students_string;
}

export {
  getStudents,
  displayStudents
};
