let password = require("../src/password")

describe("Check if password is valid", function() {
    
  
    it("it throws an error when password is an empty string", function() {
        expect(password.passwordIsValid("")).toBe("should not be empty")
    }) 

    it("password should at least have eight characters", function() {
        expect(password.passwordIsValid("sdRayu")).toBe("password should at least have eight characters")
    })

    it("password should at least have one lowerCase", function() {
        expect(password.passwordIsValid("1235")).toBe("password should at least have one lowercase")
    })

//     it("password should at least have one uppercase", function() {
//         expect(password.passwordIsValid("2@tw!edr")).toBe("password should at least have one uppercase")
//     })

//     it("password should at least have one special character", function() {
//         expect(password.passwordIsValid("aA456465W7A4697f")).toBe("password should at least have special characters")
//     })

//     it("password should at least have one number", function() {
//         expect(password.passwordIsValid("zsdawdfasgtsrhA@$")).toBe("password should a number from 0-9")
//     })

// });

//  describe("check Password is okay", function() {

//          let pass = 'a45646@57AS4697f';
  
//     it("password should have at least me one of the required elements", function() {
//         expect(password.passwordIsOk(pass)).toBe(true)
//     });

});  
   
    
 

