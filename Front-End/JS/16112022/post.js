async function _openIMG(img) {
    selectedImg = img;
    console.log(selectedImg.id);
    await fetch(url + "/post/" + selectedImg.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "telran",
        "ngrok-skip-browser-warning": "69420",
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        sessionStorage.setItem("image", data.image);
        sessionStorage.setItem("title", data.title);
        sessionStorage.setItem("description", data.description);
        sessionStorage.setItem("author", data.author.username);
      });
  }