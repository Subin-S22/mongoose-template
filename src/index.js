const mongoose = require("mongoose");

const Users = require("./model/user/index");

mongoose.connect("mongodb://localhost/testdb", () => {
  console.log("connected");
});

saveUser();

async function saveUser() {
  try {
    const res = await Users.create({
      name: "Bane",
      age: 30,
      email: "bane@gmail.com",
      hobbies: ["cricket", "music"],
      address: { street: "5th cross", city: "bangalore" },
    });
    // const user = new Users({ name: "kane", age: 40 });
    // const res = await user.save();

    //updating the properties
    res.name = "Batman";
    await res.save();
    res && console.log("user saved", res);
  } catch (err) {
    console.log(err.message);
  }
}
