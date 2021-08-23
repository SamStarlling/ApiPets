module.exports = class CatsDao{

    constructor(bd){
        this.bd = bd
    }


    VerCats(){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM CATS'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao acessar o BD. ${error}`)
                else resolve(response)
            })
        })
    }

    VerUmCat(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM CATS WHERE ID= (?)'
            this.bd.all(query, id,(error, response)=>{
                if(error) reject(`Erro ao acessar o BD. ${error}`)
                else resolve(response)
            } )
        })
    }

    NewCat(infos){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO CATS (FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8]]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar Cat. ${error}`)
                else resolve('Cat adicionado com sucesso')
            })
        })
    }

    DeleteCats(id){
        return new Promise((resolve, reject)=>{
            const query = 'DELETE FROM CATS WHERE ID = (?)'
            this.bd.run(query, id, (error, response)=>{
                if(error) reject(`Erro ao excluir Cat. ${error}`)
                else resolve("Cat excluido")
            })
        })
    }

    EditCat(infos, id){
        return new Promise((resolve, reject)=>{
            const query = 'UPDATE CATS SET  FOTO = (?), IDADE = (?), NOME = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8],id]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao editar Cat. ${error}`)
                else resolve("Cat Editado")
            })
        })
    }
}