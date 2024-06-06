const AppError = require("../utils/AppError")

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;

    if(!name){
      throw new AppError("Nome é obrigatório");
    }

    response.status(201).json({ name, email, password }) // Status code e opcional 
  }
}

module.exports = UsersController;






























//ANOTAÇÕES DA AULA CONTROLLERS DE NODEJS 


/*
* index - GET para listar varios registros.
* show - GET para exibir um registro especifico.
* create - POST para criar um registro.
* update - PUT para atualizar um registro.
* delete - DELETE para remover um registro.
* **OBS** - No maximo um controller pode ter 5 registros <- Boas praticas 
*/