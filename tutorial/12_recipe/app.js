const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '2cec52bc'
const APP_KEY = 'bf0983ed5a317cf45dac00ca178efe48'

//api.edamam.com/search
//api.edamam.com/search?q=chicken&app_id=${2cec52bc}&app_key=${bf0983ed5a317cf45dac00ca178efe48}&from=0&to=3"


async function getRecipe (query) {
  const baseURL =
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
  const response = await fetch(baseURL)
  const data = await response.json()
  console.log(data.hits);
}

function init() {
  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const query = input.value
    if(query === '') return
    getRecipe(query)
    input.value = ''
  })
}



init()