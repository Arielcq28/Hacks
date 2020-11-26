function showPassword(btn, id){

    value = document.getElementById(id).type;
    
    if(value !== "text"){
        document.getElementById(id).type = "text";
        document.getElementById(btn).src = "https://img.icons8.com/material/24/000000/invisible--v1.png";
    } else {
        document.getElementById(id).type = "password"
        document.getElementById(btn).src = "https://img.icons8.com/material-rounded/24/000000/visible.png";
    }
    
}