import {StudentType} from '../02-hello-tests/02';
import {addSkill} from './03';
import {doesStudentLiveIn} from './03'

let student: StudentType;
beforeEach(  () => {
    student = {
        id: 21,
        name: 'Luba',
        age: 36,
        isActive: true || false,
        address: {
            id: 22,
            streetTitle: 'Surganova 12',
            city: {
                id: 23,
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }

        ]
    }
})

test('new tech skill should be added to student', () => {
        expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

        expect(student.technologies.length).toBe(4);
        expect(student.technologies[3].title).toBe('JS');
        expect(student.technologies[3].id).toBeDefined();

})

// здесь результата нет, функция модифицирует объект

test('Does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

