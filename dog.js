document.addEventListener("DOMContentLoaded",function(){
    //retrieving the value of breed from the url. Which was passed from index page.
    const urlParams = new URLSearchParams(window.location.search);
    const selectedBreed = urlParams.get("breed");



    document.getElementById("dogName").textContent = selectedBreed.toUpperCase();       //showing the heading with breed name.



    //making a http request to dog api with selectedBreed as the name of breed.
    let dogImage = fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);          //making an http request to dog api to fetch the image of the dog. Here a parameter is passed in the api (selectedBreed) which will give image of the selected breed.
            dogImage.then((response) => {                                               //attaching a callback to promise, here response is the response from the server.
                return response.json();                                                 //extracting json from response
            })
            .then((imagUrl) => {                                                        //the imageUrl is an object which will be passed here.
                const url = imagUrl.message;                                            //from the object of imagUrl we are fetching message. Which will give us the url of the image. Also this will return an array of urls of particular breed, but we need to show only one. So we will use url at index-0.
                
                const imageElement = document.getElementById('dogImage');               //finding image tag with its id 
                imageElement.src = url[0];                                              //setting the image tag's src to the url of the selected breed image url.
            });



    //when user clicks back button , redirect him to index page.
    document.getElementById("backButton").addEventListener("click",function(){
        window.location.href = "index.html";                                            //redirecting back to index
    });
    
});