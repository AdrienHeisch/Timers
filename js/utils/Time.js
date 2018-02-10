class Time {
    /**
     * 
     * @param {Date} pDate 
     */
    static toObject(pDate) {
        var lArray = Time.toArray(pDate);
        return {
            h:lArray[0],
            m:lArray[1],
            s:lArray[2]
        }
    }

    /**
     * 
     * @param {Date} pDate 
     */
    static toString(pDate) {
        var lArray = Time.toArray(pDate);
        return String(lArray[0] + ":" + lArray[1] + ":" + lArray[2]);
    }

    /**
     * 
     * @param {Date} pDate 
     */
    static toArray(pDate) {
        if (pDate == null) pDate = new Date();
        return [Time.addZero(pDate.getHours() - 1), Time.addZero(pDate.getMinutes()), Time.addZero(pDate.getSeconds())];
    }

    /**
     * 
     * @param {Number} pNumber 
     */
    static addZero(pNumber) {
        var lString = String(pNumber);
        if (pNumber < 10) {lString = "0" + lString};
        return lString;
    }

    /**
     * 
     * @param {String} pString
     */
    static strToMs(pString) {
        var lArray = pString.split(":");
        var lLength = lArray.length;
        var lMs = 0;
        lMs += lArray[0] * 3600000;
        if (lLength >= 2) {
            lMs += lArray[1] * 60000;
            if (lLength >= 3) {
                lMs += lArray[2] * 1000;
                if (lLength >= 3) lMs += lArray[3];
            }
        }
        return lMs;
    }
}