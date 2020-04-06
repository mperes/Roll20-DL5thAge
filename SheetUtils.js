class SheetUtils {
    static getUID(value) {
        const regexp = /-.{19}(?=_)|-.{19}$/g;
        const valueAsString = String(value);
        const match = valueAsString.match(regexp);
        return (match) ? match.join() : "";
    }
    static toLowerCase(value) {
        if(Array.isArray(value)) {
            const lowerCaseArray = value.map(item => { return item.toLowerCase(); });
            return lowerCaseArray;
        }
        return String(value).toLowerCase();
    }
    static toCapitalCase(value) {
        if(Array.isArray(value)) {
            const capitalCaseArray = value.map(item => { return item[0].toUpperCase() + item.toLowerCase().slice(1); });
            return capitalCaseArray;
        }
        return String(value)[0].toUpperCase() + String(value).toLowerCase().slice(1);
    }
    static getSectionOrder(section, callback) {
        const sectionName = `repeating_${section}`;
        const attributeName = `_reporder_${sectionName}`;
        getAttrs([attributeName], attributes => {
            let values = new Array();
            Object.keys(attributes).some(() => {
                let results = SheetUtils.toLowerCase(attributes[attributeName].replace(/ /g, '').split(','));
                values = values.concat(results);
                return true;
            });
            getSectionIDs(sectionName, ids => {
                const filteredOrder = new Set();
                const order = values.concat(SheetUtils.toLowerCase(ids));
                order.forEach(item => {
                    filteredOrder.add(item);
                });
                callback(Array.from(filteredOrder));
            });
        });
    }
    static deepReadAttribute(attr, callback, defaultValue) {
        if(/^(@{).+}$/.test(String(attr)) === true) { 
            const regExp = /@\{([^@\{\}]+)\}/;
            const reference = regExp.exec(attr)[1];
            var self = this;
            getAttrs([reference], function(v) {
                if(!v[reference]) { 
                    callback(defaultValue);
                } else {
                    self.deepReadAttribute(v[reference], callback, defaultValue);
                }
            });
        }
        else {
            callback(attr); 
        }
    }
}