export function exportList(data, rowlength) {

//data.forEach( (item) => { console.log(item.textContent) });
console.log(data.length)
console.log(data)

console.log("Input Variable is of type:", typeof(data))
console.log("Length is:", rowlength)
//TODO:

// Escape any "," in the input




const rows = []
       //["Water System Name", "ID", "City", "County", "Zip"];


       for (var i = 0; i < data.length; i++)
       {
         // Check if it's the first in the row
        if (i > 0 && i % rowlength == 0)
        {
          rows.push("\n" + data[i].textContent); // Put a line break right before the next element
        }
        else {
          rows.push(data[i].textContent);

        }

      }


//var csvContent="application/vnd.ms-excel;charset=us-ascii," + rows;
var csvContent = rows;


console.log(csvContent.length)
console.log(typeof(csvContent));

// Iterate through the string and where there is a comma replace with ","
if (csvContent.indexOf(',') > -1)
{ console.log(csvContent.indexOf(','))
}


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
