const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "activity",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            activityName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            difficulty: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            duration: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            seasons: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
