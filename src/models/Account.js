export class Account {

  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.picture = data.picture;
    this.bio = data.bio;
    this.coverImg = data.coverImg;
    this.resume = data.resume;
    this.graduated = data.graduated;
    this.linkedin = data.linkedin;
  }
}
