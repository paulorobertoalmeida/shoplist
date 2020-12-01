const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['almond milk', 'avocado', 'cheese', 'halloumi' ]
const fridge = []

fridge.push('onion', 'salad', 'chocolate', 'crisps', 'egg')



let item = buyList.shift()
fridge.unshift(item)



function moveUp(){
    //your code
    let grocery = fridge.pop()
    buyList.push(grocery)
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

upButton.addEventListener('click', moveUp)


function moveDown(){
    //your code
    let item = buyList.pop()
    fridge.unshift(item)
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge