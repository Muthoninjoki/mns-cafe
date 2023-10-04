document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("mnCafeMenu");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let drink = document.getElementById("drink").value;
    let sausageAmount = document.getElementById("amount-sausages").value;
    let eggAmount = document.getElementById("amount-eggs").value;
    let doneness = document.getElementById("doneness").value;
    let toppings = document.querySelectorAll('input[name="topping"]:checked');
    let selectedToppings = Array.from(toppings).map(topping => topping.value);
    let cheese = document.querySelector('input[name="cheese"]:checked');
    let bread = document.getElementById("bread").value;
    let sauce = document.getElementById("sauce").value;
    let extraInfo = document.getElementById("extra").value;

    console.log("Drink: " + drink);
    console.log("Sausage Amount: " + sausageAmount);
    console.log("Egg Amount: " + eggAmount);
    console.log("Doneness: " + doneness);
    console.log("Selected Toppings: " + selectedToppings.join(", "));
    console.log("Cheese: " + (cheese ? cheese.value : "No"));
    console.log("Bread: " + bread);
    console.log("Sauce: " + sauce);
    console.log("Extra Info: " + extraInfo);

    let  formData = {
      drink,
      sausageAmount,
      eggAmount,
      doneness,
      selectedToppings,
      cheese: cheese ? cheese.value : "No",
      bread,
      sauce,
      extraInfo,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("Data sent successfully:", data);
    })
    .catch(error => {
      console.error("Error sending data:", error);
    });


    form.reset();
  });
});
