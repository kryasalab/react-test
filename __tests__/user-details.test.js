/* eslint-env jest */

const fetchMock = require('fetch-mock');

describe('User Details Page', () => {

  it('fetch user details', async () => {

    fetchMock.get('https://api.myjson.com/bins/17n2mv', {employeeName:"Amelia",employmentType:"Consultant",countryOfResidence:"United Kingdom"});

    const asyncFetch =  async (url) => await fetch(url);
    const response = await asyncFetch('https://api.myjson.com/bins/17n2mv');
    const result = await response.json();
    expect(result.employeeName).toEqual("Amelia");
    expect(result.employmentType).toEqual("Consultant");
    expect(result.countryOfResidence).toEqual("United Kingdom");
  });
});