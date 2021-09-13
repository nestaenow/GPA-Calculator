//global declaration of arrays
var cv = document.getElementsByClassName('cv');
var gp = document.getElementsByClassName('gp');

function calculator(){
    var CV = 0, sum = 0, product = 0, temp = 0;

    for (i = 0; i < cv.length; i++) {
        temp = cv[i].value * 1;
        CV += temp;
    }

    for(i = 0; i < cv.length; i++){
        product = cv[i].value * gp[i].value;
        sum += product;
    }

    document.write(sum + ', ');
    document.write(CV);
}

function addCourse(tableID) {
    // Get a reference to the table
    var tableRef = document.getElementById(tableID);

    // Insert a course at the bottom of the table
    var newCourse = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0, 1, and 2
    var CN = newCourse.insertCell(0);
    var CV = newCourse.insertCell(1);
    var GP = newCourse.insertCell(2);

    // Append a text node to the cell
    // for(index = 1; index < cv.length; index++){
    //     var count = Number(index);
    count = 1;
    if(count < cv.length){
        var newText = document.createTextNode(count);
        CN.appendChild(newText);
        count++;
    }
    // }

    var text1 = document.createElement('input');
    text1.type = 'text';
    text1.name = 'creditValue';
    text1.className = 'cv';
    CV.appendChild(text1);

    var text2 = document.createElement('input');
    text2.type = 'text';
    text2.name = 'gradePoint';
    text2.className = 'gp';
    GP.appendChild(text2);
}