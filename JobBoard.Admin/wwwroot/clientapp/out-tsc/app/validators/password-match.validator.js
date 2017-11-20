"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordMatchValidator = (function () {
    function PasswordMatchValidator() {
    }
    PasswordMatchValidator.matchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ matchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordMatchValidator;
}());
exports.PasswordMatchValidator = PasswordMatchValidator;
//# sourceMappingURL=password-match.validator.js.map