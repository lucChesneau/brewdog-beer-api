const itemContainer = document.querySelector(".items-container");

function plusieursItems(){

    let item = document.createElement("div");
    item.classList.add("item");
    let image = document.createElement("img");
    image.classList.add("beerIMG");
    let desc1 = document.createElement("div");
    desc1.classList.add("desc1");
    let pName = document.createElement("p");
    pName.setAttribute("data-name", "");
    let pDegrees = document.createElement("p");
    pDegrees.setAttribute("data-degrees", "");
    let pTypeOfBeer = document.createElement("p");
    pTypeOfBeer.setAttribute("data-typeofbeer", "");
    let pFirstBrewed = document.createElement("p");
    pFirstBrewed.setAttribute("data-first-brewed", "");
    let pVolume = document.createElement("p");
    pVolume.setAttribute("data-volume", "");
    let desc2 = document.createElement("div");
    desc2.classList.add("desc2");
    let pDescription = document.createElement("p");
    pDescription.setAttribute("data-description", "");
    let pIngredients  = document.createElement("p");
    pIngredients.setAttribute("data-ingredients", "");

    desc1.appendChild(pName);
    desc1.appendChild(pDegrees);
    desc1.appendChild(pTypeOfBeer);
    desc1.appendChild(pFirstBrewed);
    desc1.appendChild(pVolume);

    desc2.appendChild(pDescription);
    desc2.appendChild(pIngredients);

    item.appendChild(image);
    item.appendChild(desc1);
    item.appendChild(desc2);

    itemContainer.appendChild(item);
}

for (i = 0; i < 24; i++) {
    plusieursItems();
}

function callAPI (x){
    window.fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(resjJson => {
            console.log(resjJson.length);

            
            const beerItem = document.querySelectorAll(".item");
            const beerItemImg = document.querySelectorAll(".beerIMG");
            const beerItemName = document.querySelectorAll("p[data-name]");
            const beerItemDegrees = document.querySelectorAll("p[data-degrees]");
            const beerItemTypeof = document.querySelectorAll("p[data-typeofbeer]");
            const beerItemFirstBrew = document.querySelectorAll("p[data-first-brewed]");
            const beerItemVolume = document.querySelectorAll("p[data-volume]");
            const beerItemDesc = document.querySelectorAll("p[data-description]");

            var beerName = resjJson[x].name;
            beerItemName[x].innerHTML = beerName.toUpperCase();

            var beerIMG  = resjJson[x].image_url;
            beerItemImg[x].setAttribute("src", beerIMG);

            var beerDegrees = resjJson[x].abv;
            console.log(beerItemDegrees);
            beerItemDegrees[x].innerHTML = beerDegrees + "°";

            var beerTypeof = resjJson[x].ebc;
            beerItemTypeof[x].innerHTML = beerTypeof + " EBC";

            var beerFirstBrew = resjJson[x].first_brewed;
            beerItemFirstBrew[x].innerHTML = "FIRST-BREWED: <br/>" + beerFirstBrew;

            var beerVolume= resjJson[x].volume.value;
            beerItemVolume[x].innerHTML = beerVolume + "L"; 

            var beerDesc = resjJson[x].description;
            beerItemDesc[x].innerHTML = beerDesc;

            
        })
}

for (i = 0; i < 25; i++) {
    callAPI(i);
}

function destroyItems(){
    var itemsToDestroy = document.querySelectorAll(".item");
    for(i = 0; i < itemsToDestroy.length; i++){
        itemsToDestroy[i].style.display = "none";
        
    }
}


function filter(param) {

    var itemsToFilter = document.querySelectorAll(".item");
    var takeDegrees = document.querySelectorAll("p[data-degrees]");
    var takeTypeOfBeer = document.querySelectorAll("p[data-typeofbeer]");

    
    if(param == "tout"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            if(itemsToFilter[i].style.display == "none") {
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    if(param == "moinsde6"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            degreesText = takeDegrees[i].innerText;
            degreesCompare = degreesText.substring(0, degreesText.length - 1);
            if(degreesCompare < 6.0) {
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    if(param == "plusde6"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            degreesText = takeDegrees[i].innerText;
            degreesCompare = degreesText.substring(0, degreesText.length - 1);
            if(degreesCompare >= 6.0) {
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    if(param == "blanche"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            typeOfBeerText = takeTypeOfBeer[i].innerText;
            typeOfBeerCompare = typeOfBeerText.substring(0, typeOfBeerText.length - 3);
            if(typeOfBeerCompare >= 6 && typeOfBeerCompare <= 8) {
                
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    if(param == "blonde"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            typeOfBeerText = takeTypeOfBeer[i].innerText;
            typeOfBeerCompare = typeOfBeerText.substring(0, typeOfBeerText.length - 4);
            if(typeOfBeerCompare > 8 && typeOfBeerCompare <= 20) {
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    if(param == "ambrees"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            typeOfBeerText = takeTypeOfBeer[i].innerText;
            typeOfBeerCompare = typeOfBeerText.substring(0, typeOfBeerText.length - 4);
            if(typeOfBeerCompare > 21 && typeOfBeerCompare <= 45) {
                console.log(typeOfBeerCompare);
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    if(param == "brune"){
        destroyItems();
        for(i = 0; i < itemsToFilter.length; i++){
            typeOfBeerText = takeTypeOfBeer[i].innerText;
            typeOfBeerCompare = typeOfBeerText.substring(0, typeOfBeerText.length - 4);
            if(typeOfBeerCompare > 45) {
                itemsToFilter[i].style.display = "grid";
            }
        }
    }
    
    
    
    

}