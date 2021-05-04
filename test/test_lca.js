const checkCSVHeaderSocial = require("../js/testing_copies/lca_copy").checkCSVHeaderSocial;
const checkCSVHeaderEconomic = require("../js/testing_copies/lca_copy").checkCSVHeaderEconomic;
const checkCSVHeaderEnvironmental = require("../js/testing_copies/lca_copy").checkCSVHeaderEnvironmental;
const createPDF = require("../js/testing_copies/lca_copy").createPDF;
const createResultsFromCSVTableSocial = require("../js/testing_copies/lca_copy").createResultsFromCSVTableSocial;
const createResultsFromCSVTableEconomic = require("../js/testing_copies/lca_copy").createResultsFromCSVTableEconomic;
const createResultsFromCSVTableEnvironmental = require("../js/testing_copies/lca_copy").createResultsFromCSVTableEnvironmental;
const createResultsFromCustomTableSocial = require("../js/testing_copies/lca_copy").createResultsFromCustomTableSocial;
const createResultsFromCustomTableEconomic = require("../js/testing_copies/lca_copy").createResultsFromCustomTableEconomic;
const createResultsFromCustomTableEnvironmental = require("../js/testing_copies/lca_copy").createResultsFromCustomTableEnvironmental;


let assert = require('assert');
let expect = require('chai').expect;
let should = require('chai').should();

describe.skip('testing the CSV header format Social', function () {
    

    it('should return true if the dataset is in the correct format', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [
            ["Indicator", "Metric", "Location", "Score", "Total Score"], 
            ["Basic Education", "Math Skills (out of 500 score)", "United States", "240", "500"], 
            ["", "Reading Skills (out of 500 score)", "United States", "222", "500"]
        ];
        expect(checkCSVHeaderSocial(data)).to.be.true;
    }); 
    
    it('should return false if the dataset does in the correct format in the header', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [
            ["Indicator", "Metric", "Location", "Score", "Score"], 
            ["Basic Education", "Math Skills (out of 500 score)", "United States", "240", "500"], 
            ["", "Reading Skills (out of 500 score)", "United States", "222", "500"]
        ];
        expect(checkCSVHeaderSocial(data)).to.be.false;
    }); 

    it('should return false if the dataset misses one or more of head fields', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [
            ["Indicator", "Metric", "Location", "Score"], 
            ["Basic Education", "Math Skills (out of 500 score)", "United States", "240", "500"], 
            ["", "Reading Skills (out of 500 score)", "United States", "222", "500"]
        ];
        expect(checkCSVHeaderSocial(data)).to.be.false;
    }); 

    it('should return false if the dataset is empty', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let data = [];
        expect(checkCSVHeaderSocial(data)).to.be.false;
    }); 
});

describe.skip('testing the CSV header format Economic', function () {
    

  it('should return true if the dataset is in the correct format', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
          ["Indicator", "Metric", "Location", "Mass", "Cost"], 
          ["Cup", "Example", "", "USA", "10", "10"], 
          ["", "Example", "", "USA", "10", "10"]
      ];
      let type = 1;
      expect(checkCSVHeaderEconomic(data,type)).to.be.true;
  });
  
  it('should return false if the dataset does in the correct format in the header', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [         
          ["Indicator", "Metric", "Location", "Mass", "Mass"], 
          ["Cup", "Example", "", "USA", "10", "10"], 
          ["", "Example", "", "USA", "10", "10"]
      ];
      let type = 1
      expect(checkCSVHeaderEconomic(data,type)).to.be.false;
  }); 

  it('should return false if the dataset misses one or more of head fields', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
          ["Indicator", "Metric", "Location", "Mass",], 
          ["Cup", "Example", "", "USA", "10", "10"], 
          ["", "Example", "", "USA", "10", "10"]
      ];
      let type = 1;
      expect(checkCSVHeaderEconomic(data,type)).to.be.false;
  }); 

  it('should return false if the dataset is empty', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [];
      let type = 1;
      expect(checkCSVHeaderEconomic(data,type)).to.be.false;
  }); 
});

describe.skip('testing the CSV header format Environmental - Type 1', function () {
    

  it('should return true if the dataset is in the correct format', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
        ["Indicator", "Metric", "Location", "Mass", "Emission Factor"], 
        ["Pup Example", "", "USA", "10", "10"], 
        ["", "", "USA", "10", "10"], 
      ];
      let type = 1;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.true;
  }); 
  
  it('should return false if the dataset is not in the correct format in the header', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
        ["Indicator", "Metric", "Location", "Mass", "Mass"], 
        ["Pup Example", "", "USA", "10", "10"], 
        ["", "", "USA", "10", "10"]
      ];
      let type = 1;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.false;
  }); 

  it('should return false if the dataset misses one or more of head fields', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
        ["Indicator", "Metric", "Location", "Mass",], 
        ["Pup Example", "", "USA", "10", "10"], 
        ["", "", "USA", "10", "10"]
      ];
      let type = 1;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.false;
  }); 

  it('should return false if the dataset is empty', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [];
      let type = 1;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.false;
  }); 


});

describe.skip('testing the CSV header format Environmental - Type 3', function () {
    

  it('should return true if the dataset is in the correct format', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
        ["Indicator", "Metric", "Location", "Mass", "Emission Factor", "Distance"], 
        ["Pup Example", "", "USA", "10", "10", "10"], 
        ["", "", "USA", "10", "10", "10"], 
      ];
      let type = 3;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.true;
  }); 
  
  it('should return false if the dataset is not in the correct format in the header', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
        ["Indicator", "Metric", "Location", "Mass", "Emission Factor", "Emission Factor"], 
        ["Pup Example", "", "USA", "10", "10", "10"], 
        ["", "", "USA", "10", "10", "10"],
      ];
      let type = 3;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.false;
  }); 

  it('should return false if the dataset misses one or more of head fields', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [
        ["Indicator", "Metric", "Location", "Mass", "Emission Factor"], 
        ["Pup Example", "", "USA", "10", "10", "10"], 
        ["", "", "USA", "10", "10", "10"],
      ];
      let type = 3;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.false;
  }); 

  it('should return false if the dataset is empty', function () {
      // assert.strictEqual(checkCSVHeader(data),true);
      let data = [];
      let type = 3;
      expect(checkCSVHeaderEnvironmental(data,type)).to.be.false;
  }); 


});

describe.skip('testing the creation of pdf', function () {
    

    it('should create a pdf if the values are correct', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let canvasImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwoAAAFyCAYAAABV1i2kAAAS1klEQVR4nO3dzVXj2rqGUYdw2zeL06dBDjeC6iyHAWmQBnEQh9PwbRyJWsiSLPMV2H495x4auwD/ScJr6ZEN7HYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA3evxefd6fL2T5fnam+vhHXfPu+Pu9U6W52tvrlty3O2ej7vd650sz9feXlXH4+75eNy93snyfO3tBcAt+u8B+PWnqW3L67U318P77wH4vfz3eu3NdUuGA/DjnSyv195eVcOodbyT5fXa2wuAWxQQCq21Q2vtZebzT621436//7Pb7Xb7/f6jtXZsrb1v3TzD5U+W8TZ/2n6//9NaO/7GfW0SEAqX7tOf2t/9vp1+r/6EhFAY9tWX5/q/eI70239uv7TWni69zZRQmD5Ptq7/lvH25sY3ACaCQ2HmchdPSL8ZBXNubiINCYVL9ulvhMJvEArLhMLi9j601t66j9+2bustl7u58Q2AieBQ6Cf/uTPHkzNlswcCaweJwxmzl+Fyb8PH44HFW3fbL9PbXLrf6Zm77uPD8PHL5Prv/bq21t67r72due1Dty1eNr3S8gCh0G3Lz+05fA99OWicO4icO/O6ss8+9+3cKwoL37Nn9/PyrnucUFh6jp17/kzGikObfz5v2953HgpLkdTvgw3f26vj7WRbXz4eAfDDHiQUho/7fx/GCX+c7BZue+0tKU/9Af3kPj92u78HMd3EuHi//XoMBybv04OgyTqMk/RTfwC59baH/4+P5X1uG554jFA42UdbQmFuG6/ts7W3Hs09hi37eX3XPUYonHmOrT5/Vl5RuHx733koDNv2Y26bn9ueM1+b3SeTbX35eATAD3vAUFg4A7l0G3PvZz90Xx/PNI4T3MmZ4WGyfVu734WvnRxMzq3f5ADy5CB27bbHoOnXaVVIKCzt0+l2HC9/LhSWtvHaPlsKhYXHcBgOsM6+qrG862JCYXbZ7RZfXfjcdkv7YkMoXL69A0JhWOfpqwZjDC9uz3FfnRtv+699azwC4Ic9cCjMLCdvKZge9C/dx/TjfhKdhsLc/S69V3fmbOnbzPUvDoV+/YbLfCyt4xchobDydrLZg5rvhMK5fbYUCnO3NX4PCYX1VxTOPbfPPX+Ewrpx23Rj6uz2HPfVufF27hXTi8YjAH7Y44bCpjNWG0LhfVzm7rN/fGv3uyUUZt7G9O1XFGYe/6b3XaeHwtyB4Hj572zjtX3mFYUfC4XV59ja80cofNnWL3MH7JPxbO2teGfH25lQuGw8AuCHPWAoTK8zPUs2uY3Vs8/9S+WTA/b3/ra7yXPxfif/fmt/z2TPvq2ie//waigs3fbw75e1dTwRHgrdPvrynvTJD2SOb714O7eN1/ZZ8WcUhMLfbTr3Mwonz7Etzx+hsL69++/Fte05XvfceDuz7y4bjwD4YTmhMH1Z+30tFMaPu+UkNGYu8+Xy44HgcLmX/dffevT5W2mmk97S/XbX/XzPdX/53e7LZPz5GNqGM80rt/3ULnk/cEgoLO3T6WX2+/3HsEx/YPM4Ewqz23hpn00ey6W/9Ugo/N2+537r0Ut32dXnzyQIj6XtHRAKM9vyy7qf+97eMt72z5eLxyMAflhAKNySSw4kbkG79NcQBoTCo0oIhXuSEgq/6eLxCIAfJhT+qXsKhe7s+PbHKhTullD4XULhMt8ajwD4YUKBSwiFuyUUfpdQAOD+CQUuIRTullD4XUIBgPv3enweYuEeludrb66Hd9w9D7FwD8vztTfXLTnuds9DLNzD8nzt7VV1PO6er35qZfvyfO3tBQAAAAAAAKwaf7/wtR8HAABwI7pf+SUUAACAz79aePCKAgAAcEIoAAAAJ4QCAABwQigAAAAnZkLhfzcu/7ngshaLxWK5n8X4brFYLJnLZQqvKPznG9cB4PZdPpkAkEcoADAhFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCUCAWATEIBgBKhAJBJKABQIhQAMgkFAEqEAkAmoQBAiVAAyCQUACgRCgCZhAIAJUIBIJNQAKBEKABkEgoAlAgFgExCAYASoQCQSSgAUCIUADIJBQBKhAJAJqEAQIlQAMgkFAAoEQoAmYQCACVCASCTUACgRCgAZBIKAJQIBYBMQgGAEqEAkEkoAFAiFAAyCQUASoQCQCahAECJUADIJBQAKBEKAJmEAgAlQgEgk1AAoEQoAGQSCgCPrrV2aK0dh+XpwqsLBYBMQgHgkbXW3ltr78O/31prhwtvQigAZBIKAI+stXbc7/d/lj7eQCgAZBIKAI+qtfY0fbvR8DaklwtuRigAZBIKAI9qv9//EQoALBAKAI/qzCsKzxuX/+x2u/+zWCwWi8VisVgsd7FsOxH0D35GwRkngEzGd4BHtt/vP4q/9chEApDJ+A7w6Lq/ofCdv6NgIgHIZHwHoMREApDJ+A5AiYkEIJPxHYASEwlAJuM7ACUmEoBMxncASkwkAJmM7wCUmEgAMhnfASj5n2s/AAB+hPEdAAAAALiC1trT5I/7XfpXwP/FY+jv/zh+fr/f/+k/vvQ29/v9n+/cf+EPHV7y+J7Gx1hZT+AxLIxR79d+XN+xNj6bD8wHwI0YB6R+AG2tvf1mLLTWDq21t8n9H/vH983bvXRieJl87n2/339857433qeJAdhsbkwbxs+XpevcqqXx2XxgPgBuyHRQ7j8/DqqttZelM1jjIN4t08F19WxM92rG08z1+vs9TC+78vGxtfY+Droz63JyBm7usc8N1kvrs7Qd1h5zPzH067m0r4DHthAK7621t+6kz0c/bvXjUjcOjuPQ23TMWrve8PlvjflL4/PkuuYD8wFwK/qB6czljjPR8DmwTW+v+/jQhggZrzd3++PENh2Yh699Ds4bJoaT+xuu/9Z9/n3ufhYmvC9nkJbWZ207bJ0YnEECzlk4uP4yhvTj2NyYNRl7Pna7v+Ps2lhaHfOXxufpOpoPzAfAjZgOWkuXWbrO2vUXzr4c5gbl4WvTVy1eprezZZDtH0s/6I4DfFs4QzO5703vjR3XZ207mBiAf2VhnHrb7WYP9ufGxC9jVn+gPhygv2253qVj/tr4vLCe5gPzAXAL1gbr7jLTl1E/B7rJy6QnA/rSpLam/7mJrRPD0sDdvRIyXm72Pab9Y+9u9zNqzq3P0nYwMQD/ytp4PQ2FuTFlLQbGr61db3I/m8f8c+PzGvMBwBX1E8DM51+2nKUazQzUZ99fOdzHyWDdhrMz/+IM0vDv92GZDZXpRNC6l9uH7bFpfc49LhMD8F2XhMLCmHhoC68oTL82d72Zx7NpzD83PnefMx+YD4Bbcu63Hk0HrO79o0/D4Hnorjf3ftWXpfvpLrc4KE/vv79s+/tKR/+e1Pf+NqY/W7HyUveXxzCu68x7Uk/WZ8N2mH3MJgbgEpeEwnD5Q1v5WYNxvLzgZxS+Peavjc/TdTQfmA+AGzLzMulh8vWP7msv/QDZht8mMS5zP2jXX3fpMUwud3ImaBw0u0njOJ0Y+suOg3o3MTxN12vm/qc/vPb5m0HOrc/adlh6zP3EMF1PgKlLQ2G8znRc6kNhy9g9Gc++PeYvjc9z62k+MB8A/Jq28GvwAB5Nd9D7Y39A7JaZDwD41J3BechJEaD3yKFgPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDL/T+pDPHwjSyoMQAAAABJRU5ErkJggg==";
        let LifeExpectancyTableImg; // This should be null for the time beeing base ont the desired specs
        let equation_image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4RD0RXhpZgAATU0AKgAAAAgABAE7AAIAAAAOAAAISodpAAQAAAABAAAIWJydAAEAAAAcAAAQ0OocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFtaW4gTWlya291ZWkAAAWQAwACAAAAFAAAEKaQBAACAAAAFAAAELqSkQACAAAAAzY3AACSkgACAAAAAzY3AADqHAAHAAAIDAAACJoAAAAAHOoAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMDIwOjEyOjA5IDExOjEwOjQzADIwMjA6MTI6MDkgMTE6MTA6NDMAAABBAG0AaQBuACAATQBpAHIAawBvAHUAZQBpAAAA/+ELIGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iLz48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+PHhtcDpDcmVhdGVEYXRlPjIwMjAtMTItMDlUMTE6MTA6NDMuNjczPC94bXA6Q3JlYXRlRGF0ZT48L3JkZjpEZXNjcmlwdGlvbj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+PGRjOmNyZWF0b3I+PHJkZjpTZXEgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpPkFtaW4gTWlya291ZWk8L3JkZjpsaT48L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgAUQD4AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+kaKKKACiiigAooooAKKK5D4lr4rj8JyXvge/a2v7QmV4RBHKbiMDlRvU4I6jHXpSbsrsaV3Y6+ivPPAt/P458LwarZeNNbST7lzB5ViTDIOq/8AHt07g9wa6JvDmrY+XxprYPvBYn/23qmmnZkp3R0NGRnHeuC1XRfiBplzDf6P4tbV7aCRXn027sbeN50B+ZVkRBgkdOnPejxDa/b/ABJJrMNtcT22n6HLIFSJj9qaQgrEPXAiyVH94Z68y9r+v5X/ABKSu7f1vY70EEZByPaiuJ0/XLTwT4O0ewnsL6TydMaXbHEqtiJV35VmBBJbOCB1x14rp9J1aPV47h4reeAQTmEidQCxAByACeOcc4OQciras2kSnon3L9FFMmR5IJEikMTspCyKAShx1weOPepGPorxzwxrvig+Pr7wf428V6haaip8ywmtbazSO7j9g0Dc4GevYjqOfQ/+Ec1T/oc9c/782P8A8jUdEw62OgoJx1rktQ8MeKHt2GlePtQgmx8pudPtJV/ELEp/Wsm8h8RX3w11PQvEqi81sn7L59vFlJ1lbakwVQMABjkYGChPvQPqehZGcZGcZpa4bR4LbQ/FniC/uILpY7W0trUXMkJ/f7QXJDdGJMgXA6bcccV2VncS3MBee1ltWDEeXKVJwO/ykjmmST0UUUhhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeMeJrS4+EXj4eLtIiZvDerSCPVbWMcQOT/AKwDtySR75HcV7DZ3cF/ZQ3dnKs1vOgkjkQ5DKRkEVh+MJIb3S30AWsd9dapG0SW8n3VT+KV8chVyDnqTgDk1c8L+HbXwp4Zs9FsGkeG1TaHkbLMSck+2SScDgUR+Gz6bf15f8DoEviv95rUdOlFFAFG90ex1CYS3cRkcIIwd7D5d4fHB7lVz64x0qSw06302KWO0DhZZnnffIz/ADuxZiMk4GSeBxVqigAoqneavp2nXFvBfX1vBNcuI4IpJAGkYnACjqauUAcL8UfAr+LdFjvdJb7Pr+lt59hOpwxI52Z98cehx71P8M/HSeNfDpN2vkaxYnydQtiNpRxxuwegOD9Dkdq627u4LCzluryVYYIULySOcBQOprk/C3ha2HirUfGbWTWN1qiBI7fJUiMfxuvTe2ASO3HfNEdLrp+v/B/4IS1SfX9P+AdlRRTZHWKNpJCFRQWYnsBQBBqFhb6nYyWl4paGTGQrFSCDkEEcgggHNSwQrbwrFGXKr3dy7H6k5JptndwX9lDd2cglgnQSRuBwykZB/KnTzw20DzXMqQxIMtJIwVVHqSelG24bklYWs6xq1hqEEOn6XaXMMrrGJLi+aF2c5OEQRtuAAyTkdD6VqWGoWmq2KXmm3Md1bSZ2SxNuVsEg4PfkGsPW4dSTxlot/a2Mt9ZwwXEUixOi+VI+za53EcYVhkZIz0o6oOhYm8QXT3etW2m6elzLpcUZBefYssrKW2Z2nbhdpzz97pU+jeIbXV7HTJD/AKPdahZLeJascsqELnnpwWArD0PTdWgu/ENheWk0f9oXrTjUQ6eW0bRouFGdwYbSACMDA5q1p15eR+Jtbt7aTz7DTbWGK3sY1RcS7SxUHr90xjk457ULbXsvy1/Gwen9bCr4qvo/EN1pF5o4iuDALiwCXIY3K7ipDcAIQcE8sAD1NdBZSXMtjC9/ClvcsgMsUcm9UbuA2Bke+BXJ3cWtyeKNF8QxaTMQY5bSey82MPbxOFYOx3YJ3IMgE4B4yc5zPEmteI4r7xCNM1ERR28dpbWyKiErdytjYCVPGHjyTn2A7NbJdf6/4HzDrdHokjrFG0khCooLMT2AqOzu4L+yhu7OQSwToJI3A4ZSMg/lXCX2ta3DY+LJYtWxNbPDZ2QEKbY52Vc7QRyC8qD5s9DXewBhbRh5PNYIMycfMcdePWjpcCSiiikAVy/ibX/FWlalHD4e8G/25atEGe5OqxW21yxBTa4yeADn/ax2rqKxPF2i6brnhu6t9XhWWPym8vdk7XIwrAD+IHGO+elKTsrjSu7GFYeK/HdxqlrBf/Dn7HbSyqs1x/bsEnkoSAz7QMtgHOB1xXcVyHhZba68I2Pii+O/Um00eZdn70Q2gsq5yAAV59SM1c8H67JqejWEWoPNPqLWiT3MotyI1ZsHZvChNwyBtBzxzVtWbXb/AIP+RN9E2dHRVDWZhBp5drq7tBuH7yzt/Oce23Y/H4Vz39pxf9DD4k/8E4/+RakZ2FYvivxTp3hDQ5NS1SVUXISJGcKZZD0UE/qewye1S6FcLcQylL/UL0BgN19aeQV9gPLTP61HrS6vLcIlho2k6hbhclr6+eJlbJyAogkGMY5yO/HHI0wVjldC8c+DLHzr7UvFml3Gq3mDczLN8qgfdjT0Rc8epyTyTWx/wtHwOP8AmaNN/wC/wo+y6/8A9Cl4Z/8ABpJ/8iUfZdf/AOhS8M/+DST/AORKAMHVfjd4bFzFpnheV9a1a6kWC3jijZYw7HALOQOOf4c1e8RarrGl6vJFb6oVtbDQ5bq8by0JDggIwyD8xKydePY1pRw+IopFeLwr4bR1OQy6rICPx+yUk0HiK5adrjwr4clNwixzF9WkPmKpJVWzacgZPB9TRbT+u39MfX+u5Q0LUNf/ALW+z6rqReS00SKS5iW3Ei/aHJ52oAzsAhyAQDuGAKu/25qn/P7/AOWvff8AxdPji8SQ6hNfxeF/DqXc6qktwuryh3UdAW+yZIHpVn7Z4x/6AWh/+Dqb/wCRabd2Slb+vIzPGDQvB4YmuNvmzazaAv5LRFiNxA2n5l5zweldkSFUliAAMkntXKX1pr2ptE2peEvDN40LbozcapJIUPqM2nBq39p8XeXs/sDQtmMbf7Zlxj0/49aXRrzv+C/yH1v5W/F/5nKS/ELwjr2vM2p+IbCDS9Om/c28kwzdTKf9Yw/uKfujufm7LXQ/8LR8D/8AQ0ab/wB/hR9l1/8A6FLwz/4NJP8A5Eo+y6//ANCl4Z/8Gkn/AMiUdLD6lLUfjJ4D02EySeIIJz2S2VpWP/fIwPxxVSHxnqPiD4d6l4m0zzNMW4YQaUsqqzk7tiuQcjLSNjHIwBWx9l1//oUvDP8A4NJP/kSlubfxDe2Is7vwr4bmtQysIJNWkKZByDt+yY4IzR6h6Et5qmoWtx5MV9lURRu/sG6uNxwMnzI2CnPXgVc0i6m1FJlv3W4CFWUNpU1oAeuf3pO7kdulQC78YAADQdDAHQDWpv8A5Fpss/iyeJop/D2gyRuMMj6zKQw9wbWh7CK3wyaN/h3prQnKN5pz/wBtXrq65awg8RaVb/Z9L8KeG7KHOfLt9VkjXP0W0Aqz9s8Y/wDQC0P/AMHU3/yLTe4HQVXg0+ztbu4ura1hiuLpg08qIA0pAwCx6nAGKx/tnjH/AKAWh/8Ag6m/+RaPtnjH/oBaH/4Opv8A5FpAdBVU6ZYFmY2duWeYXDExj5pQAA59WAAweowPSsn7Z4x/6AWh/wDg6m/+RaPtnjH/AKAWh/8Ag6m/+RaAL8nh/R5Y7mOXS7N0uphPcK0CkTSAghm45IIHJ9K0QAAABgDoBXP/AGzxj/0AtD/8HU3/AMi1qaZLqUtszaxaWtrPvIVLW6adSuByWaNCDnPGOw554ALlFFFABVGbSLSfV4tSmErTwpsRfOby+uclM7SwycEjI7VeooA5i98H29v4V1TS/DyfZ31AOpMs7ssYkb59uc7Ryx2rgZqz4W0e70C3udMbym02Kd3sWErNII2O4owI/hYsAcnIxW9RRsG4UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVRbWtLSxmvW1K0W0t2KSzmddkbDqC2cAj0q3OIzbyeeFaLad4YZBHfNeVGxib4SBriOMS+ILsrApAAiS6nzkeh2MTn2A7Ubv+uuwz1ZHWWNXjYOjAFWU5BB706udv/Fun6Nf2+mC2uJi9lJcwtAqlGSPbkAlhzhhz933pdE8Y2mvXtrb2lpdoLmwW+WWRVChSQNvDZzk9cY4OCae70/rf/Jk7LX+tv8AM6GiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAGyxJNC8UyK8bqVZWGQwPUGqtxpGm3Vrb21zYW0tvbMrwRPEpSIqMKVGMDHb0q5RQBzuteFpNXutTnF8IWvNN/s+EiLJgUli7A55LZXjj7oqfTvD72Hia71FbiP7NLaQWsNssODEse7+LOMZY8AD61t0UbA9f69P8kFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k=";
        let list = [];

        list.push("Name of the project, Name and Email:");
        list.push("test");
        list.push("test");
        list.push("test@gmail.com");

        
        list.push("Phase 1. Goal and scope definition:");
        list.push("Test Description");
                
        list.push("Phase 3. Life cycle impact assessment (LCIA):");
        // list.push($("label[for='"+selectedMethodId+"']").val());

        list.push("Results:");

        list.push("Case Study Result: LifeExpectancy: 0 Education: 0 Health: 0 Safety: 0");
        list.push("Proposed Study Result: LifeExpectancy: 0 Education: 0 Health: 0 Safety: 0");

        list.push("Phase 4: Interpretation:");

        expect(createPDF(canvasImg, LifeExpectancyTableImg, equation_image, list)).not.to.be.null;
    }); 

    it('should not create a pdf if specfic values are null', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let canvasImg = "";
        let LifeExpectancyTableImg; // This should be null for the time beeing base ont the desired specs
        let equation_image = "";
        let list = [];        

        expect(createPDF(canvasImg, LifeExpectancyTableImg, equation_image, list)).to.be.null;
    });

    it('should create a pdf with empty figures', function () {
        // assert.strictEqual(checkCSVHeader(data),true);
        let canvasImg = null;
        let LifeExpectancyTableImg; // This should be null for the time beeing based on the desired specs
        let equation_image = null;
        let list = [];        

        list.push("Name of the project, Name and Email:");
        list.push("test");
        list.push("test");
        list.push("test@gmail.com");

        
        list.push("Phase 1. Goal and scope definition:");
        list.push("Test Description");
                
        list.push("Phase 3. Life cycle impact assessment (LCIA):");
        list.push("Results:");

        list.push("Case Study Result: LifeExpectancy: 0 Education: 0 Health: 0 Safety: 0");
        list.push("Proposed Study Result: LifeExpectancy: 0 Education: 0 Health: 0 Safety: 0");

        list.push("Phase 4: Interpretation:");

        expect(createPDF(canvasImg, LifeExpectancyTableImg, equation_image, list)).to.be.null;
    }); 
});

describe.skip('testing the calculation of indicator values Social', function () {

    it('should not provide values', function () {

        let table = null;
        expect(createResultsFromCSVTableSocial(table)).to.be.null;
    });

    it('should not provide values - wrong length', function () {

        let table_rows_data = {
            "0": [
              "",
              "Reading Skills (out of 500 score)",
              "United States",
              "222",
            ],
            "1": [
              "Basic Education",
              "Math Skills (out of 500 score)",
              "United States",
              "240",
              "500"
            ],
            "context": [
              {
                "oFeatures": {
                  "bAutoWidth": true,
                  "bDeferRender": false,
                  "bFilter": true,
                  "bInfo": true,
                  "bLengthChange": true,
                  "bPaginate": true,
                  "bProcessing": false,
                  "bServerSide": false,
                  "bSort": true,
                  "bSortMulti": true,
                  "bSortClasses": true,
                  "bStateSave": null
                },
                "oScroll": {
                  "bCollapse": false,
                  "iBarWidth": 17,
                  "sX": "",
                  "sXInner": "",
                  "sY": ""
                },
                "oLanguage": {
                  "fnInfoCallback": null,
                  "oAria": {
                    "sSortAscending": ": activate to sort column ascending",
                    "sSortDescending": ": activate to sort column descending",
                    "_hungarianMap": {
                      "sortAscending": "sSortAscending",
                      "sortDescending": "sSortDescending"
                    }
                  },
                  "oPaginate": {
                    "sFirst": "First",
                    "sLast": "Last",
                    "sNext": "Next",
                    "sPrevious": "Previous",
                    "_hungarianMap": {
                      "first": "sFirst",
                      "last": "sLast",
                      "next": "sNext",
                      "previous": "sPrevious"
                    }
                  },
                  "sEmptyTable": "No data available in table",
                  "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                  "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                  "sInfoFiltered": "(filtered from _MAX_ total entries)",
                  "sInfoPostFix": "",
                  "sDecimal": "",
                  "sThousands": ",",
                  "sLengthMenu": "Show _MENU_ entries",
                  "sLoadingRecords": "Loading...",
                  "sProcessing": "Processing...",
                  "sSearch": "Search:",
                  "sSearchPlaceholder": "",
                  "sUrl": "",
                  "sZeroRecords": "No matching records found",
                  "_hungarianMap": {
                    "aria": "oAria",
                    "paginate": "oPaginate",
                    "emptyTable": "sEmptyTable",
                    "info": "sInfo",
                    "infoEmpty": "sInfoEmpty",
                    "infoFiltered": "sInfoFiltered",
                    "infoPostFix": "sInfoPostFix",
                    "decimal": "sDecimal",
                    "thousands": "sThousands",
                    "lengthMenu": "sLengthMenu",
                    "loadingRecords": "sLoadingRecords",
                    "processing": "sProcessing",
                    "search": "sSearch",
                    "searchPlaceholder": "sSearchPlaceholder",
                    "url": "sUrl",
                    "zeroRecords": "sZeroRecords"
                  }
                },
                "oBrowser": {
                  "bScrollOversize": false,
                  "bScrollbarLeft": false,
                  "bBounding": true,
                  "barWidth": 17
                },
                "ajax": null,
                "aanFeatures": [],
                "aoData": [
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    "_aSortData": [
                      "basic education"
                    ],
                    "_aFilterData": [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                    "_sRowStripe": "even",
                    "src": "data",
                    "idx": 0
                  },
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ],
                    "_aSortData": [
                      ""
                    ],
                    "_aFilterData": [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ],
                    "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                    "_sRowStripe": "odd",
                    "src": "data",
                    "idx": 1
                  }
                ],
                "aiDisplay": [
                  1,
                  0
                ],
                "aiDisplayMaster": [
                  1,
                  0
                ],
                "aIds": {},
                "aoColumns": [
                  {
                    "idx": 0,
                    "aDataSort": [
                      0
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 0,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Indicator",
                    "sType": "html",
                    "sWidth": "109.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Indicator"
                  },
                  {
                    "idx": 1,
                    "aDataSort": [
                      1
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 1,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Metric",
                    "sType": "string",
                    "sWidth": "247px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Metric"
                  },
                  {
                    "idx": 2,
                    "aDataSort": [
                      2
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 2,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Location",
                    "sType": "string",
                    "sWidth": "92.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Location"
                  },
                  {
                    "idx": 3,
                    "aDataSort": [
                      3
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 3,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Score",
                    "sType": "num",
                    "sWidth": "51.00000000000001px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Score"
                  },
                  {
                    "idx": 4,
                    "aDataSort": [
                      4
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 4,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Total Score",
                    "sType": "num",
                    "sWidth": "100.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Total Score"
                  }
                ],
                "aoHeader": [
                  [
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    }
                  ]
                ],
                "aoFooter": [],
                "oPreviousSearch": {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true,
                  "_hungarianMap": {
                    "caseInsensitive": "bCaseInsensitive",
                    "search": "sSearch",
                    "regex": "bRegex",
                    "smart": "bSmart"
                  }
                },
                "aoPreSearchCols": [
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  }
                ],
                "aaSorting": [
                  [
                    0,
                    "asc"
                  ]
                ],
                "aaSortingFixed": [],
                "asStripeClasses": [
                  "odd",
                  "even"
                ],
                "asDestroyStripes": [],
                "sDestroyWidth": "",
                "aoRowCallback": [],
                "aoHeaderCallback": [],
                "aoFooterCallback": [],
                "aoDrawCallback": [
                  {},
                  {
                    "sName": "sc"
                  },
                  {
                    "sName": "information"
                  },
                  {
                    "sName": "pagination"
                  }
                ],
                "aoRowCreatedCallback": [
                  {
                    "sName": "select-deferRender"
                  }
                ],
                "aoPreDrawCallback": [],
                "aoInitComplete": [],
                "aoStateSaveParams": [],
                "aoStateLoadParams": [],
                "aoStateLoaded": [],
                "sTableId": "CSVtableLifeExpectancy",
                "nTable": {},
                "nTHead": {},
                "nTFoot": null,
                "nTBody": {},
                "nTableWrapper": {},
                "bDeferLoading": false,
                "bInitialised": true,
                "aoOpenRows": [],
                "sDom": "lfrtip",
                "searchDelay": null,
                "sPaginationType": "simple_numbers",
                "iStateDuration": 7200,
                "aoStateSave": [],
                "aoStateLoad": [],
                "oSavedState": null,
                "oLoadedState": null,
                "sAjaxSource": null,
                "sAjaxDataProp": "data",
                "bAjaxDataGet": true,
                "jqXHR": null,
                "fnServerData": null,
                "aoServerParams": [],
                "sServerMethod": "GET",
                "aLengthMenu": [
                  10,
                  25,
                  50,
                  100
                ],
                "iDraw": 1,
                "bDrawing": false,
                "iDrawError": -1,
                "_iDisplayLength": 10,
                "_iDisplayStart": 0,
                "_iRecordsTotal": 0,
                "_iRecordsDisplay": 0,
                "oClasses": {
                  "sTable": "dataTable",
                  "sNoFooter": "no-footer",
                  "sPageButton": "paginate_button",
                  "sPageButtonActive": "current",
                  "sPageButtonDisabled": "disabled",
                  "sStripeOdd": "odd",
                  "sStripeEven": "even",
                  "sRowEmpty": "dataTables_empty",
                  "sWrapper": "dataTables_wrapper",
                  "sFilter": "dataTables_filter",
                  "sInfo": "dataTables_info",
                  "sPaging": "dataTables_paginate paging_",
                  "sLength": "dataTables_length",
                  "sProcessing": "dataTables_processing",
                  "sSortAsc": "sorting_asc",
                  "sSortDesc": "sorting_desc",
                  "sSortable": "sorting",
                  "sSortableAsc": "sorting_asc_disabled",
                  "sSortableDesc": "sorting_desc_disabled",
                  "sSortableNone": "sorting_disabled",
                  "sSortColumn": "sorting_",
                  "sFilterInput": "",
                  "sLengthSelect": "",
                  "sScrollWrapper": "dataTables_scroll",
                  "sScrollHead": "dataTables_scrollHead",
                  "sScrollHeadInner": "dataTables_scrollHeadInner",
                  "sScrollBody": "dataTables_scrollBody",
                  "sScrollFoot": "dataTables_scrollFoot",
                  "sScrollFootInner": "dataTables_scrollFootInner",
                  "sHeaderTH": "",
                  "sFooterTH": "",
                  "sSortJUIAsc": "",
                  "sSortJUIDesc": "",
                  "sSortJUI": "",
                  "sSortJUIAscAllowed": "",
                  "sSortJUIDescAllowed": "",
                  "sSortJUIWrapper": "",
                  "sSortIcon": "",
                  "sJUIHeader": "",
                  "sJUIFooter": "",
                  "_hungarianMap": {}
                },
                "bFiltered": false,
                "bSorted": false,
                "bSortCellsTop": false,
                "oInit": {
                  "data": [
                    [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ]
                  ],
                  "columns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ],
                  "select": {
                    "style": "single",
                    "items": "row"
                  },
                  "aaData": [
                    [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ]
                  ],
                  "aoColumns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ]
                },
                "aoDestroyCallback": [],
                "oInstance": {
                  "0": {},
                  "length": 1,
                  "internal": {},
                  "oApi": {}
                },
                "sInstance": "CSVtableLifeExpectancy",
                "iTabIndex": 0,
                "nScrollHead": null,
                "nScrollFoot": null,
                "aLastSort": [
                  {
                    "src": 0,
                    "col": 0,
                    "dir": "asc",
                    "index": 0,
                    "type": "html"
                  }
                ],
                "oPlugins": {},
                "rowId": "DT_RowId",
                "oApi": {},
                "renderer": null,
                "iInitDisplayStart": -1,
                "nHolding": null,
                "nTableReinsertBefore": {},
                "_select": {
                  "selector": "td, th",
                  "items": "row",
                  "style": "single",
                  "blurable": false,
                  "toggleable": true,
                  "info": true,
                  "className": "selected"
                },
                "_drawHold": false,
                "_bInitComplete": true
              }
            ],
            "length": 2,
            "selector": {
              "rows": "",
              "cols": null,
              "opts": {
                "search": "none",
                "order": "current",
                "page": "all"
              }
            },
            "ajax": {
              "__dt_wrapper": true
            }
          }

        expect(createResultsFromCSVTableSocial(table_rows_data)).to.be.null;
    });

    it('should not provide values - wrong type', function () {

        let table_rows_data = {
            "0": [
              "",
              "Reading Skills (out of 500 score)",
              "United States",
              "HELLO!",
              "500"
            ],
            "1": [
              "Basic Education",
              "Math Skills (out of 500 score)",
              "United States",
              "240",
              "500"
            ],
            "context": [
              {
                "oFeatures": {
                  "bAutoWidth": true,
                  "bDeferRender": false,
                  "bFilter": true,
                  "bInfo": true,
                  "bLengthChange": true,
                  "bPaginate": true,
                  "bProcessing": false,
                  "bServerSide": false,
                  "bSort": true,
                  "bSortMulti": true,
                  "bSortClasses": true,
                  "bStateSave": null
                },
                "oScroll": {
                  "bCollapse": false,
                  "iBarWidth": 17,
                  "sX": "",
                  "sXInner": "",
                  "sY": ""
                },
                "oLanguage": {
                  "fnInfoCallback": null,
                  "oAria": {
                    "sSortAscending": ": activate to sort column ascending",
                    "sSortDescending": ": activate to sort column descending",
                    "_hungarianMap": {
                      "sortAscending": "sSortAscending",
                      "sortDescending": "sSortDescending"
                    }
                  },
                  "oPaginate": {
                    "sFirst": "First",
                    "sLast": "Last",
                    "sNext": "Next",
                    "sPrevious": "Previous",
                    "_hungarianMap": {
                      "first": "sFirst",
                      "last": "sLast",
                      "next": "sNext",
                      "previous": "sPrevious"
                    }
                  },
                  "sEmptyTable": "No data available in table",
                  "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                  "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                  "sInfoFiltered": "(filtered from _MAX_ total entries)",
                  "sInfoPostFix": "",
                  "sDecimal": "",
                  "sThousands": ",",
                  "sLengthMenu": "Show _MENU_ entries",
                  "sLoadingRecords": "Loading...",
                  "sProcessing": "Processing...",
                  "sSearch": "Search:",
                  "sSearchPlaceholder": "",
                  "sUrl": "",
                  "sZeroRecords": "No matching records found",
                  "_hungarianMap": {
                    "aria": "oAria",
                    "paginate": "oPaginate",
                    "emptyTable": "sEmptyTable",
                    "info": "sInfo",
                    "infoEmpty": "sInfoEmpty",
                    "infoFiltered": "sInfoFiltered",
                    "infoPostFix": "sInfoPostFix",
                    "decimal": "sDecimal",
                    "thousands": "sThousands",
                    "lengthMenu": "sLengthMenu",
                    "loadingRecords": "sLoadingRecords",
                    "processing": "sProcessing",
                    "search": "sSearch",
                    "searchPlaceholder": "sSearchPlaceholder",
                    "url": "sUrl",
                    "zeroRecords": "sZeroRecords"
                  }
                },
                "oBrowser": {
                  "bScrollOversize": false,
                  "bScrollbarLeft": false,
                  "bBounding": true,
                  "barWidth": 17
                },
                "ajax": null,
                "aanFeatures": [],
                "aoData": [
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    "_aSortData": [
                      "basic education"
                    ],
                    "_aFilterData": [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                    "_sRowStripe": "even",
                    "src": "data",
                    "idx": 0
                  },
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ],
                    "_aSortData": [
                      ""
                    ],
                    "_aFilterData": [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ],
                    "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                    "_sRowStripe": "odd",
                    "src": "data",
                    "idx": 1
                  }
                ],
                "aiDisplay": [
                  1,
                  0
                ],
                "aiDisplayMaster": [
                  1,
                  0
                ],
                "aIds": {},
                "aoColumns": [
                  {
                    "idx": 0,
                    "aDataSort": [
                      0
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 0,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Indicator",
                    "sType": "html",
                    "sWidth": "109.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Indicator"
                  },
                  {
                    "idx": 1,
                    "aDataSort": [
                      1
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 1,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Metric",
                    "sType": "string",
                    "sWidth": "247px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Metric"
                  },
                  {
                    "idx": 2,
                    "aDataSort": [
                      2
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 2,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Location",
                    "sType": "string",
                    "sWidth": "92.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Location"
                  },
                  {
                    "idx": 3,
                    "aDataSort": [
                      3
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 3,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Score",
                    "sType": "num",
                    "sWidth": "51.00000000000001px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Score"
                  },
                  {
                    "idx": 4,
                    "aDataSort": [
                      4
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 4,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Total Score",
                    "sType": "num",
                    "sWidth": "100.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Total Score"
                  }
                ],
                "aoHeader": [
                  [
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    }
                  ]
                ],
                "aoFooter": [],
                "oPreviousSearch": {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true,
                  "_hungarianMap": {
                    "caseInsensitive": "bCaseInsensitive",
                    "search": "sSearch",
                    "regex": "bRegex",
                    "smart": "bSmart"
                  }
                },
                "aoPreSearchCols": [
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  }
                ],
                "aaSorting": [
                  [
                    0,
                    "asc"
                  ]
                ],
                "aaSortingFixed": [],
                "asStripeClasses": [
                  "odd",
                  "even"
                ],
                "asDestroyStripes": [],
                "sDestroyWidth": "",
                "aoRowCallback": [],
                "aoHeaderCallback": [],
                "aoFooterCallback": [],
                "aoDrawCallback": [
                  {},
                  {
                    "sName": "sc"
                  },
                  {
                    "sName": "information"
                  },
                  {
                    "sName": "pagination"
                  }
                ],
                "aoRowCreatedCallback": [
                  {
                    "sName": "select-deferRender"
                  }
                ],
                "aoPreDrawCallback": [],
                "aoInitComplete": [],
                "aoStateSaveParams": [],
                "aoStateLoadParams": [],
                "aoStateLoaded": [],
                "sTableId": "CSVtableLifeExpectancy",
                "nTable": {},
                "nTHead": {},
                "nTFoot": null,
                "nTBody": {},
                "nTableWrapper": {},
                "bDeferLoading": false,
                "bInitialised": true,
                "aoOpenRows": [],
                "sDom": "lfrtip",
                "searchDelay": null,
                "sPaginationType": "simple_numbers",
                "iStateDuration": 7200,
                "aoStateSave": [],
                "aoStateLoad": [],
                "oSavedState": null,
                "oLoadedState": null,
                "sAjaxSource": null,
                "sAjaxDataProp": "data",
                "bAjaxDataGet": true,
                "jqXHR": null,
                "fnServerData": null,
                "aoServerParams": [],
                "sServerMethod": "GET",
                "aLengthMenu": [
                  10,
                  25,
                  50,
                  100
                ],
                "iDraw": 1,
                "bDrawing": false,
                "iDrawError": -1,
                "_iDisplayLength": 10,
                "_iDisplayStart": 0,
                "_iRecordsTotal": 0,
                "_iRecordsDisplay": 0,
                "oClasses": {
                  "sTable": "dataTable",
                  "sNoFooter": "no-footer",
                  "sPageButton": "paginate_button",
                  "sPageButtonActive": "current",
                  "sPageButtonDisabled": "disabled",
                  "sStripeOdd": "odd",
                  "sStripeEven": "even",
                  "sRowEmpty": "dataTables_empty",
                  "sWrapper": "dataTables_wrapper",
                  "sFilter": "dataTables_filter",
                  "sInfo": "dataTables_info",
                  "sPaging": "dataTables_paginate paging_",
                  "sLength": "dataTables_length",
                  "sProcessing": "dataTables_processing",
                  "sSortAsc": "sorting_asc",
                  "sSortDesc": "sorting_desc",
                  "sSortable": "sorting",
                  "sSortableAsc": "sorting_asc_disabled",
                  "sSortableDesc": "sorting_desc_disabled",
                  "sSortableNone": "sorting_disabled",
                  "sSortColumn": "sorting_",
                  "sFilterInput": "",
                  "sLengthSelect": "",
                  "sScrollWrapper": "dataTables_scroll",
                  "sScrollHead": "dataTables_scrollHead",
                  "sScrollHeadInner": "dataTables_scrollHeadInner",
                  "sScrollBody": "dataTables_scrollBody",
                  "sScrollFoot": "dataTables_scrollFoot",
                  "sScrollFootInner": "dataTables_scrollFootInner",
                  "sHeaderTH": "",
                  "sFooterTH": "",
                  "sSortJUIAsc": "",
                  "sSortJUIDesc": "",
                  "sSortJUI": "",
                  "sSortJUIAscAllowed": "",
                  "sSortJUIDescAllowed": "",
                  "sSortJUIWrapper": "",
                  "sSortIcon": "",
                  "sJUIHeader": "",
                  "sJUIFooter": "",
                  "_hungarianMap": {}
                },
                "bFiltered": false,
                "bSorted": false,
                "bSortCellsTop": false,
                "oInit": {
                  "data": [
                    [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ]
                  ],
                  "columns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ],
                  "select": {
                    "style": "single",
                    "items": "row"
                  },
                  "aaData": [
                    [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ]
                  ],
                  "aoColumns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ]
                },
                "aoDestroyCallback": [],
                "oInstance": {
                  "0": {},
                  "length": 1,
                  "internal": {},
                  "oApi": {}
                },
                "sInstance": "CSVtableLifeExpectancy",
                "iTabIndex": 0,
                "nScrollHead": null,
                "nScrollFoot": null,
                "aLastSort": [
                  {
                    "src": 0,
                    "col": 0,
                    "dir": "asc",
                    "index": 0,
                    "type": "html"
                  }
                ],
                "oPlugins": {},
                "rowId": "DT_RowId",
                "oApi": {},
                "renderer": null,
                "iInitDisplayStart": -1,
                "nHolding": null,
                "nTableReinsertBefore": {},
                "_select": {
                  "selector": "td, th",
                  "items": "row",
                  "style": "single",
                  "blurable": false,
                  "toggleable": true,
                  "info": true,
                  "className": "selected"
                },
                "_drawHold": false,
                "_bInitComplete": true
              }
            ],
            "length": 2,
            "selector": {
              "rows": "",
              "cols": null,
              "opts": {
                "search": "none",
                "order": "current",
                "page": "all"
              }
            },
            "ajax": {
              "__dt_wrapper": true
            }
          }

        expect(createResultsFromCSVTableSocial(table_rows_data)).to.be.null;
    });

    it('should provide value', function () {

        let table_rows_data = {
            "0": [
              "",
              "Reading Skills (out of 500 score)",
              "United States",
              "222",
              "500"
            ],
            "1": [
              "Basic Education",
              "Math Skills (out of 500 score)",
              "United States",
              "240",
              "500"
            ],
            "context": [
              {
                "oFeatures": {
                  "bAutoWidth": true,
                  "bDeferRender": false,
                  "bFilter": true,
                  "bInfo": true,
                  "bLengthChange": true,
                  "bPaginate": true,
                  "bProcessing": false,
                  "bServerSide": false,
                  "bSort": true,
                  "bSortMulti": true,
                  "bSortClasses": true,
                  "bStateSave": null
                },
                "oScroll": {
                  "bCollapse": false,
                  "iBarWidth": 17,
                  "sX": "",
                  "sXInner": "",
                  "sY": ""
                },
                "oLanguage": {
                  "fnInfoCallback": null,
                  "oAria": {
                    "sSortAscending": ": activate to sort column ascending",
                    "sSortDescending": ": activate to sort column descending",
                    "_hungarianMap": {
                      "sortAscending": "sSortAscending",
                      "sortDescending": "sSortDescending"
                    }
                  },
                  "oPaginate": {
                    "sFirst": "First",
                    "sLast": "Last",
                    "sNext": "Next",
                    "sPrevious": "Previous",
                    "_hungarianMap": {
                      "first": "sFirst",
                      "last": "sLast",
                      "next": "sNext",
                      "previous": "sPrevious"
                    }
                  },
                  "sEmptyTable": "No data available in table",
                  "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                  "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                  "sInfoFiltered": "(filtered from _MAX_ total entries)",
                  "sInfoPostFix": "",
                  "sDecimal": "",
                  "sThousands": ",",
                  "sLengthMenu": "Show _MENU_ entries",
                  "sLoadingRecords": "Loading...",
                  "sProcessing": "Processing...",
                  "sSearch": "Search:",
                  "sSearchPlaceholder": "",
                  "sUrl": "",
                  "sZeroRecords": "No matching records found",
                  "_hungarianMap": {
                    "aria": "oAria",
                    "paginate": "oPaginate",
                    "emptyTable": "sEmptyTable",
                    "info": "sInfo",
                    "infoEmpty": "sInfoEmpty",
                    "infoFiltered": "sInfoFiltered",
                    "infoPostFix": "sInfoPostFix",
                    "decimal": "sDecimal",
                    "thousands": "sThousands",
                    "lengthMenu": "sLengthMenu",
                    "loadingRecords": "sLoadingRecords",
                    "processing": "sProcessing",
                    "search": "sSearch",
                    "searchPlaceholder": "sSearchPlaceholder",
                    "url": "sUrl",
                    "zeroRecords": "sZeroRecords"
                  }
                },
                "oBrowser": {
                  "bScrollOversize": false,
                  "bScrollbarLeft": false,
                  "bBounding": true,
                  "barWidth": 17
                },
                "ajax": null,
                "aanFeatures": [],
                "aoData": [
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    "_aSortData": [
                      "basic education"
                    ],
                    "_aFilterData": [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                    "_sRowStripe": "even",
                    "src": "data",
                    "idx": 0
                  },
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ],
                    "_aSortData": [
                      ""
                    ],
                    "_aFilterData": [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ],
                    "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                    "_sRowStripe": "odd",
                    "src": "data",
                    "idx": 1
                  }
                ],
                "aiDisplay": [
                  1,
                  0
                ],
                "aiDisplayMaster": [
                  1,
                  0
                ],
                "aIds": {},
                "aoColumns": [
                  {
                    "idx": 0,
                    "aDataSort": [
                      0
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 0,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Indicator",
                    "sType": "html",
                    "sWidth": "109.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Indicator"
                  },
                  {
                    "idx": 1,
                    "aDataSort": [
                      1
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 1,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Metric",
                    "sType": "string",
                    "sWidth": "247px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Metric"
                  },
                  {
                    "idx": 2,
                    "aDataSort": [
                      2
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 2,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Location",
                    "sType": "string",
                    "sWidth": "92.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Location"
                  },
                  {
                    "idx": 3,
                    "aDataSort": [
                      3
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 3,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Score",
                    "sType": "num",
                    "sWidth": "51.00000000000001px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Score"
                  },
                  {
                    "idx": 4,
                    "aDataSort": [
                      4
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 4,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Total Score",
                    "sType": "num",
                    "sWidth": "100.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Total Score"
                  }
                ],
                "aoHeader": [
                  [
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    }
                  ]
                ],
                "aoFooter": [],
                "oPreviousSearch": {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true,
                  "_hungarianMap": {
                    "caseInsensitive": "bCaseInsensitive",
                    "search": "sSearch",
                    "regex": "bRegex",
                    "smart": "bSmart"
                  }
                },
                "aoPreSearchCols": [
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  }
                ],
                "aaSorting": [
                  [
                    0,
                    "asc"
                  ]
                ],
                "aaSortingFixed": [],
                "asStripeClasses": [
                  "odd",
                  "even"
                ],
                "asDestroyStripes": [],
                "sDestroyWidth": "",
                "aoRowCallback": [],
                "aoHeaderCallback": [],
                "aoFooterCallback": [],
                "aoDrawCallback": [
                  {},
                  {
                    "sName": "sc"
                  },
                  {
                    "sName": "information"
                  },
                  {
                    "sName": "pagination"
                  }
                ],
                "aoRowCreatedCallback": [
                  {
                    "sName": "select-deferRender"
                  }
                ],
                "aoPreDrawCallback": [],
                "aoInitComplete": [],
                "aoStateSaveParams": [],
                "aoStateLoadParams": [],
                "aoStateLoaded": [],
                "sTableId": "CSVtableLifeExpectancy",
                "nTable": {},
                "nTHead": {},
                "nTFoot": null,
                "nTBody": {},
                "nTableWrapper": {},
                "bDeferLoading": false,
                "bInitialised": true,
                "aoOpenRows": [],
                "sDom": "lfrtip",
                "searchDelay": null,
                "sPaginationType": "simple_numbers",
                "iStateDuration": 7200,
                "aoStateSave": [],
                "aoStateLoad": [],
                "oSavedState": null,
                "oLoadedState": null,
                "sAjaxSource": null,
                "sAjaxDataProp": "data",
                "bAjaxDataGet": true,
                "jqXHR": null,
                "fnServerData": null,
                "aoServerParams": [],
                "sServerMethod": "GET",
                "aLengthMenu": [
                  10,
                  25,
                  50,
                  100
                ],
                "iDraw": 1,
                "bDrawing": false,
                "iDrawError": -1,
                "_iDisplayLength": 10,
                "_iDisplayStart": 0,
                "_iRecordsTotal": 0,
                "_iRecordsDisplay": 0,
                "oClasses": {
                  "sTable": "dataTable",
                  "sNoFooter": "no-footer",
                  "sPageButton": "paginate_button",
                  "sPageButtonActive": "current",
                  "sPageButtonDisabled": "disabled",
                  "sStripeOdd": "odd",
                  "sStripeEven": "even",
                  "sRowEmpty": "dataTables_empty",
                  "sWrapper": "dataTables_wrapper",
                  "sFilter": "dataTables_filter",
                  "sInfo": "dataTables_info",
                  "sPaging": "dataTables_paginate paging_",
                  "sLength": "dataTables_length",
                  "sProcessing": "dataTables_processing",
                  "sSortAsc": "sorting_asc",
                  "sSortDesc": "sorting_desc",
                  "sSortable": "sorting",
                  "sSortableAsc": "sorting_asc_disabled",
                  "sSortableDesc": "sorting_desc_disabled",
                  "sSortableNone": "sorting_disabled",
                  "sSortColumn": "sorting_",
                  "sFilterInput": "",
                  "sLengthSelect": "",
                  "sScrollWrapper": "dataTables_scroll",
                  "sScrollHead": "dataTables_scrollHead",
                  "sScrollHeadInner": "dataTables_scrollHeadInner",
                  "sScrollBody": "dataTables_scrollBody",
                  "sScrollFoot": "dataTables_scrollFoot",
                  "sScrollFootInner": "dataTables_scrollFootInner",
                  "sHeaderTH": "",
                  "sFooterTH": "",
                  "sSortJUIAsc": "",
                  "sSortJUIDesc": "",
                  "sSortJUI": "",
                  "sSortJUIAscAllowed": "",
                  "sSortJUIDescAllowed": "",
                  "sSortJUIWrapper": "",
                  "sSortIcon": "",
                  "sJUIHeader": "",
                  "sJUIFooter": "",
                  "_hungarianMap": {}
                },
                "bFiltered": false,
                "bSorted": false,
                "bSortCellsTop": false,
                "oInit": {
                  "data": [
                    [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ]
                  ],
                  "columns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ],
                  "select": {
                    "style": "single",
                    "items": "row"
                  },
                  "aaData": [
                    [
                      "Basic Education",
                      "Math Skills (out of 500 score)",
                      "United States",
                      "240",
                      "500"
                    ],
                    [
                      "",
                      "Reading Skills (out of 500 score)",
                      "United States",
                      "222",
                      "500"
                    ]
                  ],
                  "aoColumns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ]
                },
                "aoDestroyCallback": [],
                "oInstance": {
                  "0": {},
                  "length": 1,
                  "internal": {},
                  "oApi": {}
                },
                "sInstance": "CSVtableLifeExpectancy",
                "iTabIndex": 0,
                "nScrollHead": null,
                "nScrollFoot": null,
                "aLastSort": [
                  {
                    "src": 0,
                    "col": 0,
                    "dir": "asc",
                    "index": 0,
                    "type": "html"
                  }
                ],
                "oPlugins": {},
                "rowId": "DT_RowId",
                "oApi": {},
                "renderer": null,
                "iInitDisplayStart": -1,
                "nHolding": null,
                "nTableReinsertBefore": {},
                "_select": {
                  "selector": "td, th",
                  "items": "row",
                  "style": "single",
                  "blurable": false,
                  "toggleable": true,
                  "info": true,
                  "className": "selected"
                },
                "_drawHold": false,
                "_bInitComplete": true
              }
            ],
            "length": 2,
            "selector": {
              "rows": "",
              "cols": null,
              "opts": {
                "search": "none",
                "order": "current",
                "page": "all"
              }
            },
            "ajax": {
              "__dt_wrapper": true
            }
          }

        expect(createResultsFromCSVTableSocial(table_rows_data)).to.deep.equal({ indicator: 'Basic Education', result: 106.88 });
    });

    it('should provide value - decimals', function () {

        let table_rows_data = {
            "0": [
              "",
              "Property Crime (per 1,000 households)",
              "United States",
              "101.4",
              " 1000 "
            ],
            "1": [
              "Actual Safety",
              "Loss of Human Life (per 100,000 people)",
              "United States",
              " 3.5 ",
              " 100000 "
            ],
            "context": [
              {
                "oFeatures": {
                  "bAutoWidth": true,
                  "bDeferRender": false,
                  "bFilter": true,
                  "bInfo": true,
                  "bLengthChange": true,
                  "bPaginate": true,
                  "bProcessing": false,
                  "bServerSide": false,
                  "bSort": true,
                  "bSortMulti": true,
                  "bSortClasses": true,
                  "bStateSave": null
                },
                "oScroll": {
                  "bCollapse": false,
                  "iBarWidth": 17,
                  "sX": "",
                  "sXInner": "",
                  "sY": ""
                },
                "oLanguage": {
                  "fnInfoCallback": null,
                  "oAria": {
                    "sSortAscending": ": activate to sort column ascending",
                    "sSortDescending": ": activate to sort column descending",
                    "_hungarianMap": {
                      "sortAscending": "sSortAscending",
                      "sortDescending": "sSortDescending"
                    }
                  },
                  "oPaginate": {
                    "sFirst": "First",
                    "sLast": "Last",
                    "sNext": "Next",
                    "sPrevious": "Previous",
                    "_hungarianMap": {
                      "first": "sFirst",
                      "last": "sLast",
                      "next": "sNext",
                      "previous": "sPrevious"
                    }
                  },
                  "sEmptyTable": "No data available in table",
                  "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                  "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                  "sInfoFiltered": "(filtered from _MAX_ total entries)",
                  "sInfoPostFix": "",
                  "sDecimal": "",
                  "sThousands": ",",
                  "sLengthMenu": "Show _MENU_ entries",
                  "sLoadingRecords": "Loading...",
                  "sProcessing": "Processing...",
                  "sSearch": "Search:",
                  "sSearchPlaceholder": "",
                  "sUrl": "",
                  "sZeroRecords": "No matching records found",
                  "_hungarianMap": {
                    "aria": "oAria",
                    "paginate": "oPaginate",
                    "emptyTable": "sEmptyTable",
                    "info": "sInfo",
                    "infoEmpty": "sInfoEmpty",
                    "infoFiltered": "sInfoFiltered",
                    "infoPostFix": "sInfoPostFix",
                    "decimal": "sDecimal",
                    "thousands": "sThousands",
                    "lengthMenu": "sLengthMenu",
                    "loadingRecords": "sLoadingRecords",
                    "processing": "sProcessing",
                    "search": "sSearch",
                    "searchPlaceholder": "sSearchPlaceholder",
                    "url": "sUrl",
                    "zeroRecords": "sZeroRecords"
                  }
                },
                "oBrowser": {
                  "bScrollOversize": false,
                  "bScrollbarLeft": false,
                  "bBounding": true,
                  "barWidth": 17
                },
                "ajax": null,
                "aanFeatures": [],
                "aoData": [
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "Actual Safety",
                      "Loss of Human Life (per 100,000 people)",
                      "United States",
                      " 3.5 ",
                      " 100,000 "
                    ],
                    "_aSortData": [
                      "actual safety"
                    ],
                    "_aFilterData": [
                      "Actual Safety",
                      "Loss of Human Life (per 100,000 people)",
                      "United States",
                      " 3.5 ",
                      " 100,000 "
                    ],
                    "_sFilterRow": "Actual Safety  Loss of Human Life (per 100,000 people)  United States   3.5    100,000 ",
                    "_sRowStripe": "even",
                    "src": "data",
                    "idx": 0
                  },
                  {
                    "nTr": {},
                    "anCells": [
                      {},
                      {},
                      {},
                      {},
                      {}
                    ],
                    "_aData": [
                      "",
                      "Property Crime (per 1,000 households)",
                      "United States",
                      "101.4",
                      " 1,000 "
                    ],
                    "_aSortData": [
                      ""
                    ],
                    "_aFilterData": [
                      "",
                      "Property Crime (per 1,000 households)",
                      "United States",
                      "101.4",
                      " 1,000 "
                    ],
                    "_sFilterRow": "  Property Crime (per 1,000 households)  United States  101.4   1,000 ",
                    "_sRowStripe": "odd",
                    "src": "data",
                    "idx": 1
                  }
                ],
                "aiDisplay": [
                  1,
                  0
                ],
                "aiDisplayMaster": [
                  1,
                  0
                ],
                "aIds": {},
                "aoColumns": [
                  {
                    "idx": 0,
                    "aDataSort": [
                      0
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 0,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Indicator",
                    "sType": "html",
                    "sWidth": "90px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Indicator"
                  },
                  {
                    "idx": 1,
                    "aDataSort": [
                      1
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 1,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Metric",
                    "sType": "string",
                    "sWidth": "277px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Metric"
                  },
                  {
                    "idx": 2,
                    "aDataSort": [
                      2
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 2,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Location",
                    "sType": "string",
                    "sWidth": "91px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Location"
                  },
                  {
                    "idx": 3,
                    "aDataSort": [
                      3
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 3,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Score",
                    "sType": "num",
                    "sWidth": "51.00000000000001px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Score"
                  },
                  {
                    "idx": 4,
                    "aDataSort": [
                      4
                    ],
                    "asSorting": [
                      "asc",
                      "desc"
                    ],
                    "bSearchable": true,
                    "bSortable": true,
                    "bVisible": true,
                    "_sManualType": null,
                    "_bAttrSrc": false,
                    "fnCreatedCell": null,
                    "mData": 4,
                    "mRender": null,
                    "nTh": {},
                    "nTf": null,
                    "sClass": "",
                    "sContentPadding": "",
                    "sDefaultContent": null,
                    "sName": "",
                    "sSortDataType": "std",
                    "sSortingClass": "sorting",
                    "sSortingClassJUI": "",
                    "sTitle": "Total Score",
                    "sType": "num-fmt",
                    "sWidth": "93.99999999999999px",
                    "sWidthOrig": null,
                    "iDataSort": -1,
                    "sCellType": "td",
                    "_hungarianMap": {
                      "dataSort": "iDataSort",
                      "sorting": "asSorting",
                      "searchable": "bSearchable",
                      "sortable": "bSortable",
                      "visible": "bVisible",
                      "createdCell": "fnCreatedCell",
                      "data": "mData",
                      "render": "mRender",
                      "cellType": "sCellType",
                      "class": "sClass",
                      "contentPadding": "sContentPadding",
                      "defaultContent": "sDefaultContent",
                      "name": "sName",
                      "sortDataType": "sSortDataType",
                      "title": "sTitle",
                      "type": "sType",
                      "width": "sWidth"
                    },
                    "_setter": null,
                    "title": "Total Score"
                  }
                ],
                "aoHeader": [
                  [
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    },
                    {
                      "cell": {},
                      "unique": true
                    }
                  ]
                ],
                "aoFooter": [],
                "oPreviousSearch": {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true,
                  "_hungarianMap": {
                    "caseInsensitive": "bCaseInsensitive",
                    "search": "sSearch",
                    "regex": "bRegex",
                    "smart": "bSmart"
                  }
                },
                "aoPreSearchCols": [
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  },
                  {
                    "bCaseInsensitive": true,
                    "sSearch": "",
                    "bRegex": false,
                    "bSmart": true
                  }
                ],
                "aaSorting": [
                  [
                    0,
                    "asc"
                  ]
                ],
                "aaSortingFixed": [],
                "asStripeClasses": [
                  "odd",
                  "even"
                ],
                "asDestroyStripes": [],
                "sDestroyWidth": "",
                "aoRowCallback": [],
                "aoHeaderCallback": [],
                "aoFooterCallback": [],
                "aoDrawCallback": [
                  {},
                  {
                    "sName": "sc"
                  },
                  {
                    "sName": "information"
                  },
                  {
                    "sName": "pagination"
                  }
                ],
                "aoRowCreatedCallback": [
                  {
                    "sName": "select-deferRender"
                  }
                ],
                "aoPreDrawCallback": [],
                "aoInitComplete": [],
                "aoStateSaveParams": [],
                "aoStateLoadParams": [],
                "aoStateLoaded": [],
                "sTableId": "CSVtableSafety",
                "nTable": {},
                "nTHead": {},
                "nTFoot": null,
                "nTBody": {},
                "nTableWrapper": {},
                "bDeferLoading": false,
                "bInitialised": true,
                "aoOpenRows": [],
                "sDom": "lfrtip",
                "searchDelay": null,
                "sPaginationType": "simple_numbers",
                "iStateDuration": 7200,
                "aoStateSave": [],
                "aoStateLoad": [],
                "oSavedState": null,
                "oLoadedState": null,
                "sAjaxSource": null,
                "sAjaxDataProp": "data",
                "bAjaxDataGet": true,
                "jqXHR": null,
                "fnServerData": null,
                "aoServerParams": [],
                "sServerMethod": "GET",
                "aLengthMenu": [
                  10,
                  25,
                  50,
                  100
                ],
                "iDraw": 1,
                "bDrawing": false,
                "iDrawError": -1,
                "_iDisplayLength": 10,
                "_iDisplayStart": 0,
                "_iRecordsTotal": 0,
                "_iRecordsDisplay": 0,
                "oClasses": {
                  "sTable": "dataTable",
                  "sNoFooter": "no-footer",
                  "sPageButton": "paginate_button",
                  "sPageButtonActive": "current",
                  "sPageButtonDisabled": "disabled",
                  "sStripeOdd": "odd",
                  "sStripeEven": "even",
                  "sRowEmpty": "dataTables_empty",
                  "sWrapper": "dataTables_wrapper",
                  "sFilter": "dataTables_filter",
                  "sInfo": "dataTables_info",
                  "sPaging": "dataTables_paginate paging_",
                  "sLength": "dataTables_length",
                  "sProcessing": "dataTables_processing",
                  "sSortAsc": "sorting_asc",
                  "sSortDesc": "sorting_desc",
                  "sSortable": "sorting",
                  "sSortableAsc": "sorting_asc_disabled",
                  "sSortableDesc": "sorting_desc_disabled",
                  "sSortableNone": "sorting_disabled",
                  "sSortColumn": "sorting_",
                  "sFilterInput": "",
                  "sLengthSelect": "",
                  "sScrollWrapper": "dataTables_scroll",
                  "sScrollHead": "dataTables_scrollHead",
                  "sScrollHeadInner": "dataTables_scrollHeadInner",
                  "sScrollBody": "dataTables_scrollBody",
                  "sScrollFoot": "dataTables_scrollFoot",
                  "sScrollFootInner": "dataTables_scrollFootInner",
                  "sHeaderTH": "",
                  "sFooterTH": "",
                  "sSortJUIAsc": "",
                  "sSortJUIDesc": "",
                  "sSortJUI": "",
                  "sSortJUIAscAllowed": "",
                  "sSortJUIDescAllowed": "",
                  "sSortJUIWrapper": "",
                  "sSortIcon": "",
                  "sJUIHeader": "",
                  "sJUIFooter": "",
                  "_hungarianMap": {}
                },
                "bFiltered": false,
                "bSorted": false,
                "bSortCellsTop": false,
                "oInit": {
                  "data": [
                    [
                      "Actual Safety",
                      "Loss of Human Life (per 100,000 people)",
                      "United States",
                      " 3.5 ",
                      " 100,000 "
                    ],
                    [
                      "",
                      "Property Crime (per 1,000 households)",
                      "United States",
                      "101.4",
                      " 1,000 "
                    ]
                  ],
                  "columns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ],
                  "select": {
                    "style": "single",
                    "items": "row"
                  },
                  "aaData": [
                    [
                      "Actual Safety",
                      "Loss of Human Life (per 100,000 people)",
                      "United States",
                      " 3.5 ",
                      " 100,000 "
                    ],
                    [
                      "",
                      "Property Crime (per 1,000 households)",
                      "United States",
                      "101.4",
                      " 1,000 "
                    ]
                  ],
                  "aoColumns": [
                    {
                      "title": "Indicator",
                      "sTitle": "Indicator"
                    },
                    {
                      "title": "Metric",
                      "sTitle": "Metric"
                    },
                    {
                      "title": "Location",
                      "sTitle": "Location"
                    },
                    {
                      "title": "Score",
                      "sTitle": "Score"
                    },
                    {
                      "title": "Total Score",
                      "sTitle": "Total Score"
                    }
                  ]
                },
                "aoDestroyCallback": [],
                "oInstance": {
                  "0": {},
                  "length": 1,
                  "internal": {},
                  "oApi": {}
                },
                "sInstance": "CSVtableSafety",
                "iTabIndex": 0,
                "nScrollHead": null,
                "nScrollFoot": null,
                "aLastSort": [
                  {
                    "src": 0,
                    "col": 0,
                    "dir": "asc",
                    "index": 0,
                    "type": "html"
                  }
                ],
                "oPlugins": {},
                "rowId": "DT_RowId",
                "oApi": {},
                "renderer": null,
                "iInitDisplayStart": -1,
                "nHolding": null,
                "nTableReinsertBefore": {},
                "_select": {
                  "selector": "td, th",
                  "items": "row",
                  "style": "single",
                  "blurable": false,
                  "toggleable": true,
                  "info": true,
                  "className": "selected"
                },
                "_drawHold": false,
                "_bInitComplete": true
              }
            ],
            "length": 2,
            "selector": {
              "rows": "",
              "cols": null,
              "opts": {
                "search": "none",
                "order": "current",
                "page": "all"
              }
            },
            "ajax": {
              "__dt_wrapper": true
            }
          }

        expect(createResultsFromCSVTableSocial(table_rows_data)).to.deep.equal({ indicator: 'Actual Safety', result: 5.14 });
    });
});

describe.skip('testing the calculation of indicator values Ecomomic', function () {

  it('should not provide values', function () {

      let table = null;
      expect(createResultsFromCSVTableEconomic(table)).to.be.null;
  });

  it('should not provide values - wrong length', function () {

      let table_rows_data = {          
          "0": [
            "",         
            "United States",
            "10",
            "10"
          ],
          "1": [
            "Cup Example",
            "",
            "United States",
            "10",
            "10"
          ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }

      expect(createResultsFromCSVTableEconomic(table_rows_data)).to.be.null;
  });

  it('should not provide values - wrong type', function () {

      let table_rows_data = {
          "0": [
            "",
            "",
            "United States",
            "HELLO!",
            "10"
          ],
          "1": [
            "Cup Example",
            "",
            "United States",
            "10",
            "10"
          ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }

      expect(createResultsFromCSVTableEconomic(table_rows_data)).to.be.null;
  });

  it('should provide value', function () {

      let table_rows_data = {
          "0": [
            "",
            "",
            "United States",
            "10",
            "10"
          ],
          "1": [
            "Cup Example",
            "",
            "United States",
            "10",
            "10"
          ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }

      expect(createResultsFromCSVTableEconomic(table_rows_data)).to.deep.equal({ indicator: 'Cup Example', result: 200});
  });

  it('should provide value - decimals', function () {

      let table_rows_data = {
          "0": [
            "",
            "",
            "United States",
            "10.0",
            "10.0"
          ],
          "1": [
            "Cup Example",
            "",
            "United States",
            "10.0",
            "10.0"
          ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  "_aSortData": [
                    "actual safety"
                  ],
                  "_aFilterData": [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  "_sFilterRow": "Actual Safety  Loss of Human Life (per 100,000 people)  United States   3.5    100,000 ",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ],
                  "_sFilterRow": "  Property Crime (per 1,000 households)  United States  101.4   1,000 ",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "90px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "277px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "91px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num-fmt",
                  "sWidth": "93.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableSafety",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableSafety",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }

      expect(createResultsFromCSVTableEconomic(table_rows_data)).to.deep.equal({ indicator: 'Cup Example', result: 200.00});
  });
});

describe.skip('testing the calculation of indicator values Environmental - Type 1', function () {

  it('should not provide values', function () {

      let table_rows_data = null;
      let type = 1;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.be.null;
  });

  it('should not provide values - wrong length', function () {

      let table_rows_data = {
        "0": [
          "",
          "United States",
          "10",
          "10"
        ],
        "1": [
          "Pup Example",
          "",
          "United States",
          "10",
          "10"
        ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 1;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.be.null;
  });

  it('should not provide values - wrong type', function () {

      let table_rows_data = {
        "0": [
          "",
          "",
          "United States",
          "HELLO!",
          "10"
        ],
        "1": [
          "Pup Example",
          "",
          "United States",
          "10",
          "10"
        ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 1;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.be.null;
  });

  it('should provide value', function () {

      let table_rows_data = {
        "0": [
          "",
          "",
          "United States",
          "10",
          "10"
        ],
        "1": [
          "Pup Example",
          "",
          "United States",
          "10",
          "10"
        ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 1;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.deep.equal({ indicator: 'Pup Example', result: 200});
  });

  it('should provide value - decimals', function () {

      let table_rows_data = {
          "0": [
            "",
            "",
            "United States",
            "10",
            "10"
          ],
          "1": [
            "Pup Example",
            "",
            "United States",
            "10",
            "10"
          ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  "_aSortData": [
                    "actual safety"
                  ],
                  "_aFilterData": [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  "_sFilterRow": "Actual Safety  Loss of Human Life (per 100,000 people)  United States   3.5    100,000 ",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ],
                  "_sFilterRow": "  Property Crime (per 1,000 households)  United States  101.4   1,000 ",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "90px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "277px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "91px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num-fmt",
                  "sWidth": "93.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableSafety",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableSafety",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 1;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.deep.equal({ indicator: 'Pup Example', result: 200.00});
  });
});

describe.skip('testing the calculation of indicator values Environmental - Type 3', function () {

  it('should not provide values', function () {

      let table_rows_data = null;
      let type = 3;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.be.null;
  });

  it('should not provide values - wrong length', function () {

      let table_rows_data = {
        "0": [
          "",          
          "United States",
          "10",
          "10",
          "10"
        ],
        "1": [
          "Pup Example",
          "",
          "United States",
          "10",
          "10",
          "10"
        ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 3;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.be.null;
  });

  it('should not provide values - wrong type', function () {

      let table_rows_data = {
        "0": [
          "",
          "",
          "United States",
          "HELLO!",
          "10",
          "10"
        ],
        "1": [
          "Pup Example",
          "",
          "United States",
          "10",
          "10",
          "10"
        ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 3;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.be.null;
  });

  it('should provide value', function () {

      let table_rows_data = {
        "0": [
          "",
          "",
          "United States",
          "10",
          "10",
          "10"
        ],
        "1": [
          "Pup Example",
          "",
          "United States",
          "10",
          "10",
          "10"
        ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_aSortData": [
                    "basic education"
                  ],
                  "_aFilterData": [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  "_sFilterRow": "Basic Education  Math Skills (out of 500 score)  United States  240  500",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ],
                  "_sFilterRow": "  Reading Skills (out of 500 score)  United States  222  500",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "109.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "247px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "92.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num",
                  "sWidth": "100.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableLifeExpectancy",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Basic Education",
                    "Math Skills (out of 500 score)",
                    "United States",
                    "240",
                    "500"
                  ],
                  [
                    "",
                    "Reading Skills (out of 500 score)",
                    "United States",
                    "222",
                    "500"
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableLifeExpectancy",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 3;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.deep.equal({ indicator: 'Pup Example', result: 2000});
  });

  it('should provide value - decimals', function () {

      let table_rows_data = {
          "0": [
            "",
            "",
            "United States",
            "10.0",
            "10.0",
            "10.0"
          ],
          "1": [
            "Pup Example",
            "",
            "United States",
            "10.0",
            "10.0",
            "10.0"
          ],
          "context": [
            {
              "oFeatures": {
                "bAutoWidth": true,
                "bDeferRender": false,
                "bFilter": true,
                "bInfo": true,
                "bLengthChange": true,
                "bPaginate": true,
                "bProcessing": false,
                "bServerSide": false,
                "bSort": true,
                "bSortMulti": true,
                "bSortClasses": true,
                "bStateSave": null
              },
              "oScroll": {
                "bCollapse": false,
                "iBarWidth": 17,
                "sX": "",
                "sXInner": "",
                "sY": ""
              },
              "oLanguage": {
                "fnInfoCallback": null,
                "oAria": {
                  "sSortAscending": ": activate to sort column ascending",
                  "sSortDescending": ": activate to sort column descending",
                  "_hungarianMap": {
                    "sortAscending": "sSortAscending",
                    "sortDescending": "sSortDescending"
                  }
                },
                "oPaginate": {
                  "sFirst": "First",
                  "sLast": "Last",
                  "sNext": "Next",
                  "sPrevious": "Previous",
                  "_hungarianMap": {
                    "first": "sFirst",
                    "last": "sLast",
                    "next": "sNext",
                    "previous": "sPrevious"
                  }
                },
                "sEmptyTable": "No data available in table",
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",
                "sInfoFiltered": "(filtered from _MAX_ total entries)",
                "sInfoPostFix": "",
                "sDecimal": "",
                "sThousands": ",",
                "sLengthMenu": "Show _MENU_ entries",
                "sLoadingRecords": "Loading...",
                "sProcessing": "Processing...",
                "sSearch": "Search:",
                "sSearchPlaceholder": "",
                "sUrl": "",
                "sZeroRecords": "No matching records found",
                "_hungarianMap": {
                  "aria": "oAria",
                  "paginate": "oPaginate",
                  "emptyTable": "sEmptyTable",
                  "info": "sInfo",
                  "infoEmpty": "sInfoEmpty",
                  "infoFiltered": "sInfoFiltered",
                  "infoPostFix": "sInfoPostFix",
                  "decimal": "sDecimal",
                  "thousands": "sThousands",
                  "lengthMenu": "sLengthMenu",
                  "loadingRecords": "sLoadingRecords",
                  "processing": "sProcessing",
                  "search": "sSearch",
                  "searchPlaceholder": "sSearchPlaceholder",
                  "url": "sUrl",
                  "zeroRecords": "sZeroRecords"
                }
              },
              "oBrowser": {
                "bScrollOversize": false,
                "bScrollbarLeft": false,
                "bBounding": true,
                "barWidth": 17
              },
              "ajax": null,
              "aanFeatures": [],
              "aoData": [
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  "_aSortData": [
                    "actual safety"
                  ],
                  "_aFilterData": [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  "_sFilterRow": "Actual Safety  Loss of Human Life (per 100,000 people)  United States   3.5    100,000 ",
                  "_sRowStripe": "even",
                  "src": "data",
                  "idx": 0
                },
                {
                  "nTr": {},
                  "anCells": [
                    {},
                    {},
                    {},
                    {},
                    {}
                  ],
                  "_aData": [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ],
                  "_aSortData": [
                    ""
                  ],
                  "_aFilterData": [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ],
                  "_sFilterRow": "  Property Crime (per 1,000 households)  United States  101.4   1,000 ",
                  "_sRowStripe": "odd",
                  "src": "data",
                  "idx": 1
                }
              ],
              "aiDisplay": [
                1,
                0
              ],
              "aiDisplayMaster": [
                1,
                0
              ],
              "aIds": {},
              "aoColumns": [
                {
                  "idx": 0,
                  "aDataSort": [
                    0
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 0,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Indicator",
                  "sType": "html",
                  "sWidth": "90px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Indicator"
                },
                {
                  "idx": 1,
                  "aDataSort": [
                    1
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 1,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Metric",
                  "sType": "string",
                  "sWidth": "277px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Metric"
                },
                {
                  "idx": 2,
                  "aDataSort": [
                    2
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 2,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Location",
                  "sType": "string",
                  "sWidth": "91px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Location"
                },
                {
                  "idx": 3,
                  "aDataSort": [
                    3
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 3,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Score",
                  "sType": "num",
                  "sWidth": "51.00000000000001px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Score"
                },
                {
                  "idx": 4,
                  "aDataSort": [
                    4
                  ],
                  "asSorting": [
                    "asc",
                    "desc"
                  ],
                  "bSearchable": true,
                  "bSortable": true,
                  "bVisible": true,
                  "_sManualType": null,
                  "_bAttrSrc": false,
                  "fnCreatedCell": null,
                  "mData": 4,
                  "mRender": null,
                  "nTh": {},
                  "nTf": null,
                  "sClass": "",
                  "sContentPadding": "",
                  "sDefaultContent": null,
                  "sName": "",
                  "sSortDataType": "std",
                  "sSortingClass": "sorting",
                  "sSortingClassJUI": "",
                  "sTitle": "Total Score",
                  "sType": "num-fmt",
                  "sWidth": "93.99999999999999px",
                  "sWidthOrig": null,
                  "iDataSort": -1,
                  "sCellType": "td",
                  "_hungarianMap": {
                    "dataSort": "iDataSort",
                    "sorting": "asSorting",
                    "searchable": "bSearchable",
                    "sortable": "bSortable",
                    "visible": "bVisible",
                    "createdCell": "fnCreatedCell",
                    "data": "mData",
                    "render": "mRender",
                    "cellType": "sCellType",
                    "class": "sClass",
                    "contentPadding": "sContentPadding",
                    "defaultContent": "sDefaultContent",
                    "name": "sName",
                    "sortDataType": "sSortDataType",
                    "title": "sTitle",
                    "type": "sType",
                    "width": "sWidth"
                  },
                  "_setter": null,
                  "title": "Total Score"
                }
              ],
              "aoHeader": [
                [
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  },
                  {
                    "cell": {},
                    "unique": true
                  }
                ]
              ],
              "aoFooter": [],
              "oPreviousSearch": {
                "bCaseInsensitive": true,
                "sSearch": "",
                "bRegex": false,
                "bSmart": true,
                "_hungarianMap": {
                  "caseInsensitive": "bCaseInsensitive",
                  "search": "sSearch",
                  "regex": "bRegex",
                  "smart": "bSmart"
                }
              },
              "aoPreSearchCols": [
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                },
                {
                  "bCaseInsensitive": true,
                  "sSearch": "",
                  "bRegex": false,
                  "bSmart": true
                }
              ],
              "aaSorting": [
                [
                  0,
                  "asc"
                ]
              ],
              "aaSortingFixed": [],
              "asStripeClasses": [
                "odd",
                "even"
              ],
              "asDestroyStripes": [],
              "sDestroyWidth": "",
              "aoRowCallback": [],
              "aoHeaderCallback": [],
              "aoFooterCallback": [],
              "aoDrawCallback": [
                {},
                {
                  "sName": "sc"
                },
                {
                  "sName": "information"
                },
                {
                  "sName": "pagination"
                }
              ],
              "aoRowCreatedCallback": [
                {
                  "sName": "select-deferRender"
                }
              ],
              "aoPreDrawCallback": [],
              "aoInitComplete": [],
              "aoStateSaveParams": [],
              "aoStateLoadParams": [],
              "aoStateLoaded": [],
              "sTableId": "CSVtableSafety",
              "nTable": {},
              "nTHead": {},
              "nTFoot": null,
              "nTBody": {},
              "nTableWrapper": {},
              "bDeferLoading": false,
              "bInitialised": true,
              "aoOpenRows": [],
              "sDom": "lfrtip",
              "searchDelay": null,
              "sPaginationType": "simple_numbers",
              "iStateDuration": 7200,
              "aoStateSave": [],
              "aoStateLoad": [],
              "oSavedState": null,
              "oLoadedState": null,
              "sAjaxSource": null,
              "sAjaxDataProp": "data",
              "bAjaxDataGet": true,
              "jqXHR": null,
              "fnServerData": null,
              "aoServerParams": [],
              "sServerMethod": "GET",
              "aLengthMenu": [
                10,
                25,
                50,
                100
              ],
              "iDraw": 1,
              "bDrawing": false,
              "iDrawError": -1,
              "_iDisplayLength": 10,
              "_iDisplayStart": 0,
              "_iRecordsTotal": 0,
              "_iRecordsDisplay": 0,
              "oClasses": {
                "sTable": "dataTable",
                "sNoFooter": "no-footer",
                "sPageButton": "paginate_button",
                "sPageButtonActive": "current",
                "sPageButtonDisabled": "disabled",
                "sStripeOdd": "odd",
                "sStripeEven": "even",
                "sRowEmpty": "dataTables_empty",
                "sWrapper": "dataTables_wrapper",
                "sFilter": "dataTables_filter",
                "sInfo": "dataTables_info",
                "sPaging": "dataTables_paginate paging_",
                "sLength": "dataTables_length",
                "sProcessing": "dataTables_processing",
                "sSortAsc": "sorting_asc",
                "sSortDesc": "sorting_desc",
                "sSortable": "sorting",
                "sSortableAsc": "sorting_asc_disabled",
                "sSortableDesc": "sorting_desc_disabled",
                "sSortableNone": "sorting_disabled",
                "sSortColumn": "sorting_",
                "sFilterInput": "",
                "sLengthSelect": "",
                "sScrollWrapper": "dataTables_scroll",
                "sScrollHead": "dataTables_scrollHead",
                "sScrollHeadInner": "dataTables_scrollHeadInner",
                "sScrollBody": "dataTables_scrollBody",
                "sScrollFoot": "dataTables_scrollFoot",
                "sScrollFootInner": "dataTables_scrollFootInner",
                "sHeaderTH": "",
                "sFooterTH": "",
                "sSortJUIAsc": "",
                "sSortJUIDesc": "",
                "sSortJUI": "",
                "sSortJUIAscAllowed": "",
                "sSortJUIDescAllowed": "",
                "sSortJUIWrapper": "",
                "sSortIcon": "",
                "sJUIHeader": "",
                "sJUIFooter": "",
                "_hungarianMap": {}
              },
              "bFiltered": false,
              "bSorted": false,
              "bSortCellsTop": false,
              "oInit": {
                "data": [
                  [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ]
                ],
                "columns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ],
                "select": {
                  "style": "single",
                  "items": "row"
                },
                "aaData": [
                  [
                    "Actual Safety",
                    "Loss of Human Life (per 100,000 people)",
                    "United States",
                    " 3.5 ",
                    " 100,000 "
                  ],
                  [
                    "",
                    "Property Crime (per 1,000 households)",
                    "United States",
                    "101.4",
                    " 1,000 "
                  ]
                ],
                "aoColumns": [
                  {
                    "title": "Indicator",
                    "sTitle": "Indicator"
                  },
                  {
                    "title": "Metric",
                    "sTitle": "Metric"
                  },
                  {
                    "title": "Location",
                    "sTitle": "Location"
                  },
                  {
                    "title": "Score",
                    "sTitle": "Score"
                  },
                  {
                    "title": "Total Score",
                    "sTitle": "Total Score"
                  }
                ]
              },
              "aoDestroyCallback": [],
              "oInstance": {
                "0": {},
                "length": 1,
                "internal": {},
                "oApi": {}
              },
              "sInstance": "CSVtableSafety",
              "iTabIndex": 0,
              "nScrollHead": null,
              "nScrollFoot": null,
              "aLastSort": [
                {
                  "src": 0,
                  "col": 0,
                  "dir": "asc",
                  "index": 0,
                  "type": "html"
                }
              ],
              "oPlugins": {},
              "rowId": "DT_RowId",
              "oApi": {},
              "renderer": null,
              "iInitDisplayStart": -1,
              "nHolding": null,
              "nTableReinsertBefore": {},
              "_select": {
                "selector": "td, th",
                "items": "row",
                "style": "single",
                "blurable": false,
                "toggleable": true,
                "info": true,
                "className": "selected"
              },
              "_drawHold": false,
              "_bInitComplete": true
            }
          ],
          "length": 2,
          "selector": {
            "rows": "",
            "cols": null,
            "opts": {
              "search": "none",
              "order": "current",
              "page": "all"
            }
          },
          "ajax": {
            "__dt_wrapper": true
          }
        }
      let type = 3;
      expect(createResultsFromCSVTableEnvironmental(table_rows_data,type)).to.deep.equal({ indicator: 'Pup Example', result: 2000.00});
  });
});

describe.skip('testing the calculation of indicator values from createResultsFromCustomTableSocial', function () {

    it('should not provide values - empty arrays', function () {

        let metrics = 0;
        let countries = []; 
        let score = [];
        let totalScore = [];

        expect(createResultsFromCustomTableSocial(metrics, countries, score, totalScore)).to.be.null;
    });

    it('should not provide values - null arrays', function () {

        let metrics = null;
        let countries = null; 
        let score = null;
        let totalScore = null;

        expect(createResultsFromCustomTableSocial(metrics, countries, score, totalScore)).to.be.null;
    });

    it('should not provide values - string values in score & totalScore', function () {

        let metrics = 2;
        let countries = [ "USA", "USA" ]; 
        let score = [ "222", "100" ];
        let totalScore = [ "HELLO!", "500" ];

        expect(createResultsFromCustomTableSocial(metrics, countries, score, totalScore)).to.be.null;
    });

    it('should provide values', function () {

        let metrics = 2;
        let countries = [ "USA", "USA" ]; 
        let score = [ "222", "240" ];
        let totalScore = [ "500", "500" ];

        expect(createResultsFromCustomTableSocial(metrics, countries, score, totalScore)).to.deep.equal(106.88);
    });
});

describe.skip('testing the calculation of indicator values from createResultsFromCustomTableEconomic', function () {

  it('should not provide values - empty arrays', function () {

      let metrics = 0;
      let countries = []; 
      let masses = [];
      let costs = [];

      expect(createResultsFromCustomTableEconomic(masses, costs)).to.be.null;
  });

  it('should not provide values - null arrays', function () {

      let metrics = null;
      let countries = null; 
      let masses = null;
      let costs = null;

      expect(createResultsFromCustomTableEconomic(masses, costs)).to.be.null;
  });

  it('should not provide values - string values in mass & cost', function () {

      let metrics = 2;
      let countries = [ "USA", "USA" ]; 
      let masses = [ "10", "10" ];
      let costs = [ "HELLO!", "10" ];

      expect(createResultsFromCustomTableEconomic(masses, costs)).to.be.null;
  });

  it('should provide values', function () {

      let metrics = 2;
      let countries = [ "USA", "USA" ]; 
      let masses = [ "10", "10" ];
      let costs = [ "10", "10" ];

      expect(createResultsFromCustomTableEconomic(masses, costs)).to.deep.equal(200);
  });
});


describe('testing the calculation of indicator values from createResultsFromCustomTableEnvironmental', function () {

  it('should not provide values - empty arrays', function () {

      let metrics = 0;
      let countries = []; 
      let masses = [];
      let costs = [];
      let distances = [];

      expect(createResultsFromCustomTableEnvironmental(masses, costs, distances)).to.be.null;
  });

  it('should not provide values - null arrays', function () {

      let metrics = null;
      let countries = null; 
      let masses = null;
      let costs = null;
      let distances = null;

      expect(createResultsFromCustomTableEnvironmental(masses, costs, distances)).to.be.null;
  });

  it('should not provide values - string values in mass & cost & distance', function () {

      let metrics = 2;
      let countries = [ "USA", "USA" ]; 
      let masses = [ "10", "10" ];
      let costs = [ "10", "10" ];
      let distances = ["HELLO!", "10"];

      expect(createResultsFromCustomTableEnvironmental(masses, costs, distances)).to.be.null;
  });

  it('should provide values', function () {

      let metrics = 2;
      let countries = [ "USA", "USA" ]; 
      let masses = [ "10", "10" ];
      let costs = [ "10", "10" ];
      let distances = ["10", "10"];

      expect(createResultsFromCustomTableEnvironmental(masses, costs, distances)).to.deep.equal(2000);
  });
});