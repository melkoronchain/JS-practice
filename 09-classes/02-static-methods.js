class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}

console.log(Comment.mergeComments('Hello', 'World!')); // Hello World!

const newComment = new Comment('Hey');
console.log(newComment.text); // Hey
