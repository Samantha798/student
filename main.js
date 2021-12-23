name_student_array = [];

function submit()
{
    var display_student = [];
    for (var j = 1; j <=4; j++)
    {
        var name_of_the_student = document.getElementById("name_student_" +j).value;
        console.log(name_student_1);
        name_student_array.push(name_student_1);
    }

    console.log(name_student_array);
   
    var lenght_student_array = name_student_array.lenght;
    console.log(lenght_student_array);

    for(var k=0; k< lenght_student_array; k++)
{
    display_student.push("<h4>NAME -"+ name_student_array[k] +"</h4>");
    console.log(display_student);
}

console.log(display_student);
document.getElementById("display_name_with_commas").innerHTML = display_student;

var remove_commas = display_student.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_student_array.sort();
    console.log(name_student_array);
    
    var display_student_sorting = [];

    var lenght_student_array = name_student_array.lenght;
    console.log(lenght_student_array);

    for (var k= 0; k<lenght_student_array; k++)
{
    display_student_sorting.push("<h4>NAME -" + name_student_array[k] + "</h4>");
    console.log(display_student_sorting);
}
var remove_commas = display_student_sorting.join(" ");
console.log(remove_commas);

document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update()
 {
      document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array +"</h1>";
     }