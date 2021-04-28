import {StudentType} from '../02-hello-tests/02'


export const sum = (a: number, b: number) => {
    return a + b;
}
// чистая функция, которая не может менять данные


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

// здесь результата нет, функция модифицирует объект


export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}
