const Spiderman = require('../app/spiderman.js')

describe("Unit test for Spiderman class", () => {
    test('1)Create a spiderman object', () => {

      //Aqui escribimos el codigo que queremos tal cual
      //Quiero poder instanciar un objeto spiderman con esta informacion
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      //Validamos que este codigo funcione de la forma que se espera
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
  })

  test('2) Use the metod getInfo()', () => {


    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel",)

    expect(tomHolland.name).toBe("Spiderman Marvel")
    expect(tomHolland.age).toBe(25)
    expect(tomHolland.actor).toBe("Tom Holland")
    expect(tomHolland.movies).toBe(5)
    expect(tomHolland.studio).toBe("Marvel")

  
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
  });