export default class User {
  constructor(id, username, email, password, posts, comments) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = posts;
    this.comments = comments;
  }
}
