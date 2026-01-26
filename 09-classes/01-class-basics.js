class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
}

const firstComment = new Comment('Hello Man!');
console.log(firstComment.votesQty); // 0

firstComment.upvote();
console.log(firstComment.votesQty); // 1

const secondComment = new Comment('Hello Woman!');

console.log(firstComment.text);  // Hello Man!
console.log(secondComment.text); // Hello Woman!

secondComment.upvote();
console.log(secondComment.votesQty); // 1
