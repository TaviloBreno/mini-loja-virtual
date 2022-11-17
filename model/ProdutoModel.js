const db = require('../banco/db.Conexao');

module.exports = class ProdutoModel{
    static getTodos(callback){
       return db.query("SELECT * FROM produto", callback);
    }
}