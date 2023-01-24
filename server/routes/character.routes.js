const CharacterController = require('../controllers/character.controllers')



module.exports = (app) => {
    app.post('/api/createCharacter',CharacterController.createCharacter)
    app.put('/api/updateCharacter/:id',CharacterController.updateCharacter)
    app.delete('/api/deleteCharacter/:id',CharacterController.deleteCharacter)
    app.get('/api/getAllCharacters',CharacterController.getAllCharacters)
    app.get('/api/oneCharacter/:id',CharacterController.getOneCharacter)
}