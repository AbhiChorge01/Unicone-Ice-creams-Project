function LoginValidation(){
    var Lemail=document.getElementById("fillemail").value;
    var Latposition=Lemail.indexOf("@");
    var Ldotposition=Lemail.lastIndexOf(".");
    var Lpass=document.getElementById("fillpass").value;

    if(Lemail==""){
       document.getElementById("spnemail").innerHTML="Email missing";
    }
    else if(Latposition<1 || Ldotposition<=Latposition+2 || Ldotposition+2>=Lemail.length){
       document.getElementById("spnemail").innerHTML="Enter valid email id";
    }
    else{
       document.getElementById("spnemail").innerHTML=" ";
    }

    if(Lpass==""){
       document.getElementById("spnpass").innerHTML="Enter valid passward!!!";
    }
    else{
       document.getElementById("spnpass").innerHTML=" ";
    }
}

function SignupValidation(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var address=document.getElementById("address").value;
    var contact=document.getElementById("contact").value;
    var emailid=document.getElementById("emailid").value;
    var passward=document.getElementById("passward").value;
    var confpass=document.getElementById("confpass").value;
    var atposition=emailid.indexOf("@");
    var dotposition=emailid.lastIndexOf(".");

    if(fname==""){
        document.getElementById("spnfname").innerHTML="Enter First Name";
    }
    else{
        document.getElementById("spnfname").innerHTML="";  
    }

    if(lname==""){
        document.getElementById("spnlname").innerHTML="Enter Last Name";
    }
    else{
        document.getElementById("spnlname").innerHTML="";  
    }

    if(address==""){
        document.getElementById("spnaddress").innerHTML="Enter Address";
    }
    else{
        document.getElementById("spnaddress").innerHTML="";
    }

    if(contact==""){
        document.getElementById("spncontact").innerHTML="Enter Phone number";
    }
    else if(isNaN(contact)){
        document.getElementById("spncontact").innerHTML="Phone number cannot be text"
    }
    else{
        document.getElementById("spncontact").innerHTML="";
    }

    if(emailid==""){
        document.getElementById("spnemailid").innerHTML="Email missing";
    }
    else if(atposition<1 || dotposition<=atposition+2 || dotposition+2>=emailid.length){
        document.getElementById("spnemailid").innerHTML="Enter valid email id";
    }
    else{
        document.getElementById("spnemailid").innerHTML=" ";
    }

    if(passward==""){
        document.getElementById("spnpassward").innerHTML="Enter valid passward!!!";
    }
    else{
        document.getElementById("spnpassward").innerHTML=" ";
    }

    if(confpass==""){
        document.getElementById("spnconfpass").innerHTML="Enter confirm passward";
    }
    else if(confpass!=passward){
        document.getElementById("spnconfpass").innerHTML="Passward is not matching";
    }
    else{
        document.getElementById("spnconfpass").innerHTML=" ";
    }
}