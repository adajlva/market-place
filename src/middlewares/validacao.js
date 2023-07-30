
const validaUsuario = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: "O campo nome deve ser preenchido"});
    }
    if(!req.body.email){
        return res.status(400).send({ message: "O campo email deve ser preenchido"});
    }
    if(!req.body.senha){
        return res.status(400).send({ message: "O campo senha deve ser preenchido"});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: "O campo imagem deve ser preenchido"});
    }
    return next();
} 

const validaEndereco = (req, res, next) => {
    if(!req.body.rua){
        return res.status(400).send({ message: "O campo rua deve ser preenchido"});
    }
    if(!req.body.numero){
        return res.status(400).send({ message: "O campo numero deve ser preenchido"});
    }
    if(!req.body.CEP){
        return res.status(400).send({ message: "O campo CEP deve ser preenchido"});
    }
    return next();
}

const validaProduto = (req, res, next) => {
    if(!req.body.nome){
        return res.status(400).send({ message: "O campo nome deve ser preenchido"});
    }
    if(!req.body.descricao){
        return res.status(400).send({ message: "O campo descricao deve ser preenchido"});
    }
    if(!req.body.precoUni){
        return res.status(400).send({ message: "O campo precoUni deve ser preenchido"});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: "O campo imagem deve ser preenchido"});
    }
    if(!req.body.codigoBarra){
        return res.status(400).send({ message: "O campo codigoBarra deve ser preenchido"});
    }
    return next();
}

const validaPedido = (req, res, next) => {
    let campos = "";

    if(!req.body.precoTotal){
        campos += "precoTotal ";
    }
    if(!req.body.frete){
        campos += "frete ";
    }

    if(campos != ""){
        return res.status(400).send({message: `O(s) campo(s) ${campos}, deve(m) ser preenchido(s)`})
    }

    return next();
}
const validaCategoria = (req, res, next) => {
    
    if(!req.body.nome){
        return res.status(400).send({ message: "O campo nome deve ser preenchido"});
    }

    return next();
}

const validaCarrinho = (req, res, next) => {
    if(!req.body.precoTotal){
        return res.status(400).send({ message: "O campo precoTotal deve ser preenchido"});
    }
    if(!req.body.frete){
        return res.status(400).send({ message: "O campo frete deve ser preenchido"});
    }

    return next();
}

module.exports = {
    validaUsuario,
    validaEndereco,
    validaProduto,
    validaPedido,
    validaCategoria,
    validaCarrinho
}