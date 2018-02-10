class Time {
    static toObject(pDate) {
        var lArray = Time.toArray(pDate);
        return {
            h:lArray[0],
            m:lArray[1],
            s:lArray[2]
        }
    }

    static toString(pDate) {
        var lArray = Time.toArray(pDate);
        return String(lArray[0] + ":" + lArray[1] + ":" + lArray[2]);
    }

    static toArray(pDate) {
        if (pDate == null) pDate = new Date();
        return [Time.addZero(pDate.getHours() - 1), Time.addZero(pDate.getMinutes()), Time.addZero(pDate.getSeconds())];
    }

    static addZero(pNumber) {
        if (pNumber < 10) {pNumber = "0" + pNumber};
        return pNumber;
    }
}