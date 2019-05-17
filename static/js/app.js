// from data.js
const tableData = data;

// YOUR CODE HERE!
// Use D3 to select the tbody
let tabBody = d3.select("tbody");

// Function to read the data from the Data file
function table(data) {
    tabBody.html("");
    data.forEach((dataRow) => {
    let row = tabBody.append("tr");
    Object.values(dataRow).forEach((val) => {
    let ufoInfo = row.append("td");
    ufoInfo.text(val);
    }
    );
});
}

// Function for the button select using the form to filter a date
function buttonClick() {
    d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");
    let fltrDate = tableData;
    if (date) {
    fltrDate = fltrDate.filter(row => row.datetime === date);
    }
    table(fltrDate);
}

// using D3 to select on my Button click and Display in the table
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);

function resetForm() {
    document.getElementById("form-group").reset();
}
