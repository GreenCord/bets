module.exports = function(sequelize, DataTypes) {
    var Bet = sequelize.define("Bet", {
        user_id: DataTypes.INTEGER,
        ballot_id: DataTypes.INTEGER,

        user_answer_1: DataTypes.STRING,
        answer_truth_1: DataTypes.BOOLEAN,

        user_answer_2: DataTypes.STRING,
        answer_truth_2: DataTypes.BOOLEAN,

        user_answer_3: DataTypes.STRING,
        answer_truth_3: DataTypes.BOOLEAN,

        total_right: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    return Bet;
};