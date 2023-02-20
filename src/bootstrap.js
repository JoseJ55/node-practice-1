module.exports = async () => {
    const Tweet = require('./models/Tweet');
    const User = require('./models/User');

    User.hasMany(Tweet, { as: 'tweets', foreignKey: 'userId' });
    Tweet.belongsTo(User, { as: 'User', foreignKey: 'userId' });

    const errHandle = (err) => {
        console.log('Error: ', err);
    }

    const user = await User.create({ username: 'alex', password: '1234567890' }).catch(errHandle);

    const tweet = await Tweet.create({ content: 'this is tweet content.', userId: user.id }).catch(errHandle);

    const users = await User.findAll({ where: { username: 'alex' }, include: [ { model: Tweet, as: 'Tweets' } ] }).catch(errHandle);

    console.log('Tweets: ', users);
}