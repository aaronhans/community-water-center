export function exportList(data) {

console.log(data.forEach( (item) => {console.log(item.textContent)})); 

//.forEach( (item) => {item.textContent}))




const rows = [
       ["Water System Name", "ID", "City", "County", "Zip"]];

       for (var i = 0; i < data.length; i++)
         rows[i] += ",NewCol" + (i + 1);
       console.log(rows);

     }

// var lineArray = [];
//       data.forEach(function (infoArray, index) {
//           var line = infoArray.join(",");
//           lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
//       });
//
// var csvContent = lineArray.join("\n");
//
// //
// // let csvContent = "data:text/csv;charset=utf-8,"
// //     + rows.map(e => e.join(",")).join("\n");
//
//
// var encodedUri = encodeURI(csvContent);
//      window.open(encodedUri);
//    }





// have the button click call the function?
// on page load
// wait for click
// create and download csv
