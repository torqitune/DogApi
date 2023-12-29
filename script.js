let breed = fetch("https://dog.ceo/api/breeds/list/all"); // here I am making an http request to dog API.

breed.then((value) => {                               // here 'then' method is attaching a callback to a promise, here the value parameter is the response from the server.
      return value.json();                              //this line extracst the json from the response
  }).then((value2) => {                               //here value2 is the extracted json data.
  
    const breedObject = value2.message; //value2 passed is itself an object of objects. So from that we are fetching message. message contains objects which has array.

    //In JS , an object has key value pair.And here properties are keys here.
    for (const breedName in breedObject) {            //this loop will traverese properties(keys) of breedObject. Here breedName will be current property(key)
      if (breedObject.hasOwnProperty(breedName)) {    //this line checks if the property(breedName) is of object only and not inherited from somewhere. We here are simply just checking if a information belongs direclty to objects not to something else.
        const markup = `<li breed="${breedName}">${breedName.toUpperCase()}</li>`; //this line creates a String(markup) that has a list item containing name of current breed. Also here an attribute breed is storing the current breedName.
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup); //here we are finding ul in the document then insert HTML content at the end of ul before the closing tag of ul.
      }
    }


    //adding event listner to each list item
    document.querySelectorAll("li").forEach((item) => {               //traversing each list item using for loop
      item.addEventListener("click", function () {
        //adding an event listener to item . Here item is current 'li' tag.
        const selectedBreed = this.getAttribute("breed");             //here selectBreed is the breed name of the clicked breed. We are fetching breed name from the attribute breed of 'li' tag.

        // redirecting to another page with selected breed as a parameter.
        window.location.href = `dogPage.html?breed=${selectedBreed}`;
      });
    });
  });
