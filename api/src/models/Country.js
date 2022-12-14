const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "country",
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                unique: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            flag: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            region: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            capital: {
                type: DataTypes.STRING,
                defaultValue: "No capital",
            },
            subregion: {
                type: DataTypes.STRING,
            },
            area: {
                type: DataTypes.INTEGER,
            },
            population: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: false,
        }
    );
};
