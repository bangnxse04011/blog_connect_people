const connection_db = require('./db_connect');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Account_users = connection_db.define('account_users', {
    fullName: { type: Sequelize.STRING },
    email : { type : Sequelize.STRING },
    id_user: { type: Sequelize.STRING },
    user_name : { type: Sequelize.STRING },
    pass_word : { type: Sequelize.STRING },
    link_avata : { type: Sequelize.STRING },
    role : {type: Sequelize.INTEGER },
    status : {type: Sequelize.INTEGER }
});

// Account.sync();

module.exports = Account;

