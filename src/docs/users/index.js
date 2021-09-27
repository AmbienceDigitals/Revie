const getReviews = require('./reviews/get-reviews');
const getReview = require('./reviews/get-review');
const createReview = require('./reviews/create-review');
const updateReview = require('./reviews/update-review');
const deleteReview = require('./reviews/delete-review');
const getUsers = require('./get-users');
const getUser = require('./get-user');
const createUser = require('./create-user');
const deleteUser = require('./delete-user');

module.exports = {
    paths:{
        '/Reviews':{
            ...getReviews,
            ...createReview
        },
        '/Reviews/{id}':{
            ...getReview,
            ...updateReview,
            ...deleteReview
        },
        '/Users':{
            ...getUsers,
            ...createUser
        },
        '/Users/{id}':{
            ...getUser,
            ...deleteUser,
        },
    },
}