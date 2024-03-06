<<<<<<< HEAD
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
=======
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
<<<<<<< HEAD
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );
=======
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c

        return userData;
      }

<<<<<<< HEAD
      throw AuthenticationError;
=======
      throw new AuthenticationError('Not logged in');
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
<<<<<<< HEAD
        throw AuthenticationError;
=======
        throw new AuthenticationError('Incorrect credentials');
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
<<<<<<< HEAD
        throw AuthenticationError;
=======
        throw new AuthenticationError('Incorrect credentials');
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: bookData } },
          { new: true }
        );

        return updatedUser;
      }

<<<<<<< HEAD
      throw AuthenticationError;
    },
    removeBook: async (parent, { bookId }, context) => {
      console.log(context.user);
=======
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );

        return updatedUser;
      }

<<<<<<< HEAD
      throw AuthenticationError;
=======
      throw new AuthenticationError('You need to be logged in!');
>>>>>>> 8a0f0e7804531df01768dc8e4d0965b30d28f23c
    },
  },
};

module.exports = resolvers;
