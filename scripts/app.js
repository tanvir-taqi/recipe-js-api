



const dispalyFood = (meals) => {
    const foodContainer = document.getElementById('food-container')
    foodContainer.innerHTML = ''
    const foods = meals.meals
    foods.forEach(food => {
        const mealDiv = document.createElement('div')

        mealDiv.innerHTML = `
        <div class="card p-4 food-card" >
  <img src="${food.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${food.strMeal}</h5>
    <p class="card-text">${food.strCategory}</p>
    <button class="btn recipe-btn" onclick="loadRecipe(${food.idMeal})">Recipe</button>
  </div>
  </div>
        `
        mealDiv.classList.add('col')
        foodContainer.appendChild(mealDiv)
    });
}
const loadRecipe = (idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayRecipe(data))
}
const displayRecipe = (meals)=>{
   
    const meal = meals.meals
    const recipe = meal[0].strInstructions
    const recipename = meal[0].strMeal
    const detailsContainer = document.getElementById('recipe-details')
    detailsContainer.innerHTML = ''
    const recipeDiv = document.createElement('div')
    recipeDiv.innerHTML = `
    <h2 class="text-center">${recipename}</h2>
    <p class="text-center ">${recipe}</p>
    `
    detailsContainer.appendChild(recipeDiv)
}


const loadFood = (search='') => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

    fetch(url)
        .then(res => res.json())
        .then(data => dispalyFood(data))
}



const catagory = document.getElementsByClassName('catagory')
for (let element of catagory) {
    element.addEventListener('click', (e) => {
        const btnValue = e.target.value
        loadFood(btnValue)
    })
}

const othersFoood =  ()=>{
   loadFood()
}

loadFood()