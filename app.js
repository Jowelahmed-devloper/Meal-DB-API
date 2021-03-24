const getFoods =()=>{
    const foodInput = document.getElementById('food-input').value;
    document.getElementById('food-input').value =''
    const url =`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodInput}`
    fetch(url)
    .then(res => res.json())
    .then(data=> {
        displayFoods(data.meals);
    })
}

const displayFoods = foods =>{
    console.log(foods);
    const foodsContainer = document.getElementById('foods-container')
    foodsContainer.innerHTML ='';
    foods.forEach(food => {
        const foodContainer = document.createElement('div');
        foodContainer.className = 'col-md-4'
        foodContainer.innerHTML =`
            <div class="col-md-4">
                <h4 class="text-center">${food.strMeal}</h4>
                <img class="food-img" src="${food.strMealThumb}" alt="">
            </div>
            `

            foodsContainer.appendChild(foodContainer)
    });
}
