import http from 'http';
import db from "./models/index.js";
const { sequelize } = db;

const startServer = async () => {
	try {
		// L'instancication de sequelize
		await sequelize.authenticate();
		console.log("Connexion à la db ok !");

		await sequelize.sync({ alter : true});
		console.log("Modèles synchronisés avec la base de données");


		const server =http.createServer((req, res) => {
			res.writeHead(200, { "content-type" : "text/plain"});
			res.end("Serveur en ligne");
		})

		const port = 3000;

		server.listen(port, () => {
			console.log(`Server start : http://localhost:${port}`);
		})

		
	} catch (error){
		console.log(`Erreur de connexion a la db : ${error}`);
	}
}

startServer();