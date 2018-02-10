class Cookie {
    static write(pName, pValue, pExp = 2147483647) {
        var lDate = new Date();
        lDate.setTime(lDate.getTime() + (pExp));
        var lExpires = "expires="+ d.toUTCString();
        document.cookie = pName + "=" + pValue + ";" + lExpires + ";path=/";
    }

    static read(pName) {
        var lName = pName + "=";
        return Cookie.getCookie(pName).substring(lName.length, lCookie.length);
    }

    static getCookie(pName) {
        var lDecodedCookie = decodeURIComponent(document.cookie);
        var lCookies = lDecodedCookie.split(';');
        var lCookie;
        var lNCookies = lCookies.length;
        for(var i = 0; i < lNCookies; i++) {
            lCookie = lCookies[i];
            while (lCookie.charAt(0) == ' ') {
                lCookie = lCookie.substring(1);
            }
            if (lCookie.indexOf(lName) == 0) {
                return lCookie;
            }
        }
        throw new Error('There is no cookie with this name :' + pName);
    }
}