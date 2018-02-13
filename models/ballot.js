module.exports = function(sequelize, DataTypes) {
    var Ballot = sequelize.define("Ballot", {
        name: DataTypes.STRING,
        expired: DataTypes.BOOLEAN,
        expire_dt: DataTypes.DATE,
        
        bet_text_1: DataTypes.STRING,
        bet_options_1: DataTypes.STRING,
        bet_answer_1: DataTypes.STRING,
        
        bet_text_2: DataTypes.STRING,
        bet_options_2: DataTypes.STRING,
        bet_answer_2: DataTypes.STRING,
        
        bet_options_3: DataTypes.STRING,
        bet_answer_3: DataTypes.STRING,
        winning_user_id: DataTypes.INTEGER
    });
};