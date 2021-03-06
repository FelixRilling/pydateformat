'use strict';

var lightdash = require('lightdash');
var moment = require('moment');

const formatStringMap = lightdash.mapFromObject({
    "%a": m => m.format("ddd"),
    "%A": m => m.format("dddd"),
    "%w": m => m.format("d"),
    "%d": m => m.format("DD"),
    "%b": m => m.format("MMM"),
    "%B": m => m.format("MMMM"),
    "%m": m => m.format("MM"),
    "%y": m => m.format("YY").padStart(2, "0"),
    "%Y": m => m.format("YYYY").padStart(4, "0"),
    "%H": m => m.format("k"),
    "%I": m => m.format("h"),
    "%p": m => m.format("A"),
    "%M": m => m.format("mm"),
    "%S": m => m.format("ss"),
    "%f": m => m.format("SSSSSS"),
    "%z": m => m.format("ZZ"),
    "%Z": m => m.format("z"),
    "%j": m => m.format("DDDD"),
    "%U": m => m.format("WW"),
    "%W": m => m.format("W"),
    "%c": m => m.format("ddd MMM DD k:mm:ss YYYY"),
    "%x": m => m.format("MM/DD/YYYY"),
    "%X": m => m.format("k:mm:ss"),
    "%%": () => "%"
});
/**
 * Formats a date with a given python format string.
 *
 * @param {MomentInput} date
 * @param {string} formatStr
 * @returns {string}
 */
const pydateformat = (date, formatStr) => {
    const dateMoment = moment.isMoment(date) ? date : moment.utc(date);
    let result = formatStr;
    formatStringMap.forEach((itemFn, itemKey) => {
        if (result.includes(itemKey)) {
            const replaceRegex = new RegExp(itemKey, "g");
            const replaceVal = itemFn(dateMoment);
            result = result.replace(replaceRegex, replaceVal);
        }
    });
    return result;
};

module.exports = pydateformat;
