"use strict";
class Contacts {
    get userName() {
        return $('[name="email"]');
    }
    get next() {
        return $('[name="submit"]');
    }
    get password() {
        return $('[name="passwd"]');
    }
    get signin() {
        return $('#idSIButton9');
    }
    get passwordError() {
        return $('#passwordError');
    }
    get userError() {
        return $('#usernameError');
    }
    get logout() {
        return $('[data-cy="logoutMenu"]');
    }
    clickNextButton() {
        this.next.click();
    }
}
const contact = new Contacts();
module.exports = contact;
