import {Model, DataTypes} from "sequelize";

export default (sequelize) => {
	class DetailLivre extends Model {
		static associate(models){

			// One to one 
			DetailLivre.hasOne(models.Livre, {
				foreignKey : "livre_id",
				as : "livre"
			})
		}
	}

	DetailLivre.init(
		{
			resume : {
				type : DataTypes.TEXT,
				allowNull : false
			},
			nombre_page : {
				type : DataTypes.INTEGER,
				allowNull : false
			}
		},
		{
			sequelize,
			tableName: "DetailsLivres",
			modelName: "DetailsLivre",
			timestamps : false
		}
	);

	return DetailLivre;
}