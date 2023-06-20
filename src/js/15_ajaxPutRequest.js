async function postData() {
  let res = await axios.post("https://api.example.com/data", {
    name: "John Doe",
    email: "johndoe@example.com",
  });
  if (res.status === 200) {
    console.log(res?.data);
  } else {
    alert("Wrong");
  }
}

postData()