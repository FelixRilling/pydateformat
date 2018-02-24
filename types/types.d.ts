import { Moment } from "moment";
declare type replacerFn = (m: Moment) => string;
declare type replacerMap = Map<string, replacerFn>;
export { replacerFn, replacerMap };
