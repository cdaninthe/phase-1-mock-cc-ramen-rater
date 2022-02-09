// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('ramen-menu')
    const details = document.getElementById('rament-detail')
    const rating = document.querySelector("#rating-display")
    const comment = document.querySelector("#comment-display")
    const form = document.querySelector("#new-ramen")
    const newName = document.querySelector("#new-name")
    const newRestaurant = document.querySelector("#new-restaurant")
    const newImage = document.querySelector("#new-image")
    const newRating = document.querySelector("#new-rating")
    const newComment = document.querySelector("#new-comment")
    fetchRamen()

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let ramen = {
            name: newName.value,
            restaurant:  newRestaurant.value,
            image: newImage.value,
            rating: newRating.value,
            comment: newComment.value
        }
        
        displayRamen(ramen)

        newName.value = ''
        newRestaurant.value = ''
        newImage.value = ''
        newRating.value = ''
        newComment.value = ''
    })


    //fetch ramen
    function fetchRamen(){
        fetch('http://localhost:3000/ramens')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(ramen => displayRamen(ramen))
        })
    }

    //Display the image for each ramen
    function displayRamen(ramen){
        const img = document.createElement('img')
        img.src = ramen.image
        menu.appendChild(img)

        img.addEventListener('click', () => {
            console.log(ramen.id)
            ramenDetails(ramen)
        })
    }

    //Display ramen details
    function ramenDetails(ramen){
        const img = document.querySelector(".detail-image")
        img.src = ramen.image
        img.alt = ramen.name

        const name = document.querySelector(".name")
        name.textContent = ramen.name

        const restaurant = document.querySelector(".restaurant")
        restaurant.innerText = ramen.restaurant

        rating.innerText = ramen.rating

        comment.innerText = ramen.comment
    }

    


})
