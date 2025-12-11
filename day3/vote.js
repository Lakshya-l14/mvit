function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var par=document.getElementById("par");
    if(age>18){
        //alert(' eligible');
        par.innerHTML="you are eligile"
    }else{
        //alert('not eligible');
        par.innerHTML="you are still a child🤣"
    }  
}