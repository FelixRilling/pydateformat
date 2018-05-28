import { Moment } from "moment";

type replacerFn = (m: Moment) => string;
type replacerMap = Map<string, replacerFn>;

export { replacerFn, replacerMap };
