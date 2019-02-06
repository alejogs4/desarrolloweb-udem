var pets = ['cat', 'dog', 'rat']

pets.forEach((pet, index) => {
    pets[index] = pets[index] + 's'
})

console.log(pets)