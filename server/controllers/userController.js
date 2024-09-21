const User = require('../models/userModel');
const userController = {};
userController.createUser = (req, res, next) => {
  const {username, password} = req.body;
  if(username && password) {
    User.findOne({username})
    .then(thisUser => {
      if(thisUser === null) {
          User.create({username, password})
            .then((user) => {
              res.locals.user = user;
              return next();
            })
            .catch(err => {
              return next({
                log: 'error in creating user'+ err.message,
                message: 'Failed to create user'
              });
            })
      } else {
        return next({
          log:'the user already exists when creating user',
          status:409,
          message:'User already exists'
        })
      }
    })
    .catch(error => {
      return next({
        log:'error in finding user first in sign up page' + error.message,
        message: 'Failed to find user'
      })
    })
  } else{
    return next({
      log: 'missing data in creating student',
      status: 400,
      message: 'missing data: cannot find email or password in req.body',
    });
  }
};

userController.verifyUser = (req, res, next) => {
  const {username, password} = req.body;
  if(username && password) {
    User.findOne({username})
    .then(thisUser => {
      if(thisUser === null) {
        return next({
          log: 'cannot find the user in database',
          status: 401,
          message: 'Invalid information',
        })
      } 
      if(thisUser.password === password) {
        res.locals.currentUser = thisUser;
        return next();
      } 
      return next({
        log: 'password and record does not match',
        status: 401,
        message: 'Invalid information',
      })
    }).catch(err => {
      return next({
        log:'error in finding user first in login page' + err.message,
        message: 'fail to find user when verifying user in login page'
      });
    })
  } else {
    return next({
      log: 'cannot find email/pwd in req.body',
      status: 400,
      message: 'missing data: cannot find email or password in req.body',
    });
  }

};
module.exports = userController;