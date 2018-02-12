// Test sequelized exports

module.exports = function(sequelize, DataTypes){
	var Test = sequelize.define('Test',{
		test_name: 
		{
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	return Test;
};