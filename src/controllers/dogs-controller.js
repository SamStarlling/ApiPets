const DogsDao = require("../dao/dogs-dao");
module.exports = (app, bd) => {
  const DaoDogs = new DogsDao(bd);

  app.get("/pets/dogs", async (req, res) => {
    try {
      const respostaVerDogs = await DaoDogs.VerDogs();
      const resposta = organizaResposta(respostaVerDogs);
      res.status(200).json(
        {
          'results': resposta,
          'length': resposta.length
        }
      );
    } catch (error) {
        res.status(400).json({ message: error });
    }
  });

  app.get("/pets/dogs/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const respostaVerUmDog = await DaoDogs.VerUmDog(id);
      const resposta = organizaResposta(respostaVerUmDog);
      res.status(200).json(
        {
          'results': resposta,
          'length': resposta.length
        }
      );
    } catch (error) {
        res.status(400).json({ message: error });
    }
  });

  app.post("/pets/dogs/newDog", async (req, res) => {
    try {
      const body = req.body;
      const infos = [
        body.RACA,
        body.FOTO,
        body.IDADE,
        body.NOME,
        body.GENERO,
        body.RUA,
        body.NUMERO,
        body.CIDADE,
        body.ESTADO,
        body.TELEFONE,
      ];

      const respostaNewDog = await DaoDogs.NewDog(infos);
      res.status(201).json({ ok: 1 });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  app.delete("/pets/dogs/delete/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const respostaDeleteDogs = await DaoDogs.DeleteDogs(id);
      res.status(202).json({ ok: 1 });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  app.put("/pets/dogs/edit/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const body = req.body;
      const infos = [
        body.RACA,
        body.FOTO,
        body.IDADE,
        body.NOME,
        body.GENERO,
        body.RUA,
        body.NUMERO,
        body.CIDADE,
        body.ESTADO,
        body.TELEFONE,
      ];

      const respostaEditDog = await DaoDogs.EditDog(infos, id);

      res.status(201).json({ ok: 1 });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  const organizaResposta = (array) => {
    const resposta = array.map((dog) => {
      return {
        id: dog.ID,
        raca: dog.RACA,
        nome: dog.NOME,
        idade: dog.IDADE,
        genero: dog.GENERO,
        endereco: {
          rua: dog.RUA,
          numero: dog.NUMERO,
          cidade: dog.CIDADE,
          estado: dog.ESTADO,
          telefone: dog.TELEFONE,
        },
        foto: dog.FOTO,
      };
    });

    return resposta;
  };
};
