const checkCSVHeader = require("../js/lca_copy").checkCSVHeader;

// test("Returns if the dataset is in the correct format", () => {
    
//     let data = [];
//     expect(checkCSVHeader(data)).toBe(true);
// });


var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

describe('Basic Mocha String Test', function () {
    

    it('should return true if the dataset is in the correct format', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [
            ["Indicator", "Metric", "Location", "Score", "Total Score"], 
            ["Basic Education", "Math Skills (out of 500 score)", "United States", "240", "500"], 
            ["", "Reading Skills (out of 500 score)", "United States", "222", "500"]
        ];
        expect(checkCSVHeader(data)).to.be.true;
    }); 
    
    it('should return false if the dataset does in the correct format in the header', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [
            ["Indicator", "Metric", "Location", "Score", "Score"], 
            ["Basic Education", "Math Skills (out of 500 score)", "United States", "240", "500"], 
            ["", "Reading Skills (out of 500 score)", "United States", "222", "500"]
        ];
        expect(checkCSVHeader(data)).to.be.false;
    }); 

    it('should return false if the dataset misses one or more of head fields', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [
            ["Indicator", "Metric", "Location", "Score"], 
            ["Basic Education", "Math Skills (out of 500 score)", "United States", "240", "500"], 
            ["", "Reading Skills (out of 500 score)", "United States", "222", "500"]
        ];
        expect(checkCSVHeader(data)).to.be.false;
    }); 

    it('should return false if the dataset is empty', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [];
        expect(checkCSVHeader(data)).to.be.false;
    }); 
});
