module.exports = class DogsDao{

    constructor(bd){
        this.bd = bd
    }


    VerDogs(){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM DOGS'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao acessar o BD. ${error}`)
                else resolve(response)
            })
        })
    }

    VerUmDog(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM DOGS WHERE ID= (?)'
            this.bd.all(query, id,(error, response)=>{
                if(error) reject(`Erro ao acessar o BD. ${error}`)
                else resolve(response)
            } )
        })
    }

    NewDog(infos){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO DOGS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9]]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar dog. ${error}`)
                else resolve('Dog adicionado com sucesso')
            })
        })
    }

    DeleteDogs(id){
        return new Promise((resolve, reject)=>{
            const query = 'DELETE FROM DOGS WHERE ID = (?)'
            this.bd.run(query, id, (error, response)=>{
                if(error) reject(`Erro ao excluir dog. ${error}`)
                else resolve("Dog excluido")
            })
        })
    }

    EditDog(infos, id){
        return new Promise((resolve, reject)=>{
            const query = 'UPDATE DOGS SET RACA = (?), FOTO = (?), IDADE = (?), NOME = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'
            const parametros = [infos[0], infos[1], infos[2], infos[3], infos[4], infos[5], infos[6], infos[7], infos[8], infos[9],id]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao editar dog. ${error}`)
                else resolve("Dog Editado")
            })
        })
    }
}