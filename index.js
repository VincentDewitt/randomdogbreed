'use strict';
function getDogImage(userBreed){
    fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
    .then(response => {
     if (response.ok){
      return response.json();
     }
     throw new Error("Something has gone wrong.")
    })
    .then(responseJson =>{
        releasetheHounds(responseJson)})
        .catch(error => alert('That Breed doesnt exist. Please try a diffrent one.'));
        
    }
   
function submitButton(){
    $(".submitform").on("submit", event =>{
        event.preventDefault();
        $(".dog-results").empty()
        let userBreed = $(".breedinput").val()
        userBreed= userBreed.toLowerCase();
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

