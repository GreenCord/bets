module.exports = function(sequelize, DataTypes) {
    var Bet = sequelize.define("Bet", {

        user_answer_1: DataTypes.BOOLEAN,
        answer_truth_1: DataTypes.BOOLEAN,

        user_answer_2: DataTypes.BOOLEAN,
        answer_truth_2: DataTypes.BOOLEAN,

        user_answer_3: DataTypes.BOOLEAN,
        answer_truth_3: DataTypes.BOOLEAN,

        total_right: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    Bet.associate = function(models) {
        Bet.belongsTo(models.User, {
            as: 'Bettor',
            foreignKey: {
                name: 'UserId',
                allowNull: false
            }
        });

        Bet.belongsTo(models.Ballot, {
            as: 'Ballot',
            foreignKey: {
                name: 'BallotId',
                allowNull: false
            }
        });
        
    };

    return Bet;
};