export function exportList(data) {

//data.forEach( (item) => { console.log(item.textContent) });
console.log(data.length)

// Count how many rows using 'head' class?

let data_arr = Array.prototype.slice.call(data);

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const rows = []
       //["Water System Name", "ID", "City", "County", "Zip"];

       for (var i = 0; i < data_arr.length; i++){
        if (i > 0 && i % 4 == 0)
        {
          console.log(data_arr[i].textContent);//rows.push(data[i].textContent + "\n");
          rows.push(data_arr[i].textContent + "\r\n");
        }
        else {
          rows.push(data_arr[i].textContent);

        }

console.log(rows)



}

var csvContent ="data:text/csv;charset=utf-8," + rows;

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF

link.click();





        //let csvContent = "data:text/csv;charset=utf-8,"
}
