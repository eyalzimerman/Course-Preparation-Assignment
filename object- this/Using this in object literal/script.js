function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

  /* the result is an error, the value of this in makeUser
  is undefined because its called like function and not like method */