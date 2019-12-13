let password = require("../../passwordValidation")
let passwordIsValid = password.passwordIsValid
let passwordIsOkay = password.passwordIsOk

describe("passwordIsValid", function() {
    
 
    it("password should be longer than 8 characters", function() {
    expect(function(){passwordIsValid("t@rBi&3")}).toThrow("password should be longer than 8 characters")   
    })

    it("password should have at least one lowercase letter", function() {
    expect(function(){passwordIsValid("T@RBI&333")}).toThrow("password should have at least one lowercase letter")   
       
    })

    it("password should have at least one uppercase letter", function() {
    expect(function(){passwordIsValid("t@rbbi&b3")}).toThrow("password should have at least one uppercase letter")   
        
    })

    it("password should have at least one digit (0-9)", function() {
    expect(function(){passwordIsValid("t@rBi&hgs")}).toThrow("password should have at least one digit (0-9)")   
        
    })

    it("password should have at least special character", function() {
    expect(function(){passwordIsValid("tllrBii3l")}).toThrow("password should have at least special character")   
        
    })

});

 describe("passwordIsOkay", function() {

      
  
    it("password should meet at least three of the conditions", function() {
        expect(passwordIsOkay("tarbielee10")).toBe(true)

    });

});  
   
    
 

