function firstfunc()
{
    alert ("you have created your first function! yea baby!");
    // this is a comment for java just inputted the functions for firstfunc()


}


function flipcoin()
{

    var coinelement = document.getElementById ("coin");
    var result=Math.floor(Math.random()*2);
    if (result == 1)
        { document.getElementById("coin").innerHTML="Heads";
            
        }
    else 
        {
        document.getElementById("coin").innerHTML="Tails";
}
   
function validate()
{ 
var name = document.getElementById("initstring").value;
var lname = document.getElementById("firstNum").value;
var zipcod = document.getElementById("Zipcode").value;


var fullname= name+lname;
document.getElementById ("inputStatus").innerHTML =fullname;

}
if (fullname.lenght <=2)
{
    document.getElementById("inputStatus").innerHTML ="Name not long enough";

}

if (empnum <100 ) for empNum >=1000)

 {
    document.getElementById ("inputStatus") .innerHTML = "number is not 3 digits";
 }