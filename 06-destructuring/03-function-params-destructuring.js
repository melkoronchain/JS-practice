const userProfile = {
  user: 'Root',
  post: 1,
  commentsQty: 1
};

// Destructuring in function parameters
const getUserInfo = ({ user, commentsQty }) => {
  if (!commentsQty) {
    return `User ${user} has no comments`;
  }
  return `User ${user} has ${commentsQty} comments`;
};

console.log(getUserInfo(userProfile));