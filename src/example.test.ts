import { sum } from './example';

describe('example test', () => {
    
    it('1 + 1 should be 2', () => {
        expect(sum(1, 1)).toBe(2)
    })

})