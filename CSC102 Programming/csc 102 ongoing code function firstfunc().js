function firstfunc()
{
    alert ("you have created your first function! yea baby!");
    // this is a comment for java just inputted the functions for firstfunc()


}


function flipcoin()
{

    var coinelement = document.getElementById ("coin");
    var result = Math.random() <0.5 ? "Heads" : "Tails";

    coinelement.textContent = result;





}


