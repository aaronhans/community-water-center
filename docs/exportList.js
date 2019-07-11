export function exportList(data) {

data.forEach( (item) => { console.log(item.textContent) });



const rows = []
       //["Water System Name", "ID", "City", "County", "Zip"];

       for (var i = 0; i < data.length; i++){
        if (rows.length % 5 == 0)
        { rows.push(data[i].textContent + "\n"); }

         else { rows.push(data[i].textContent);}

}




       console.log(rows);

       var csvContent ="data:text/csv;charset=utf-8," + rows;

       // let csvContent = "data:text/csv;charset=utf-8,"
       // + rows.map(e => e.join(",")).join("\n");
       //
       //
       var encodedUri = encodeURI(csvContent);
            window.open(encodedUri);
     }



// foreach style
// const apps = ['WhatsApp', 'Instagram', 'Facebook'];
// const playStore = [];
//
// apps.forEach(function(item){
//   playStore.push(item)
// });
//
// console.log(playStore);

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
