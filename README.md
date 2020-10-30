# The Lord of the Rings App

An application that displays The Lord of the Ring movies and stats 

## Technologies Used

- HTML 5
- CSS3
- JavaScript
- jQuery
- Google Fonts
- The One API

## Screenshots
![Wireframe](imgs/Wireframe.png)
![Wireframe](imgs/card.png)

## Getting Started
[Click Here](https://dnorman7.github.io/LOTRApp.github.io/) to see the deployed app!

## Obstacles
- Changing APIs because of the CORS error
- Figuring out where to put my access token to access all the data from my API
```$.ajax({
        url: BASE_URL,
        headers: {
            Authorization: 'Bearer rnR526SUQ5_I9IhklT-P'
        }
```
- Displaying data in modal 
``` function render(showModal) {
    if(showModal === true) {
        //getting one piece of the data by finding it by the ID    
        const singleData = lotrDetail.docs.find(name => name._id == myId)
        
        //shows modal
        const $modalContent = $(`
            <p>Academy Award Wins: ${singleData.academyAwardWins}</p>
            <p>Academy Award Nominations: ${singleData.academyAwardNominations}</p>
            <p>Rotten Tomatos Score: ${singleData.rottenTomatesScore}</p>
            <p>Runtime in Minutes: ${singleData.runtimeInMinutes}</p>
        `);```

