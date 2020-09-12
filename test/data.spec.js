import { filterByGender, anotherExample } from '../src/data.js';

jest.mock("../src/data/rickandmorty/rickandmorty.js");

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  
  it.only('returns `example`', () => {
    console.log(filterByGender("male").length);
    expect(filterByGender("male")).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
