const usuarioService = require('../services/usuario');

const findAllUsuarioController = async (req, res) => {
  try{
    res.send(await usuarioService.findUsuarioService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findUsuarioByIdController = async (req, res) => {
  try{
    const user = await usuarioService.findUsuarioByIdService(req.params.id);

    if(!user){
      res.status(404).send({message: "Usuário não encontrado, tente novamente!"});
    }else{
      res.status(200).send(user);
    }
    
  } catch (err) {
    if(err){
      console.log(err.kind == "ObjectId");
      return res.status(400).send({message: "ID informado está errado, tente novamente"});
    }
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createUsuarioController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      createdAt: new Date(),
    }
    res.send(await usuarioService.createUsuarioService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updateUsuarioController = async (req, res) => {
  try{
    res.send(await usuarioService.updateUsuarioService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deleteUsuarioController = async (req, res) => {
  try{
    const del = await usuarioService.deleteUsuarioService(req.params.id);
    if(del.deletedCount > 0 ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Usuario não encontrado para deletar' });
    }
    
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const addUserEnderecoController = async (req,res) =>{
  try{
    //req.body.id = uuidv4();
    req.body.createdAt = new Date();
    const endereco = await usuarioService.addUserEnderecoService(req.params.id,req.body);

    if(endereco.ok == 1){
      res.status(200).send({ message: 'endereco adicionado com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

const removeUserEnderecoController = async (req,res) =>{
  try{
    const endereco = await usuarioService.removeUserEnderecoService(req.body.id,req.body.idEndereco);

    if(endereco.ok == 1){
      res.status(200).send({ message: 'endereco removido com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

const addUserFavProdutoController = async (req,res) =>{
  try{
    req.body.createdAt = new Date();
    const produto = await usuarioService.addUserFavProdutoService(req.params.id,req.body);

    if(produto.ok == 1 && produto.value != null){
      res.status(200).send({ message: 'produto favorito adicionado com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

const removeUserFavProdutoController = async (req,res) =>{
  try{
    const produto = await usuarioService.removeUserFavProdutoService(req.body);

    if(produto.ok == 1 && produto.value != null){
      res.status(200).send({ message: 'produto favorito removido com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

module.exports = {
    findAllUsuarioController,
    findUsuarioByIdController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController,
    addUserEnderecoController,
    removeUserEnderecoController,
    addUserFavProdutoController,
    removeUserFavProdutoController
};