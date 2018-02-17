module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
        	type: DataTypes.STRING,
        	unique: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false
    });
    return User;
};