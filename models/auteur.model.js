import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class Auteur extends Model {
        static associate(models) {
            Auteur.hasMany(models.Livre, {
                foreignKey: "auteur_id",
                as: "livres",
            });
        }
    }

    Auteur.init(
        {
            nom: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pays: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "Auteurs",
            modelName: "Auteur",
            timestamps: false,
        }
    );

    return Auteur;
};
