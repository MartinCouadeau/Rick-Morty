const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET rickandmorty/{id}", () => {
        it("Responde con status: 200", () => {
            agent.get('/rickandmorty/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
            await agent.get('/rickandmorty/character/1').then((res) => {
                const keys = Object.keys(res.body)
                expect(keys).toContain("id")
                expect(keys).toContain("name")
                expect(keys).toContain("species")
                expect(keys).toContain("gender")
                expect(keys).toContain("image")
            })
        })
        it("Si hay un error responde con status: 500", () => {
            agent.get('/rickandmorty/IDqueNoExiste').expect(500);
        })
    })
})