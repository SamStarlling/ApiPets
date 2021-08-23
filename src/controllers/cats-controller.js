const CatsDao = require("../dao/cats-dao");
module.exports = (app, bd) => {
  const DaoCats = new CatsDao(bd);

  app.get("/pets/cats", async (req, res) => {
    try {
      const respostaVerCats = await DaoCats.VerCats();
      const resposta = organizaResposta(respostaVerCats);
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

  app.get("/pets/cats/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const respostaVerUmCat = await DaoCats.VerUmCat(id);
      const resposta = organizaResposta(respostaVerUmCat);
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

  app.post("/pets/cats/newCat", async (req, res) => {
    try {
      const body = req.body;
      const infos = [
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

      const respostaNewCat = await DaoCats.NewCat(infos);
      res.status(201).json({ ok: 1 });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  app.delete("/pets/cats/delete/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const respostaDeleteCats = await DaoCats.DeleteCats(id);
      res.status(202).json({ ok: 1 });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  app.put("/pets/cats/edit/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const body = req.body;
      const infos = [
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

      const respostaEditCat = await DaoCats.EditCat(infos, id);

      res.status(201).json({ ok: 1 });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

  const organizaResposta = (array) => {
    const resposta = array.map((Cat) => {
      return {
        id: Cat.ID,
        nome: Cat.NOME,
        idade: Cat.IDADE,
        genero: Cat.GENERO,
        endereco: {
          rua: Cat.RUA,
          numero: Cat.NUMERO,
          cidade: Cat.CIDADE,
          estado: Cat.ESTADO,
          telefone: Cat.TELEFONE,
        },
        foto: Cat.FOTO,
      };
    });

    return resposta;
  };
};
