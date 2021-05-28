const fetchRandItem = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/groceries/random"
    );
    const responseBody = await response.json().name;
    console.log("responseBody:", responseBody);
    return responseBody;
  } catch (err) {
    console.error("Error in fetch!");
    console.error(err);
  }
};

const addItemToPage = async () => {
  const randItem = await fetchRandItem();

  const currentList = document.querySelector("list");

  currentList.appendChild(randItem);
};
addItemToPage();
