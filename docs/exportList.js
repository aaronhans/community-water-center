export function exportList(data) {

//data.forEach( (item) => { console.log(item.textContent) });
console.log(data.length)

//TODO:

// Can you count how many columns and rows, and stitch together accordingly
// Escape any "," in the input

console.log("Input Variable is of type:", typeof(data));
console.log("Length is:", data.length);


const rows = []
       //["Water System Name", "ID", "City", "County", "Zip"];

console.log(typeof(rows));


       for (var i = 0; i < data.length; i++){
        if (i > 0 && i % 5 == 4)
        {
          console.log(data[i].textContent);
          if (i+1){rows.push("\r\n" + data[i].textContent);} // Put a line break right before the next element
        }
        else {
          rows.push(data[i].textContent);

        }




}

var csvContent="application/vnd.ms-excel;charset=us-ascii," + rows;

console.log(csvContent);
console.log(typeof(csvContent));



download("mydata.csv", csvContent);

// var encodedUri = encodeURI(csvContent);
// var link = document.createElement("a");
// link.setAttribute("href", encodedUri);
// link.setAttribute("download", "my_data.csv");
// document.body.appendChild(link); // Required for FF
//

}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
