import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
    class Genre extends Model {
        static associate(models) {
            // Un genre petu contenir plusieurs livres
            Genre.belongsToMany(models.Livre, {
                through: "livre_genre",
                timestamps: false,
                as: "livres",
            });
        }
    }

    Genre.init(
        {
            nom: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "Genres",
            modelName: "Genre",
            timestamps: false,
        }
    );

    return Genre;
};
