//alert("Can you see this?");

/*
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page. 
    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include
    the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    Image (of specific coffee)
    alt tag (identifies type of coffee)
    description (of this type oof coffee)
    weekday
    color (supporting image)

    The unique color could affect the background HTML, or an element on the page for each day of the week. 
    All of the above must occur within one page.
*/



function coffeeTemplate(coffee){

    return `<p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong>${coffee.day}'s Coffee Special</strong> : ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
    </p>`;

}



let myDate = new Date() ;
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day")
}else{//today's day of week
    myDay = today;
}

//change string to an integer
myDay = parseInt(myDay)


switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some Bubble Tea!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"brown",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: `It's cold, so caramel latte sounds good!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"black",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: `Cold brew for when we're serious!`
        };
    break;
    
    case 4:
        today = "Thursday";
        coffee = {
            color:"yellow",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a drip",
            day: "Thursday",
            desc: `A drip a day keeps the low energy far away!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"violet",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Friday",
            desc: `It's frappaccino Friday!`
        };
    break;
    
    case 6:
        today = "Saturday";
        coffee = {
            color:"orange",
            name: "Pumpkin Spice latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spic latte",
            day: "Saturday",
            desc: `Let's spice up the day with some Pumpkin Spice Latte!`
        };
    break;

    case 0:
        today = "Sunday";
        coffee = {
            color:"green",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of a mocha",
            day: "Sunday",
            desc: `Mocha Sundays are the besttt!`
        };
    break;

    default:
        alert("something went wrong!");
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

   //change the background color of the HTML element
   document.querySelector("html").style.backgroundColor = coffee.color;