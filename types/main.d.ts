import { MomentInput } from "moment";
/**
 * Formats a date with a given python format string
 *
 * @param {MomentInput} date
 * @param {string} formatStr
 * @returns {string}
 */
declare const pydateformat: (date: MomentInput, formatStr: string) => string;
export default pydateformat;
