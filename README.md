# italents

API Market Place desenvolvido para implementação de todos os conceitos estudados em Backend

## Endpoints

### Usuarios

Exemplo de OBJ do usuario:
```json
{
  "_id": {
    "$oid": "631f8ec059a1b20987de47eb"
  },
  "nome": "Leonardo Ruiz Orabona",
  "email": "leo@node.com.br",
  "senha": "$2b$10$4VN/zxPXjvscO6NqphMpyOlQYmITYV1cr4Hivc1GFp8ZJfPtByp5i",
  "imagem": "img.com.br/perfil1234.jpg",
  "enderecos": [
    {
      "rua": "rua teste",
      "numero": 123,
      "complemento": "casa",
      "CEP": "123.123-90",
      "createdAt": {
        "$date": {
          "$numberLong": "1663029385647"
        }
      },
      "_id": {
        "$oid": "631fd0898482883e8b5fa2e2"
      }
    },
  ],
  "createdAt": {
    "$date": {
      "$numberLong": "1663012544017"
    }
  },
  "produtos_fav": [
    {
      "_id": {
        "$oid": "631a13b1e3b91636bfdc35ae"
      },
      "createdAt": {
        "$date": {
          "$numberLong": "1663274594145"
        }
      }
    }
  ],
  "admin": false,
  "__v": 0
}
```


Todos os endpoints relacionados com usuario

/findAll

Retorna todos os usuarios presentes no banco de dados

- 200
  Ok, retorno completo
- 404
  Usuarios nao encontrados

/find/:id

Retorna um usuario especifico ao passarmos um ID correto por parametro


| Codigo HTTP | Mensagem  | Retorno                                                 |
| ------------- | ----------- | --------------------------------------------------------- |
| 200         | OK        | OBJ usuario completo                                    |
| 404         | Not Found | {message: "Usuário não encontrado, tente novamente!"} |
| 400         | Bad Request | {message: "ID informado está errado, tente novamente"} |

### Produtos

Todos os endpoints relacionados com produtos
