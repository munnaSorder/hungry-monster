document.getElementById('search-btn').addEventListener('click', function() {
   const userInput = document.getElementById('input-field');
   const searchResult = document.getElementById('search-result');
   const userValue = userInput.value;


   const api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userValue}`

   fetch(api)
   .then(response => response.json())
   .then(data => {
       data.meals.forEach(data => {
           console.log(data);
           searchResult.innerHTML = `
           <div class="col">
            <div class="card h-100">
                <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body bg-light">
                    <h5 class="card-title text-center">${data.strMeal}</h5>
                </div>
            </div>
         </div>
           `
       })
   })
})