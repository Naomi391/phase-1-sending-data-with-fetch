// Add your code here
function submitData(userName, userEmail) {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };
  return fetch("http://localhost:3000/users", configObject)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      console.log(data); // Example: Log the data to the console
    })
    .catch(function (error) {
      alert("Unauthorized Access");
      console.log(error.message);
    });
}
submitData("Naomi", "nash@gmail.com");
