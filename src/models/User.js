const Sequelize = require('sequelize');

module.exports = global.sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})