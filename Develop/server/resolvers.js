const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('./models'); 

const resolvers = {
  Query: {
   
    me: async (_, __, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('savedBooks');
        return user;
      }
      throw new AuthenticationError('You need to be logged in.');
    },
    
  },
  Mutation: {
    
    login: async (_, { email, password }) => {
      
    },
    
    addUser: async (_, args) => {
      
      
    },
   
    saveBook: async (_, { bookData }, context) => {
      
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { savedBooks: bookData } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in.');
    },
   
    removeBook: async (_, { bookId }, context) => {
      
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
    

module.exports = resolvers;