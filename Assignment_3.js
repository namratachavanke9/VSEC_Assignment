function showResult()
{
    var table = document.getElementById("studentTable");

    var name = document.getElementById("studentName").value;
    var phy = Number(document.getElementById("physics").value);
    var chem = Number(document.getElementById("chemistry").value);
    var maths = Number(document.getElementById("maths").value);

    var total = phy + chem + maths;
    var percentage = (total / 300) * 100;

    var row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = phy;
    row.insertCell(2).innerHTML = chem;
    row.insertCell(3).innerHTML = maths;
    row.insertCell(4).innerHTML = total;
    row.insertCell(5).innerHTML = percentage.toFixed(2) + "%";


    // Clear input boxes after submitting
    document.getElementById("studentName").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
    document.getElementById("maths").value = "";
}