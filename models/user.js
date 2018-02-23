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
        timestamps: true
    });

    User.associate = function(models) {
        User.belongsToMany(models.Ballot, {
            through: 'bets'
        });

        User.hasMany(models.Bet, {
            onDelete: 'cascade'
        });

        User.hasMany(models.Ballot, {
            onDelete: 'cascade'
        });
    };

    return User;
};