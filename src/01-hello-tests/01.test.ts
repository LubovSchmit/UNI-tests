import {splitIntoWords, sum} from './01';
import {mult} from './01';



test('sum should be correct', () => {
    //data

    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = sum(a,b);
    const result2 = sum(a,c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
})



test('multiply should be correct', () => {
        //data

        const a = 1;
        const b = 2;
        const c = 3;

        //action
        const result1 = mult(a,b);
        const result2 = mult(a,c);

        //expect result
        expect(result1).toBe(2);
        expect(result2).toBe(3);
    })



test('splitting into words should be correct', () => {
    //data
    const sent1 = 'Hello my friends';
    const sent2 = 'JS is the best language';

    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expect result
    expect(result1.length).toBe(3);
    expect(result1[0].length).toBe(5);
    expect(result1[1].length).toBe('my');
    expect(result1[2].length).toBe('friends');

    expect(result2.length).toBe(5)
    expect(result2[0].length).toBe('JS');
    expect(result2[1].length).toBe('is');
    expect(result2[2].length).toBe('the');
    expect(result2[3].length).toBe('best');
    expect(result2[4].length).toBe('language');


})
