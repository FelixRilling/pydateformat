"use strict";

const formatDate = require("../dist/pydateformat.common.js");

const date = new Date(0);

describe("Main", () => {
    it("Empty", () => {
        expect(formatDate(date, "")).toBe("");
    });

    it("No Formatters", () => {
        expect(formatDate(date, "foo bar")).toBe("foo bar");
    });

    it("Day", () => {
        expect(formatDate(date, "%a %A %w %d")).toBe("Thu Thursday 4 01");
    });

    it("Month", () => {
        expect(formatDate(date, "%b %B %m")).toBe("Jan January 01");
    });

    it("Year", () => {
        expect(formatDate(date, "%y %Y")).toBe("70 1970");
    });

    it("Hour", () => {
        expect(formatDate(date, "%H %I %p")).toBe("24 12 AM");
    });

    it("Minutes, Seconds and Microseconds", () => {
        expect(formatDate(date, "%M %S %f")).toBe("00 00 000000");
    });
});
