const determinant = require("../determinant");
const {describe} = require('mocha');
const assert = require('assert');

const m1 = [ [1, 3], [2,5]];
const sol1 = -1;
const m2 = [ [2,5,3], [1,-2,-1], [1, 3, 4]];
const sol2 = -20;
const m3 = [ [4,3,2,2], [0,1,0,-2], [1, -1,3, 3],[2, 3,1, 1]];
const sol3 = 30;

console.log("m1 = ",m1);
console.log("m2 = ",m2);
console.log("m3 = ",m3);

describe('Testing the determinant function:', function() {
    it(`Determinant of m1 should be ${sol1}`, function() {
        assert(determinant(m1) === sol1);
    });
    it(`Determinant of m2 should be ${sol2}`, function() {
        assert(determinant(m2) === sol2);
    });
    it(`Determinant of m3 should be ${sol3}`, function() {
        assert(determinant(m3) === sol3);
    });
});