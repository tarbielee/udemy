function passwordIsValid (password) {
    
 
        if (password == "") throw ("should not be empty");
        if (password.length < 8) throw ("password should at least have eight characters");
        if (password.match(/[a-z]/g) == null) throw("password should at least have one lowercase");
        if (password.match(/[A-Z]/g) == null) throw("password should at least have one uppercase");
        if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/g) == null) throw("password should at least have special characters");
        if (password.match(/[0-9]/g) == null) throw("password should a number from 0-9");
        else{
            return password;
        }  
        
    // }
    // (error){
    //     return error;
    // }
    
}
console.log(passwordIsValid("t@rBie&10!"))

function passwordIsOk(password){

    if((password != "" && password.length >= 8) && ((password.match(/[0-9]/g) == null) || (password.match(/[$&+,:;=?@#|'<>.^*()%!-]+$/g) == null) ||(password.match(/[a-z]/g) == null) || (password.match(/[A-Z]/g) == null))){
        return true;
    }
    else{
        return false;
    }
}
    

// module.exports = {
//     passwordIsValid,
//     passwordIsOk,
// }
