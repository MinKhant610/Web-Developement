/*
JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
*/

const school = [
    {
        subject : 'english',
        student : 12
    },
    {
        subject : 'math',
        student : 16
    }
]

const convert_json_array = JSON.stringify(school) // convert json format
console.log (convert_json_array) // print json file

const conver_js_array = JSON.parse(convert_json_array) // convert json to js array
console.log ('print student: ',conver_js_array[0].student) 

localStorage.setItem('school',convert_json_array) // add to local storage 
console.log (localStorage.getItem('school'))

