export function exportList(data) {

//data.forEach( (item) => { console.log(item.textContent) });
console.log(data.length)

// Count how many rows using 'head' class?

let data_arr = Array.prototype.slice.call(data);


const rows = []
       //["Water System Name", "ID", "City", "County", "Zip"];

       for (var i = 0; i < data.length; i++){

          //rows.push(data[i].textContent + "\n");
          rows.push(data_arr[i].textContent);



}

var csvContent ="data:text/csv;charset=utf-8," + rows;

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF

link.click();





}
