class Tools {
    /**
     * 
     * @param {*} pObject 
     * @param {Function} pFunction
     */
    static applyToArray(pObject, pFunction) {
        if (Array.isArray(pObject)) {
            var lLength = pObject.length;
            for (var i = 0; i < lLength; i++) {
                Tools.applyToArray(pObject[i], pFunction);
            }
        }
        else pFunction(pObject);
    }

    /**
     * 
     * @param {String} pString 
     */
    static stringToArray(pString) {
        return (pString.substring(1, pString.length - 1)).split(",");
    }
}