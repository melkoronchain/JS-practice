//Default Parameters

function multiply(price, multiplier = 1) {
  return price * multiplier;
}

multiply(10);     // 10
multiply(10, 3);  // 30

//Default Parameters with Objects

function createPost(post, createdAt = new Date()) {
  return {
    ...post,
    createdAt
  };
}

const firstPost = {
  id: 1,
  author: 'Ruslan'
};

createPost(firstPost);