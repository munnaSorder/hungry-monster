// Search Result show function
document.getElementById('search-btn').addEventListener('click', function() {
   const userInput = document.getElementById('input-field');
   const searchResult = document.getElementById('search-result');
   const userValue = userInput.value;
   const api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userValue}`

   fetch(api)
   .then(response => response.json())
   .then(data => {
       document.getElementById('error-message').innerHTML = '';
       data.meals.forEach(data => {
                searchResult.innerHTML += `
                    <div class="col">
                        <div onclick="foodIngredients(${data.idMeal})" class="card h-100">
                            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body bg-light">
                                <h5 class="card-title text-center">${data.strMeal}</h5>
                            </div>
                        </div>
                    </div>
            `
       })
   })
   .catch(err => {
    document.getElementById('error-message').innerHTML = `<h1 style="color:red" class="text-center">Sorry your keyword is wrong. You can search with ingredients such as egg, beef, chicken, etc.
    </h1>`;
   })
   searchResult.innerHTML = ``;
});

// show food-ingredients function
function foodIngredients(id){
    const ingredientsPopup = document.getElementById("food-ingredients");
    ingredientsPopup.style.display = "block";
    const ingredients = document.getElementById('food-ingredients');
    const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        ingredients.innerHTML = `
        <div class="card mb-3 ingredient-card">
            <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h1 class="card-title">${data.meals[0].strMeal}</h1>
                <h5 class="card-text">Ingredient</h5>
                <p><i class="fa fa-check-square" style="color:rgb(202, 125, 37)" aria-hidden="true"></i> ${data.meals[0].strIngredient1}</p>
                <p><i class="fa fa-check-square" style="color:rgb(202, 125, 37)" aria-hidden="true"></i> ${data.meals[0].strIngredient2}</p>
                <p><i class="fa fa-check-square" style="color:rgb(202, 125, 37)" aria-hidden="true"></i> ${data.meals[0].strIngredient3}</p>
                <p><i class="fa fa-check-square" style="color:rgb(202, 125, 37)" aria-hidden="true"></i> ${data.meals[0].strIngredient4}</p>
                <p><i class="fa fa-check-square" style="color:rgb(202, 125, 37)" aria-hidden="true"></i> ${data.meals[0].strIngredient5}</p>
                <p><i class="fa fa-check-square" style="color:rgb(202, 125, 37)" aria-hidden="true"></i> ${data.meals[0].strIngredient6}</p>
                <p>${data.meals[0].strInstructions}</p>
                <button onclick="closeBtn()" class='btn btn-danger'><i class="fa fa-times-circle" aria-hidden="true"></i></button> <a class="youtube btn btn-warning" href="${data.meals[0].strYoutube}" target="_blank">Watch Now</a>
            </div>
      </div>
        `
    })
}

// Result Popup close function
function closeBtn(){
    const ingredientsPopup = document.getElementById("food-ingredients");
    ingredientsPopup.style.display = "none";
}