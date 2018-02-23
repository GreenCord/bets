module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 144]
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false
    });

    User.associate = function(models) {
        User.belongsToMany(models.Ballot, {
            through: 'bets'
        });
    };

    return User;
};