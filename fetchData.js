const fetch = require("node-fetch");
const dataUser = fetch("https://jsonplaceholder.typicode.com/usersa")
  .then((response) =>
    response
      .json()
      .then((datas) => datas.forEach((el) => console.log(el.name)))
      .catch((e) => console.log(e.name))
  )
  .catch((e) => console.log(e.message));

dataUser;
