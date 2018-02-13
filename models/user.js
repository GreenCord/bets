module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: DataTypes.STRING,
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};