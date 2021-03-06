// from data.js
//var tableData = data;

// YOUR CODE HERE!
// Get input
//let dateTime = document.getElementById("datetime").value;
//console.log("print",dateTime);
let filterbutton = document.getElementById("filter-btn");

function handleClick(){
    let tablefilter = document.getElementById("tablefilter");
    tablefilter.innerHTML = "";
    let date_Time = document.getElementById("datetime").value;
    console.log("data =",date_Time);

   let filter = data.filter(date => date.datetime == date_Time);
    console.log("filter",filter);  
   

    for(let x = 0;x<filter.length;x++){
        console.log("filter",filter[x]);  
        tablefilter.innerHTML +=
        "<tr> " +
        "<td>" + filter[x].datetime + "</td>" +
        "<td>" + filter[x].city  + "</td>" +
        "<td>" + filter[x].state + "</td>" +
        "<td>" + filter[x].country + "</td>" +
        "<td>" + filter[x].shape + "</td>" +
        "<td>" + filter[x].duration + "</td>" +
        "<td>" + filter[x].comments + "</td>" +
        "</tr>";

    }


}
// set event listeners
filterbutton.addEventListener("click",handleClick)

