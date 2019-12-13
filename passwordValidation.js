"use strict"

function passwordIsValid(password) {

    // // for (var i = 0; i < password.length; i++){
    // //     if((password.length >= 8) && (password.match(/[a-z]/g)) || (password.match(/[A-Z]/g)) || (password.match(/[0-9]/g)) || (password.match(/[ % & * " ']/g))) {
    // //         return("password valid");
    // //     }else{
    // //         return("password invalid");
    // //     }
    // }

        if (password.length <= 8 ) throw "password should be longer than 8 characters";
        if (/[a-z]/g.test(password)== false) throw "password should have at least one lowercase letter";
        if (/[A-Z]/g.test(password)== false) throw "password should have at least one uppercase letter";
        if (/[0-9]/g.test(password)== false) throw "password should have at least one digit (0-9)";
        if (/[&*"$!@']/g.test(password)== false) throw "password should have at least special character";
        
            return "password IsValid";
          
    // }
    
    // catch(error){
    //     return error;
    // }
}

 console.log(passwordIsValid("t@rBie&10!"));

 function passwordIsOk(password){

    if(( password.length >= 8) && ((password.match(/[0-9]/g)) || (password.match(/[ % & * " ' ]/g)) || (password.match(/[a-z]/g)) || (password.match(/[A-Z]/g)))){
        return true;
    }
    else{
        return false;
    }
}
    
module.exports = {
    passwordIsOk,passwordIsValid
}

console.log(passwordIsOk("t@rBie&10!"));