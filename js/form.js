function fncValidate()  /* here 'fncvalidate' is the name of the function in javascript*/
{
    var fn=document.forml.fname.value;      /*here formal is the name of the html form and 'fn' is declared as a variable to store the variable*/
    var ln=document.forml.lname.value; 
    var Dob=document.forml.dob.value;
    var stat=document.forml.State.value
    var cit=document.forml.City.value;
    var mob = document.forml.Phone.value;
    var emal=document.forml.Email.value;
    var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pass1=document.forml.Password.value;    /*here 'pass1' is declared as a variable to store the value obtained from the text field named 'Password' */   
    var pass2=document.forml.CnfPassword.value;/*here 'pass2' is declared as a variable to store the value obtained from the text field named 'CnfPassword' */
    var patt = /[^a-z]/i;       /*here 'patt' is declared as a variable to allow entry only a-z using regular expression */
    var fname= patt.test(fn);
    var lname=patt.test(ln);   /*here fname is declared to validate the value obtained */
    if(fn == "")        /*Here it is used to check empty text field named as "fname" */
    {
        alert('Please input FirstName');    /*this is a pop up box to alert a message,if condition is false*/
        return false;
    }
    if(fn == null || fname == true)
    {
        alert("Enter only Alphabet for FirstNmae");
    }
    if(ln == "")        /*Here it is used to check empty text field named as "fname" */
    {
        alert('Please input lastName');    /*this is a pop up box to alert a message,if condition is false*/
        return false;
    }
    if(ln == null || lname == true)
    {
        alert("Enter only Alphabet for LastName");
    }
    if(Dob == ""){
        alert('Please Select DOB');
        return false;
    }
    if(stat==""){
        alert('Please Select a State');
        return false;
    }
    if(cit == ""){
        alert('Please select city');
        return false;
    }
    if(/^\d{10}$/.test(mob)){
        return true;
    }
    else{
        alert("Invalid Mobile Number");
        return false;
    }
    /*
    if(reg.test(emal) == false){
        alert('Please Enter Email');
        return false;
    }
    else{
        return true;
    }*/
}
function check(){
    var remember = document.getElementById('click');
    if (remember.checked){
        alert("checked") ;
    }else{
        alert("You didn't check it! Let me check it for you.")
    }
}