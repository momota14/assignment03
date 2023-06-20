async function getList() {
  let URL = "https://api.example.com/data";
  let res = await axios.get(URL);
  if (res.status === 200) {
    console.log(res?.data);
  } else {
    alert("Wrong");
  }
}

getList()
