import { order, filterByGender, filterByStatus } from '../src/data.js';
import charactersData from '../src/data/rickandmorty/rickandmorty.js';
import { outputAscending, outputDescending, outputFemaleFilter, outputAliveFilter } from '../src/data/rickandmorty/__mocks__/rickandmorty.js';

jest.mock("../src/data/rickandmorty/rickandmorty.js");


describe('Order: ', () => {

    it('should be an object', () => {
        expect(typeof order).toBe('object');
    });
  
    describe('order.ascending', () => {
    
        it('should be a function', () => {
            expect(typeof order.ascending).toBe('function');
        });
 
        it('should return an array in ascending order by name from an array without order', () => {
            expect(order.ascending(charactersData)).toEqual(outputAscending);
        });
    });

    describe('order.descending', () => {
    
        it('should be a function', () => {
            expect(typeof order.descending).toBe('function');
        });
 
        it('should return an array in descending order by name from an array without order', () => {
            expect(order.descending(charactersData)).toEqual(outputDescending);
        });
    });

});


describe('Filter by Gender: ', () => {

    it('should be a function', () => {
        expect(typeof filterByGender).toBe('function');
    });

    it('should return an array only of female characters', () => {
        expect(filterByGender('female')).toEqual(outputFemaleFilter);
    });

});


describe('Filter by Status: ', () => {

    it('should be a function', () => {
        expect(typeof filterByStatus).toBe('function');
    });

    it('should return an array only of alive characters', () => {
        
        expect(filterByStatus('alive')).toEqual(outputAliveFilter);
    });

});



