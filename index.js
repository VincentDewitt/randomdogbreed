'use strict';
function getDogImage(userBreed){
    fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>{
        releasetheHounds(responseJson)})
        .catch(error => alert('Something went wrong. Try again later.'));
        
    }
   
function submitButton(){
    $(".submitform").on("submit", event =>{
        event.preventDefault();
        $(".dog-results").empty()
        let userBreed = $(".breedinput").val()
        console.log(userBreed);
        getDogImage(userBreed);
        console.log("submitButton"); 
    })
    }

    function releasetheHounds(responseJson){
        $(".dog-results").append(
            `<img src="${responseJson.message}">`
        )
            console.log("releasehounds");
    }
    submitButton();

