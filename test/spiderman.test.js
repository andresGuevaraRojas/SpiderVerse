const Spiderman = require('../app/Spiderman')

describe("Unit Test for Spiderman Class",()=>{
    test("Tes 1) Create a spiderman object",()=>{
        const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")

        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })
    test("Test 2) Use the method getInfo()",()=>{
        const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",4,"Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    })
})