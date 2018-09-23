module.exports = function (sequelize, DataTypes) {
    var Todo = sequelize.define("User", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo;
};