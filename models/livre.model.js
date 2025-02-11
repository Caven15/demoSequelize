import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class Livre extends Model {
        static associate(models) {
            // Relation de retour : un détail appartient à un seul livre
            Livre.belongsTo(models.DetailsLivre, {
                foreignKey: "livre_id",
                as: "details",
            });

            // One-to-many : Un auteur peut écrire plusieurs livres
            Livre.belongsTo(models.Auteur, {
                foreignKey: "auteur_id",
                as: "auteur",
            });

            Livre.belongsToMany(models.Genre, {
                through: "livre_genre",
                timestamps: false,
                as: "genres",
            });
        }
    }

    Livre.init(
        {
            // titre
            titre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // annee
            annee: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "Livres",
            modelName: "Livre",
            timestamps: false,
        }
    );

    return Livre;
};
