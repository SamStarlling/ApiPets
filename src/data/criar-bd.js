/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== DOGS
const DOGS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "DOGS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "RACA" varchar(255),
    "FOTO" varchar(255),
    "IDADE" varchar(255),
    "NOME" varchar(255),
    "GENERO" varchar(255),
    "RUA" varchar(255),
    "NUMERO" varchar(255),
    "CIDADE" varchar(255),
    "ESTADO" varchar(255),
    "TELEFONE" varchar(255)
  );`;

const ADD_DOGS_DATA = `
INSERT INTO DOGS (ID, RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE )
VALUES 
(1, 'affenpinscher','https://images.dog.ceo/breeds/bluetick/n02088632_101.jpg','0','Enes','male','Rua Bela Vista ','2359','Trindade','Goiás','(24) 7714-2033'),
(2, 'african','https://images.dog.ceo/breeds/bouvier/n02106382_4291.jpg','6','Salustiano','male','Rua São Luiz ','3603','Santana','Amazonas','(64) 9641-0845'),
(3, 'airedale','https://images.dog.ceo/breeds/basenji/n02110806_518.jpg','11','Ezequiel','male','Rua Bela Vista ','6195','Alvorada','Rondônia','(58) 3354-1813'),
(4, 'akita','https://images.dog.ceo/breeds/australian-shepherd/sadie.jpg','5','Túlio','male','Rua São Luiz ','8637','São Leopoldo','São Paulo','(12) 4223-8343'),
(5,'appenzeller','https://images.dog.ceo/breeds/dachshund/dachshund-7.jpg','3','Carlota','female','Rua Doze ','8553','Recife','Tocantins','(30) 6369-1414'),
(6,'australian','https://images.dog.ceo/breeds/borzoi/n02090622_5775.jpg','12','Jasmim','male','Avenida Brasil ','3836','Poá','Paraná','(78) 1310-8701'),
(7,'basenji','https://images.dog.ceo/breeds/african/n02116738_5993.jpg','1','Marlúcia','female','Rua Paraná ','6458','Caruaru','Bahia','(53) 4368-9797'),
(8,'beagle','https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg','1','Maridelza','female','Rua José Bonifácio ','7867','São José dos Campos','Amazonas','(96) 3445-6282'),
(10,'bluetick','https://images.dog.ceo/breeds/chow/n02112137_17733.jpg','13','Eliézer','male','Rua Santo Antônio ','1457','João Pessoa','Mato Grosso do Sul','(51) 0449-8931'),
(11,'borzoi','https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg','5','Telmo','male','Rua Maranhão ','8146','Sumaré','Maranhão','(69) 3635-8844'),
(12,'bouvier','https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4374.jpg','6','Rudolfo','male','Rua Dois','4523','Indaiatuba','Espírito Santo','(85) 5578-4837'),
(13,'boxer','https://images.dog.ceo/breeds/dalmatian/cooper1.jpg','13','Madu','male','Rua Rio de Janeiro ','8527','Presidente Prudente','Rio de Janeiro','(80) 2175-6714'),
(14,'brabancon','https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_3045.jpg','9','Cida','female','Rua Duque de Caxias ','967','Arapiraca','Rio Grande do Sul','(63) 0362-0707'),
(15,'briard','https://images.dog.ceo/breeds/collie/n02106030_3948.jpg','12','Gaspar','male','Rua Sete de Setembro ','4851','Itapevi','Distrito Federal','(49) 2723-7714'),
(16,'buhund','https://images.dog.ceo/breeds/pyrenees/n02111500_8382.jpg','0','Aquino','male','Travessa dos Açorianos','9454','Magé','Goiás','(78) 7849-7763'),
(17, 'bulldog','https://images.dog.ceo/breeds/otterhound/n02091635_965.jpg','13','Aramis','male','Rua Santa Luzia ','7785','Timon','Roraima','(04) 6328-4590'),
(18,'bullterrier','https://images.dog.ceo/breeds/eskimo/n02109961_8353.jpg','12','Belinda','female','Avenida Brasil ','6642','Recife','Mato Grosso','(43) 3132-1060'),
(19, 'cairn','https://images.dog.ceo/breeds/bulldog-boston/n02096585_210.jpg','1','Ramiro','male','Rua Três','9212','Salvador','Bahia','(11) 5406-5886'),
(20,'cattledog','https://images.dog.ceo/breeds/deerhound-scottish/n02092002_1962.jpg','11','Samira','female','Rua Das Flores ','5041','Ribeirão das Neves','Mato Grosso','(05) 9875-2409'),
(21,'chihuahua','https://images.dog.ceo/breeds/kuvasz/n02104029_4079.jpg','7','Luciene','female','Rua Paraná ','9429','Chapecó','Bahia','(30) 9907-4227'),
(22 ,'chow','https://images.dog.ceo/breeds/mix/cman.JPG','0','Lénio','male','Rua Tiradentes ','305','Ipatinga','Espírito Santo','(63) 0258-8657'),
( 23,'clumber','https://images.dog.ceo/breeds/boxer/n02108089_11616.jpg','3','Aderico','male','Rua Boa Vista ','5553','Joinville','Minas Gerais','(05) 6036-7920'),
( 24,'cockapoo','https://images.dog.ceo/breeds/entlebucher/n02108000_3205.jpg','0','Cleonei','female','Beco dos Namorados','6296','Itapipoca','Rio Grande do Sul','(07) 8276-4008'),
( 25,'collie','https://images.dog.ceo/breeds/affenpinscher/n02110627_10848.jpg','8','Lvia','female','Rua Santa Catarina ','1062','Ibirité','Tocantins','(21) 4559-8470'),
( 26,'coonhound','https://images.dog.ceo/breeds/samoyed/n02111889_771.jpg','11','Lícia','female','Rua Primeiro de Maio ','5513','Simões Filho','Rondônia','(49) 9486-9961'),
( 27,'corgi','https://images.dog.ceo/breeds/chihuahua/n02085620_1502.jpg','4','Ademir','male','Rua Duque de Caxias ','3854','Sumaré','Acre','(54) 1202-3578'),
( 28,'cotondetulear','https://images.dog.ceo/breeds/coonhound/n02089078_1366.jpg','12','Emiliano','male','Rua Maranhão ','8508','Barreiras','Goiás','(30) 3104-7161'),
( 29,'dachshund','https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9809.jpg','1','Severiano','male','Rua Rio de Janeiro ','7156','Santa Bárbara DOeste','Ceará','(42) 6260-1699'),
( 30,'dalmatian','https://images.dog.ceo/breeds/mastiff-bull/n02108422_747.jpg','0','Marino','male','Travessa dos Martírios','2776','Joinville','Mato Grosso do Sul','(15) 8125-1604'),
( 31,'dane','https://images.dog.ceo/breeds/maltese/n02085936_4070.jpg','8','Edmero','male','Rua Pernambuco ','658','Nova Iguaçu','Distrito Federal','(99) 4368-0284'),
( 32,'deerhound','https://images.dog.ceo/breeds/beagle/n02088364_15315.jpg','4','Hemelyn','female','Rua Espirito Santo ','1915','Alagoinhas','Piauí','(26) 2326-4189'),
(33 ,'dhole','https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg','14','Carmen','female','Rua Bela Vista ','5471','Diadema','Pernambuco','(36) 0489-3900'),
( 34,'dingo','https://images.dog.ceo/breeds/appenzeller/n02107908_3450.jpg','6','Alvani','female','Travessa dos Açorianos','9665','Alvorada','Pará','(73) 6910-5661'),
( 35,'doberman','https://images.dog.ceo/breeds/hound-afghan/n02088094_2798.jpg','11','Veraldina','female','Rua Um','9976','Santarém','Alagoas','(35) 1745-6967'),
( 36,'elkhound','https://images.dog.ceo/breeds/brabancon/n02112706_1598.jpg','5','Denil','male','Rua Castro Alves ','6033','Itatiba','Bahia','(00) 4504-1818'),
( 37,'entlebucher','https://images.dog.ceo/breeds/cattledog-australian/IMG_7506.jpg','3','Ovídio','male','Rua Belo Horizonte ','5559','Cabo Frio','Paraná','(42) 9294-8797'),
( 38,'eskimo','https://images.dog.ceo/breeds/cairn/n02096177_430.jpg','7','Dulcínio','male','Rua Santa Maria ','8134','Blumenau','Bahia','(78) 4062-6429'),
( 39,'finnish','https://images.dog.ceo/breeds/greyhound-italian/n02091032_651.jpg','12','Miriã','female','Travessa dos Martírios','3744','Santa Cruz do Sul','Pará','(55) 0945-8068'),
( 40,'frise','https://images.dog.ceo/breeds/dingo/n02115641_8798.jpg','7','Acácio','male','Rua Castro Alves ','1062','Caraguatatuba','Maranhão','(25) 9864-7742'),
( 41,'germanshepherd','https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg','5','Gláucia','female','Rua Bela Vista ','7842','Joinville','Pará','(14) 7337-7310'),
( 42,'greyhound','https://images.dog.ceo/breeds/rottweiler/n02106550_11823.jpg','13','Sales','male','Rua Vinte E Um','846','Vitória de Santo Antão','Rio Grande do Sul','(45) 4903-7499'),
( 43,'groenendael','https://images.dog.ceo/breeds/airedale/n02096051_5067.jpg','0','Vergílio','male','Rua São João ','7453','Mogi Guaçu','Ceará','(70) 1248-2474'),
(44 ,'havanese','https://images.dog.ceo/breeds/labrador/yellowlab-grace.png','1','Berilo','male','Rua Três','2394','Ipatinga','Maranhão','(10) 5073-9752'),
(45 ,'hound','https://images.dog.ceo/breeds/puggle/IMG_070809.jpg','8','Evélio','male','Rua São Sebastiao ','771','Camaragibe','Pará','(36) 5902-4295'),
(46 ,'husky','https://images.dog.ceo/breeds/doberman/n02107142_9090.jpg','5','Lupicino','male','Rua João Xxiii','7423','Manaus','Rondônia','(71) 4815-8529'),
(47 ,'keeshond','https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg','14','Luenem','female','Rua da Paz ','2934','Marabá','Goiás','(21) 4542-7274'),
(48 ,'kelpie','https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20200201_145256.jpg','13','Abel','male','Rua Das Flores ','1881','Eunápolis','Distrito Federal','(18) 0790-6957'),
(49 ,'komondor','https://images.dog.ceo/breeds/briard/n02105251_6883.jpg','1','Jucelaine','female','Avenida da Legalidade','60','Imperatriz','Maranhão','(86) 1367-2662'),
(50 ,'kuvasz','https://images.dog.ceo/breeds/kelpie/n02105412_133.jpg','1','Tierri','male','Rua Dois','4063','Camaragibe','Rio Grande do Sul','(19) 6537-0331'),
(51 ,'labradoodle','https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_3515.jpg','4','Ivanilda','female','Rua Quatro','8180','Ribeirão das Neves','Pernambuco','(33) 2978-7360'),
(52 ,'labrador','https://images.dog.ceo/breeds/lhasa/n02098413_8001.jpg','6','Arnoldo','male','Rua Belo Horizonte ','5347','Brusque','Distrito Federal','(75) 0153-6839'),
( 53,'leonberg','https://images.dog.ceo/breeds/weimaraner/n02092339_6530.jpg','6','Vanderléia','female','Rua Três','9575','Castanhal','Minas Gerais','(10) 9858-8846'),
( 54,'lhasa','https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg','9','Adorino','male','Rua Dois','861','Valinhos','Roraima','(43) 8970-1811'),
( 55,'malamute','https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg','5','Severo','male','Avenida da Legalidade','1404','Londrina','Distrito Federal','(13) 5345-7296'),
(56 ,'malinois','https://images.dog.ceo/breeds/pekinese/n02086079_7027.jpg','12','Requerino','male','Rua São Jorge ','2012','Cabo Frio','Rondônia','(78) 2464-2747'),
(57 ,'maltese','https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.png','14','Daniel','male','Rua São Sebastiao ','9322','Parnaíba','Espírito Santo','(30) 9186-6989'),
(58 ,'mastiff','https://images.dog.ceo/breeds/pembroke/n02113023_1373.jpg','5','Clemêncio','male','Rua São Paulo ','8458','Jaraguá do Sul','Sergipe','(93) 5501-2270'),
(59 ,'mexicanhairless','https://images.dog.ceo/breeds/germanshepherd/n02106662_9936.jpg','14','Dalvânia','female','Rua São João ','6542','Teófilo Otoni','Bahia','(63) 7611-4604'),
(60 ,'mix','https://images.dog.ceo/breeds/shiba/shiba-17.jpg','6','Tiago','male','Rua Rio de Janeiro ','5773','Manaus','Paraná','(48) 8296-7077'),
( 61,'mountain','https://images.dog.ceo/breeds/redbone/n02090379_4665.jpg','6','Marionice','female','Rua Rui Barbosa ','7941','Rio de Janeiro','Rio Grande do Norte','(08) 4516-6685'),
(62 ,'newfoundland','https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3565.jpg','1','Adónis','male','Rua Maranhão ','5398','Votorantim','Paraíba','(80) 8976-0287'),
(63 ,'otterhound','https://images.dog.ceo/breeds/dane-great/n02109047_13211.jpg','7','Judas','male','Rua da Saudade','8631','Contagem','Alagoas','(14) 3582-0501'),
(64 ,'ovcharka','https://images.dog.ceo/breeds/shihtzu/n02086240_1927.jpg','0','Aldemar','male','Rua Rui Barbosa ','6011','Sete Lagoas','Rio Grande do Sul','(43) 2179-9529'),
(65 ,'papillon','https://images.dog.ceo/breeds/schipperke/n02104365_7368.jpg','2','Edelmira','female','Rua Alagoas ','9141','Caxias do Sul','Paraná','(57) 0595-6493'),
(66 ,'pekinese','https://images.dog.ceo/breeds/pointer-german/n02100236_3504.jpg','7','Hermitério','male','Avenida Brasil ','8450','Paranaguá','Pará','(50) 9137-4213'),
(67 ,'pembroke','https://images.dog.ceo/breeds/komondor/n02105505_475.jpg','8','Daisy','female','Rua Vinte de Setembro','9318','Conselheiro Lafaiete','Bahia','(59) 4863-8838'),
(68 ,'pinscher','https://images.dog.ceo/breeds/wolfhound-irish/n02090721_768.jpg','7','Anísia','female','Rua Dom Pedro Ii ','5386','Cametá','Pará','(16) 1278-1027'),
(69 ,'pitbull','https://images.dog.ceo/breeds/malinois/n02105162_6343.jpg','12','Ringo','male','Rua Maranhão ','7267','Rondonópolis','Pará','(10) 2805-8031'),
(70 ,'pointer','https://images.dog.ceo/breeds/husky/n02110185_712.jpg','12','Engrácio','male','Rua da Paz ','4702','Teresópolis','Mato Grosso do Sul','(12) 9181-1264'),
(71 ,'pomeranian','https://images.dog.ceo/breeds/pomeranian/n02112018_2218.jpg','1','Ramiro','male','Rua Dois','6735','Vitória de Santo Antão','Tocantins','(14) 6704-6146'),
(72 ,'poodle','https://images.dog.ceo/breeds/newfoundland/n02111277_1818.jpg','9','Gaspar','male','Rua Piauí ','4849','Porto Alegre','Tocantins','(74) 9399-1902'),
(73 ,'pug','https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_5165.jpg','6','Ciciane','female','Rua São Paulo ','406','Macapá','Amapá','(12) 5738-0048'),
(74 ,'puggle','https://images.dog.ceo/breeds/whippet/n02091134_13879.jpg','0','Turgo','male','Rua Santos Dumont ','6174','Ji-Paraná','Goiás','(29) 9573-7268'),
(75 ,'pyrenees','https://images.dog.ceo/breeds/clumber/n02101556_5030.jpg','12','Osnilda','female','Rua Tiradentes ','8578','Jaú','Minas Gerais','(95) 5574-2616'),
(76 ,'redbone','https://images.dog.ceo/breeds/keeshond/n02112350_7826.jpg','5','Dioclene','female','Rua São José ','9160','Guarujá','Paraná','(43) 9144-0843'),
(77 ,'retriever','https://images.dog.ceo/breeds/springer-english/n02102040_986.jpg','12','Arlete','female','Rua Doze ','8770','Ibirité','Ceará','(13) 1834-8745'),
(78 ,'ridgeback','https://images.dog.ceo/breeds/setter-english/n02100735_3899.jpg','6','Luciana','female','Rua São Paulo ','3544','Linhares','Minas Gerais','(06) 7972-9450'),
(79 ,'rottweiler','https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg','10','Miqueias','male','Rua Boa Vista ','3049','Juiz de Fora','Santa Catarina','(71) 3684-7631'),
(80 ,'saluki','https://images.dog.ceo/breeds/pinscher-miniature/n02107312_458.jpg','10','Bianca','female','Rua da Paz ','5252','Mauá','Rondônia','(80) 0153-2301'),
(81 ,'samoyed','https://images.dog.ceo/breeds/dhole/n02115913_1449.jpg','0','Veríssimo','male','Rua Quinze de Novembro ','9737','Teresina','Acre','(54) 4107-0106'),
(82 ,'schipperke','https://images.dog.ceo/breeds/frise-bichon/jh-ezio-3.jpg','1','Dircenéia','female','Rua Vinte de Setembro','5124','Alagoinhas','Acre','(28) 6889-6300'),
(83 ,'schnauzer','https://images.dog.ceo/breeds/stbernard/n02109525_5966.jpg','4','Léia','female','Rua São Paulo ','4413','Votorantim','Paraná','(81) 8279-7083'),
(84 ,'setter','https://images.dog.ceo/breeds/groenendael/n02105056_4842.jpg','3','Josilene','female','Rua Santa Maria ','8521','Parnaíba','Rio de Janeiro','(30) 4253-6300'),
(85 ,'sheepdog','https://images.dog.ceo/breeds/malamute/n02110063_10567.jpg','7','Areta','female','Rua Vinte E Quatro de Outubro','7806','Olinda','Pará','(79) 7737-8838'),
(86 ,'shiba','https://images.dog.ceo/breeds/pug/n02110958_14984.jpg','4','Margarida','female','Rua Quatro','4968','Três Lagoas','Mato Grosso','(03) 8397-8663'),
(87 ,'shihtzu','https://images.dog.ceo/breeds/papillon/n02086910_2897.jpg','7','Aureliza','female','Rua Onze ','7971','Indaiatuba','Espírito Santo','(64) 3251-8635'),
(88 ,'spaniel','https://images.dog.ceo/breeds/vizsla/n02100583_9435.jpg','11','Nidélia','female','Rua Bela Vista ','9508','Luziânia','Paraíba','(87) 2500-2921'),
(89 ,'springer','https://images.dog.ceo/breeds/leonberg/n02111129_819.jpg','5','Sancho','male','Travessa dos Açorianos','677','Cametá','Rio de Janeiro','(06) 0427-2775'),
(90 ,'stbernard','https://images.dog.ceo/breeds/mountain-bernese/n02107683_5131.jpg','9','Amina','female','Rua Vinte de Setembro','6985','Mogi das Cruzes','Bahia','(16) 9764-0348'),
(91 ,'terrier','https://images.dog.ceo/breeds/saluki/n02091831_5359.jpg','11','Loiraci','female','Rua Santa Luzia ','4750','Poços de Caldas','Pará','(70) 3473-4311'),
( 92,'vizsla','https://images.dog.ceo/breeds/mexicanhairless/n02113978_2572.jpg','14','Noemi','female','Rua Dom Pedro Ii ','582','Araçatuba','Mato Grosso','(52) 0098-6085'),
( 93,'waterdog','https://images.dog.ceo/breeds/terrier-american/n02093428_15784.jpg','7','Arcílio','male','Rua Rio de Janeiro ','6073','Conselheiro Lafaiete','Mato Grosso do Sul','(58) 2308-7721'),
( 94,'weimaraner','https://images.dog.ceo/breeds/poodle-standard/n02113799_5227.jpg','9','Jamila','female','Rua Tiradentes ','7539','Teresópolis','Maranhão','(57) 8494-9822'),
( 95,'whippet','https://images.dog.ceo/breeds/spaniel-japanese/n02085782_4458.jpg','12','Garcia','male','Rua Carlos Gomes','462','Itapecerica da Serra','Santa Catarina','(42) 2073-5315'),
( 96,'wolfhound','https://images.dog.ceo/breeds/schnauzer-giant/n02097130_4740.jpg','11','Adorino','male','Rua Quinze de Novembro ','2595','Atibaia','Santa Catarina','(95) 5831-0248')
`

//===== CATS
const CATS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CATS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "FOTO" varchar(255) NOT NULL,
    "IDADE" varchar(255) NOT NULL,
    "NOME" varchar(255) NOT NULL,
    "GENERO" varchar(255) NOT NULL,
    "RUA" varchar(255) NOT NULL,
    "NUMERO" varchar(255) NOT NULL,
    "CIDADE" varchar(255) NOT NULL,
    "ESTADO" varchar(255) NOT NULL,
    "TELEFONE" varchar(255)
  );`;

  const ADD_CATS_DATA = `
INSERT INTO CATS (ID, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE )
VALUES 
(1,'https://cataas.com/cat/5e9972961b7a400011744242','6','Enes','male','Rua Bela Vista ','2359','Trindade','Goiás','(20) 0447-7098'),
(2 ,'https://cataas.com/cat/595f280c557291a9750ebf85','14','Salustiano','male','Rua São Luiz ','3603','Santana','Amazonas','(38) 5578-8682'),
(3 ,'https://cataas.com/cat/5b55c2acdf7368000f914b44','6','Ezequiel','male','Rua Bela Vista ','6195','Alvorada','Rondônia','(20) 2729-7662'),
(4 ,'https://cataas.com/cat/595f2811557291a9750ebfe4','14','Túlio','male','Rua São Luiz ','8637','São Leopoldo','São Paulo','(59) 4745-0144'),
( 5,'https://cataas.com/cat/5ac0ec1861d533000f42c52c','11','Carlota','female','Rua Doze ','8553','Recife','Tocantins','(25) 4791-5977'),
( 6,'https://cataas.com/cat/600ba30ddb2f3d001170a381','7','Jasmim','male','Avenida Brasil ','3836','Poá','Paraná','(34) 0654-6087'),
(7 ,'https://cataas.com/cat/5a96cd7233dc7b000f7b00b5','10','Marlúcia','female','Rua Paraná ','6458','Caruaru','Bahia','(27) 7108-0276'),
(8 ,'https://cataas.com/cat/5fa164b0d75695001864621c','5','Maridelza','female','Rua José Bonifácio ','7867','São José dos Campos','Amazonas','(73) 5341-8377'),
(9 ,'https://cataas.com/cat/5fa1446cd756950018646218','8','Eliézer','male','Rua Santo Antônio ','1457','João Pessoa','Mato Grosso do Sul','(47) 7438-0894'),
(10 ,'https://cataas.com/cat/595f280d557291a9750ebf97','8','Telmo','male','Rua Maranhão ','8146','Sumaré','Maranhão','(99) 0892-0818'),
( 11,'https://cataas.com/cat/5fc55a001edf9e001798d1e6','12','Rudolfo','male','Rua Dois','4523','Indaiatuba','Espírito Santo','(67) 0569-7334'),
(12 ,'https://cataas.com/cat/595f280f557291a9750ebfb9','9','Madu','male','Rua Rio de Janeiro ','8527','Presidente Prudente','Rio de Janeiro','(09) 5363-5429'),
(13 ,'https://cataas.com/cat/5cca79e1ad0f8100129e994b','2','Cida','female','Rua Duque de Caxias ','967','Arapiraca','Rio Grande do Sul','(10) 3569-0271'),
( 14,'https://cataas.com/cat/5ac32b1761d533000f42c537','10','Gaspar','male','Rua Sete de Setembro ','4851','Itapevi','Distrito Federal','(50) 3394-1470'),
(15 ,'https://cataas.com/cat/5d2ca814e9123200115f3490','3','Aquino','male','Travessa dos Açorianos','9454','Magé','Goiás','(96) 1342-2002'),
(16 ,'https://cataas.com/cat/5fc55a001edf9e001798d1e8','14','Aramis','male','Rua Santa Luzia ','7785','Timon','Roraima','(53) 5227-7349'),
( 17,'https://cataas.com/cat/5d39a47b14ca600011538e54','2','Belinda','female','Avenida Brasil ','6642','Recife','Mato Grosso','(13) 7594-5247'),
(18 ,'https://cataas.com/cat/5fcc2085cb0c5c0010234645','12','Ramiro','male','Rua Três','9212','Salvador','Bahia','(21) 8798-6948'),
(19 ,'https://cataas.com/cat/595f2809557291a9750ebf35','4','Samira','female','Rua Das Flores ','5041','Ribeirão das Neves','Mato Grosso','(29) 5846-3048'),
( 20,'https://cataas.com/cat/5b55c2addf7368000f914b47','10','Luciene','female','Rua Paraná ','9429','Chapecó','Bahia','(19) 3632-5376'),
( 21,'https://cataas.com/cat/59f880fdd1e72229f0571fe1','4','Lénio','male','Rua Tiradentes ','305','Ipatinga','Espírito Santo','(89) 6686-7090'),
(22 ,'https://cataas.com/cat/5d79638a7ae37c0018f4c978','11','Aderico','male','Rua Boa Vista ','5553','Joinville','Minas Gerais','(77) 3760-7204'),
(23 ,'https://cataas.com/cat/595f280d557291a9750ebf98','11','Cleonei','female','Beco dos Namorados','6296','Itapipoca','Rio Grande do Sul','(57) 6713-7666'),
(24 ,'https://cataas.com/cat/6000e52788db7c0012f99e48','11','Lvia','female','Rua Santa Catarina ','1062','Ibirité','Tocantins','(52) 1375-5117'),
(25 ,'https://cataas.com/cat/5b32d38b5b3538000f5fcf61','7','Lícia','female','Rua Primeiro de Maio ','5513','Simões Filho','Rondônia','(91) 3845-6785'),
(26 ,'https://cataas.com/cat/595f280d557291a9750ebf91','5','Ademir','male','Rua Duque de Caxias ','3854','Sumaré','Acre','(26) 0224-9058'),
(27 ,'https://cataas.com/cat/5d6fe2177ae37c0018f4c976','14','Emiliano','male','Rua Maranhão ','8508','Barreiras','Goiás','(61) 2003-6584'),
(28 ,'https://cataas.com/cat/5fcc2085cb0c5c0010234649','2','Severiano','male','Rua Rio de Janeiro ','7156','Santa Bárbara DOeste','Ceará','(45) 7379-9147'),
( 29,'https://cataas.com/cat/5b0625bf43314d000f6f4588','13','Marino','male','Travessa dos Martírios','2776','Joinville','Mato Grosso do Sul','(97) 6893-7731'),
( 30,'https://cataas.com/cat/5e2b4b634348da001c78fb80','13','Edmero','male','Rua Pernambuco ','658','Nova Iguaçu','Distrito Federal','(00) 7502-3852'),
( 31,'https://cataas.com/cat/6010b5d347d128001b7bbb93','5','Hemelyn','female','Rua Espirito Santo ','1915','Alagoinhas','Piauí','(72) 0350-6837'),
(32 ,'https://cataas.com/cat/5f8de0853deac500178f8900','3','Carmen','female','Rua Bela Vista ','5471','Diadema','Pernambuco','(02) 5973-3520'),
( 33,'https://cataas.com/cat/6051d46751c45a00170727b3','10','Alvani','female','Travessa dos Açorianos','9665','Alvorada','Pará','(42) 0022-4800'),
( 34,'https://cataas.com/cat/5b0625bf43314d000f6f4588','9','Veraldina','female','Rua Um','9976','Santarém','Alagoas','(05) 6153-8202'),
(35 ,'https://cataas.com/cat/5a8ef849f7e61f000fce6bf8','7','Denil','male','Rua Castro Alves ','6033','Itatiba','Bahia','(84) 2810-4625'),
( 36,'https://cataas.com/cat/5f621f4447628400184531b7','7','Ovídio','male','Rua Belo Horizonte ','5559','Cabo Frio','Paraná','(68) 3378-1395'),
(37 ,'https://cataas.com/cat/5d7b9d247ae37c0018f4c97c','6','Dulcínio','male','Rua Santa Maria ','8134','Blumenau','Bahia','(33) 7692-2421'),
(38 ,'https://cataas.com/cat/5ec587d0fc6b05001805d6bb','8','Miriã','female','Travessa dos Martírios','3744','Santa Cruz do Sul','Pará','(07) 0422-8050'),
(39 ,'https://cataas.com/cat/5f22a49f5bc3fa00104444a7','9','Acácio','male','Rua Castro Alves ','1062','Caraguatatuba','Maranhão','(05) 5403-4289'),
(40 ,'https://cataas.com/cat/5d39a4ac14ca600011538e85','6','Gláucia','female','Rua Bela Vista ','7842','Joinville','Pará','(75) 9244-1108'),
(41 ,'https://cataas.com/cat/5e57c4aae9fac10011cb23ce','10','Sales','male','Rua Vinte E Um','846','Vitória de Santo Antão','Rio Grande do Sul','(82) 4097-0443'),
(42 ,'https://cataas.com/cat/595f280f557291a9750ebfc2','3','Vergílio','male','Rua São João ','7453','Mogi Guaçu','Ceará','(54) 6616-7286'),
(43 ,'https://cataas.com/cat/5d39a4aa14ca600011538e80','7','Berilo','male','Rua Três','2394','Ipatinga','Maranhão','(73) 0594-9722'),
(44 ,'https://cataas.com/cat/5fa0dda5d75695001864620e','8','Evélio','male','Rua São Sebastiao ','771','Camaragibe','Pará','(08) 8984-0167'),
(45 ,'https://cataas.com/cat/5d39a48314ca600011538e70','5','Lupicino','male','Rua João Xxiii','7423','Manaus','Rondônia','(70) 4389-0194'),
(46 ,'https://cataas.com/cat/595f280d557291a9750ebf8f','11','Luenem','female','Rua da Paz ','2934','Marabá','Goiás','(84) 8539-3031'),
(47 ,'https://cataas.com/cat/5cbf16eead0f8100129e9946','2','Abel','male','Rua Das Flores ','1881','Eunápolis','Distrito Federal','(12) 5724-6034'),
(48 ,'https://cataas.com/cat/595f280e557291a9750ebfa3','14','Jucelaine','female','Avenida da Legalidade','60','Imperatriz','Maranhão','(98) 9980-2015'),
(49 ,'https://cataas.com/cat/595f280f557291a9750ebfb7','9','Tierri','male','Rua Dois','4063','Camaragibe','Rio Grande do Sul','(74) 2195-6974'),
(50 ,'https://cataas.com/cat/5d542a57e457c80011338b63','5','Ivanilda','female','Rua Quatro','8180','Ribeirão das Neves','Pernambuco','(44) 1102-3052'),
( 51,'https://cataas.com/cat/5fa3bc17246c3700170f0a36','1','Arnoldo','male','Rua Belo Horizonte ','5347','Brusque','Distrito Federal','(15) 4526-0632'),
(52 ,'https://cataas.com/cat/5fc55a001edf9e001798d1e7','6','Vanderléia','female','Rua Três','9575','Castanhal','Minas Gerais','(89) 1087-0780'),
(53 ,'https://cataas.com/cat/5c37ca828d32f1000fb94a28','14','Adorino','male','Rua Dois','861','Valinhos','Roraima','(37) 5280-9133'),
( 54,'https://cataas.com/cat/60c29c223e8ab20018991e5d','11','Severo','male','Avenida da Legalidade','1404','Londrina','Distrito Federal','(16) 4934-8537'),
(55 ,'https://cataas.com/cat/6010b5ce47d128001b7bbb87','3','Requerino','male','Rua São Jorge ','2012','Cabo Frio','Rondônia','(30) 3567-3606'),
(56 ,'https://cataas.com/cat/5fa09fe4d756950018646208','2','Daniel','male','Rua São Sebastiao ','9322','Parnaíba','Espírito Santo','(12) 8483-5121'),
(57 ,'https://cataas.com/cat/5c37ca828d32f1000fb94a28','11','Clemêncio','male','Rua São Paulo ','8458','Jaraguá do Sul','Sergipe','(66) 4257-1794'),
(58 ,'https://cataas.com/cat/5f8421503deac500178f88ee','5','Dalvânia','female','Rua São João ','6542','Teófilo Otoni','Bahia','(24) 2538-2489'),
(59 ,'https://cataas.com/cat/5a987589d1a1f3000f9707a8','7','Tiago','male','Rua Rio de Janeiro ','5773','Manaus','Paraná','(95) 1396-8397'),
(60 ,'https://cataas.com/cat/595f2811557291a9750ebfe5','5','Marionice','female','Rua Rui Barbosa ','7941','Rio de Janeiro','Rio Grande do Norte','(48) 5365-8699'),
(61 ,'https://cataas.com/cat/5f22a4a05bc3fa00104444b6','9','Adónis','male','Rua Maranhão ','5398','Votorantim','Paraíba','(09) 2452-9003'),
( 62,'https://cataas.com/cat/5d39a4af14ca600011538e8c','10','Judas','male','Rua da Saudade','8631','Contagem','Alagoas','(50) 0336-4118'),
(63 ,'https://cataas.com/cat/5fcc2085cb0c5c0010234649','14','Aldemar','male','Rua Rui Barbosa ','6011','Sete Lagoas','Rio Grande do Sul','(73) 4815-7714'),
(64 ,'https://cataas.com/cat/595f2811557291a9750ebfea','1','Edelmira','female','Rua Alagoas ','9141','Caxias do Sul','Paraná','(02) 7644-9142'),
(65 ,'https://cataas.com/cat/595f280c557291a9750ebf80','10','Hermitério','male','Avenida Brasil ','8450','Paranaguá','Pará','(00) 0111-7518'),
(66 ,'https://cataas.com/cat/595f280f557291a9750ebfc2','8','Daisy','female','Rua Vinte de Setembro','9318','Conselheiro Lafaiete','Bahia','(32) 0673-8475'),
(67 ,'https://cataas.com/cat/5a2a62822d0232008a63ef9b','8','Anísia','female','Rua Dom Pedro Ii ','5386','Cametá','Pará','(52) 0108-8736'),
(68 ,'https://cataas.com/cat/595f2811557291a9750ebfea','8','Ringo','male','Rua Maranhão ','7267','Rondonópolis','Pará','(10) 0064-5856'),
( 69,'https://cataas.com/cat/595f280a557291a9750ebf61','6','Engrácio','male','Rua da Paz ','4702','Teresópolis','Mato Grosso do Sul','(28) 9997-5199'),
(70 ,'https://cataas.com/cat/5e7679148012e5001870687c','2','Ramiro','male','Rua Dois','6735','Vitória de Santo Antão','Tocantins','(21) 5279-6326'),
(71 ,'https://cataas.com/cat/5d39a21a14ca600011538e2d','12','Gaspar','male','Rua Piauí ','4849','Porto Alegre','Tocantins','(99) 0167-2227'),
(72 ,'https://cataas.com/cat/5de665debe069d00117c2cae','8','Ciciane','female','Rua São Paulo ','406','Macapá','Amapá','(37) 6377-9792'),
( 73,'https://cataas.com/cat/5cd7c646ad0f8100129e994d','10','Turgo','male','Rua Santos Dumont ','6174','Ji-Paraná','Goiás','(75) 0111-4166'),
( 74,'https://cataas.com/cat/5d6fe2177ae37c0018f4c976','1','Osnilda','female','Rua Tiradentes ','8578','Jaú','Minas Gerais','(31) 9479-2856'),
(75 ,'https://cataas.com/cat/5fa0dda5d75695001864620e','8','Dioclene','female','Rua São José ','9160','Guarujá','Paraná','(16) 5046-3791'),
( 76,'https://cataas.com/cat/5e54bb8fe9fac10011cb23cc','13','Arlete','female','Rua Doze ','8770','Ibirité','Ceará','(30) 4189-7247'),
(77 ,'https://cataas.com/cat/5f22a4a05bc3fa00104444bb','2','Luciana','female','Rua São Paulo ','3544','Linhares','Minas Gerais','(74) 3343-9913'),
(78 ,'https://cataas.com/cat/5a27feef2d0232008a63ef97','2','Miqueias','male','Rua Boa Vista ','3049','Juiz de Fora','Santa Catarina','(10) 7846-5706'),
(79 ,'https://cataas.com/cat/5b32d38a5b3538000f5fcf60','6','Bianca','female','Rua da Paz ','5252','Mauá','Rondônia','(53) 4468-6792'),
( 80,'https://cataas.com/cat/5b55c2addf7368000f914b46','13','Veríssimo','male','Rua Quinze de Novembro ','9737','Teresina','Acre','(75) 0083-2208'),
(81 ,'https://cataas.com/cat/5b55c2afdf7368000f914b4b','1','Dircenéia','female','Rua Vinte de Setembro','5124','Alagoinhas','Acre','(54) 4517-1705'),
(82 ,'https://cataas.com/cat/5ac32b1761d533000f42c537','12','Léia','female','Rua São Paulo ','4413','Votorantim','Paraná','(60) 7985-6741'),
(83 ,'https://cataas.com/cat/5e9972961b7a40001174423d','2','Josilene','female','Rua Santa Maria ','8521','Parnaíba','Rio de Janeiro','(34) 6799-4843'),
(84 ,'https://cataas.com/cat/5fa145f9d75695001864621a','5','Areta','female','Rua Vinte E Quatro de Outubro','7806','Olinda','Pará','(02) 6508-1473'),
(85 ,'https://cataas.com/cat/5cbf16eead0f8100129e9946','7','Margarida','female','Rua Quatro','4968','Três Lagoas','Mato Grosso','(18) 4227-0299'),
(86 ,'https://cataas.com/cat/5b55c2afdf7368000f914b4b','14','Aureliza','female','Rua Onze ','7971','Indaiatuba','Espírito Santo','(47) 0997-3066'),
(87 ,'https://cataas.com/cat/59f880fdd1e72229f0571fe2','4','Nidélia','female','Rua Bela Vista ','9508','Luziânia','Paraíba','(00) 5546-2842'),
(88 ,'https://cataas.com/cat/595f280e557291a9750ebfa8','2','Sancho','male','Travessa dos Açorianos','677','Cametá','Rio de Janeiro','(10) 8284-4838'),
(89 ,'https://cataas.com/cat/600029311bf75600108f6160','3','Amina','female','Rua Vinte de Setembro','6985','Mogi das Cruzes','Bahia','(15) 6538-0521'),
( 90,'https://cataas.com/cat/5d39a4ac14ca600011538e88','1','Loiraci','female','Rua Santa Luzia ','4750','Poços de Caldas','Pará','(79) 6148-6182'),
( 91,'https://cataas.com/cat/6010b5d047d128001b7bbb89','2','Noemi','female','Rua Dom Pedro Ii ','582','Araçatuba','Mato Grosso','(76) 7021-8989'),
(92 ,'https://cataas.com/cat/5d39a4af14ca600011538e8c','7','Arcílio','male','Rua Rio de Janeiro ','6073','Conselheiro Lafaiete','Mato Grosso do Sul','(32) 7278-0996'),
(93 ,'https://cataas.com/cat/5c99e3b08967300010ec4efc','7','Jamila','female','Rua Tiradentes ','7539','Teresópolis','Maranhão','(77) 0827-0344'),
( 94,'https://cataas.com/cat/5a2124d12d0232008a63ef93','14','Garcia','male','Rua Carlos Gomes','462','Itapecerica da Serra','Santa Catarina','(73) 4965-9895'),
(95 ,'https://cataas.com/cat/600b5de245b1e600111a056e','4','Adorino','male','Rua Quinze de Novembro ','2595','Atibaia','Santa Catarina','(74) 1228-0863')
`
function criaTabelaDogs() {
    db.run(DOGS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de dogs", error);
    });
}


function populaTabelaDogs() {
    db.run(ADD_DOGS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de dogs", error);
    });
}

function criaTabelaCats() {
    db.run(CATS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de CATS", error);
    });
}


function populaTabelaCats() {
    db.run(ADD_CATS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de CATS", error);
    });
}


db.serialize( ()=> {
    criaTabelaDogs();
    populaTabelaDogs();
    criaTabelaCats();
    populaTabelaCats();
});