//import { index } from './listViol.js'

export function exportList() {

const rows = [
    ["Name", "ID", "City", "County", "Zip"],
    ["name", "city2", "more info"]];

var e = "ok";
//querySelectorAll(".span")
alert(e)

let csvContent = "data:text/csv;charset=utf-8,"
         + rows.map(e => e.join(",")).join("\n");


var encodedUri = encodeURI(csvContent);
     window.open(encodedUri);
   }




// have the button click call the function?
// on page load
// wait for click
// create and download csv
