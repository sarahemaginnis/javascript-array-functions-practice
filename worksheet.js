const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) => {return character.name})
console.log(names)
//2. Get array of all heights
const heights = characters.map((character) => {return character.height})
console.log(heights)
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({name: character.name, height: character.height}))
console.log(minifiedRecords)
//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(' ')[0])
console.log(firstNames)

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter((character) => {
    return character.mass > 100
})
console.log(greater100Characters)
//2. Get characters with height less than 200
const less200Characters = characters.filter((character) => {
    return character.height < 200
})
console.log(less200Characters)
//3. Get all male characters
const maleCharacters = characters.filter((character) => {
    return character.gender === 'male'
})
console.log(maleCharacters)
//4. Get all female characters
const femaleCharacters = characters.filter((character) => {
    return character.gender === 'female'
})
console.log(femaleCharacters)

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
const oneMaleCharacter = characters.some((character) => character.gender === 'male')
console.log(oneMaleCharacter)
//2. Is there at least one character with blue eyes?
const oneBlueEyedCharacter = characters.some((character) => character.eye_color === 'blue')
console.log(oneBlueEyedCharacter)
//3. Is there at least one character taller than 210?
const oneTallCharacter = characters.some((character) => character.height > 210)
console.log(oneTallCharacter)
//4. Is there at least one character that has mass less than 50?
const oneLightCharacter = characters.some((character) => character.mass < 50)
console.log(oneLightCharacter)