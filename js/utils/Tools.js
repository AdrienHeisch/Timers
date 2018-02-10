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
}