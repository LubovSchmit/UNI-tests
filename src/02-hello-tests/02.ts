type LocalCityType = {
    id: number
    title: string
    country: string
}

type AddressType = {
    id: number
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}


export const student: StudentType = {
    id: 21,
    name: 'Luba',
    age: 36,
    isActive: false,
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
/* console.log(student.age)*/
