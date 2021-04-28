import {CityType} from './02/02_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 102, street: {title: 'Little street'}}
            }
        ],
        governmentBuildings: [],
        citizensNumber: 100000
    }
})

//01 Создайте тип CityType
//02 Заполните объект City, чтобы тесты ниже прошли
test('test should contains 3 houses', () => {
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(101);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(102);
    expect(city.houses[2].address.street.title).toBe('Little street');
})

//01 дополните тип governmentBuildingsЕнзу2
//02 заполните объект city , чтобы тесты ниже прошли
test.skip('test city contains hospital and fire station', () => {
    expect(city.houses.length).toBe(3);


})