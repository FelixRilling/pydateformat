"use strict";

const slice = require("../index.js");

describe("Start", function () {
    it("Normal case 1", function () {
        expect(slice("Abracadabra", 0)).toBe("A");
    });

    it("Normal case 2", function () {
        expect(slice("Abracadabra", -5)).toBe("d");
    });
});

describe("Start+End", function () {
    it("Normal case 1", function () {
        expect(slice("Abracadabra", 0, 5)).toBe("Abrac");
    });

    it("Negative index 1", function () {
        expect(slice("Abracadabra", 3, -5)).toBe("aca");
    });

    it("Negative index 2", function () {
        expect(slice("Abracadabra", 0, -7)).toBe("Abra");
    });

    it("Negative index 3", function () {
        expect(slice("Abracadabra", -4, -1)).toBe("abr");
    });

    it("Big Index 1", function () {
        expect(slice("Abracadabra", 0, 20)).toBe("Abracadabra");
    });

    it("Big Index 2", function () {
        expect(slice("Abracadabra", -10, 20)).toBe("bracadabra");
    });

    it("Missing arg 1", function () {
        expect(slice("Abracadabra", false, -2)).toBe("Abracadab");
    });

    it("Missing arg 2", function () {
        expect(slice("Abracadabra", 0, false)).toBe("Abracadabra");
    });
});

describe("Arrays", function () {
    it("Normal case 1", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 0, 4)).toEqual(["foo", "bar", "fizz", "buzz"]);
    });

    it("Normal case 2", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 2, 4)).toEqual(["fizz", "buzz"]);
    });

    it("Normal case 3", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 0, 1)).toEqual(["foo"]);
    });
});


describe("Steps", function () {
    it("Normal case 1", function () {
        expect(slice("Abracadabra", 0, 6, 1)).toBe("Abraca");
    });

    it("Normal case 2", function () {
        expect(slice("Abracadabra", 2, 9, 3)).toBe("rab");
    });

    it("Negative index 1", function () {
        expect(slice("Abracadabra", false, false, -3)).toBe("aacb");
    });

    it("Arrays 1", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 1, 4, 2)).toEqual(["bar", "buzz"]);
    });

    it("Arrays 2", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 0, 4, -1)).toEqual(["buzz", "fizz", "bar", "foo"]);
    });

    it("Arrays 3", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 0, 3, -2)).toEqual(["fizz", "foo"]);
    });
});
