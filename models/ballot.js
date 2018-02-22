module.exports = function(sequelize, DataTypes) {
    var Ballot = sequelize.define("Ballot", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 140]
            }
        },
        expired: DataTypes.BOOLEAN,
        expire_dt: DataTypes.DATE,

        bet_text_1: DataTypes.STRING,
        bet_answer_1: DataTypes.BOOLEAN,

        bet_text_2: DataTypes.STRING,
        bet_answer_2: DataTypes.BOOLEAN,

        bet_text_3: DataTypes.STRING,
        bet_answer_3: DataTypes.BOOLEAN,
        
        winning_user_id: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    return Ballot;
};