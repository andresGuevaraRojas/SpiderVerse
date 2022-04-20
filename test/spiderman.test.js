describe("Unit Test for Spiderman Class",()=>{
    test("Tes 1) Create a spiderman object",()=>{
        const andrewGarfield = new spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")

        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(31)
        expect(andrewGarfield.studio).toBe("Sony")
    })
})