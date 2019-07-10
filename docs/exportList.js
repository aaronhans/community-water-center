export function exportList(data) {

alert(data);


const rows = [
      ["Water System Name", "ID", "City", "County", "Zip"],
      [data[0], data[1][0],data.dataset['City']]];
//${item[1][0].WATER_SYSTEM_NUMBER}


let csvContent = "data:text/csv;charset=utf-8,"
    + rows.map(e => e.join(",")).join("\n");


var encodedUri = encodeURI(csvContent);
     window.open(encodedUri);
   }





// have the button click call the function?
// on page load
// wait for click
// create and download csv
