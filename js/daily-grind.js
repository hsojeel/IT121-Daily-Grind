// alert("It's working!");

/*


        One unique image, with appropriate and matching content in the alt tag.  


        A paragraph or two of content that describes the daily item 
        (paragraph must include the name of the highlighted weekday)


        A unique color that supports the image and paragraph of content


        Here are the items we need to change for each coffee:

        image - src of pic
        alt - alt tag of pic
        description - a paragraph of content about the coffee
        name - a name of today's coffee
        color - a color representing the coffee

        We may also use the following, but not part of the coffee itself

        today - the current day of the week


*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
   <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
</p>`;

    return myReturn;
}

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//data available? show data from url
    myDay = urlParams.get("day");
}

//force to be an integer
myDay = parseInt(myDay);

switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            color: "crimson",
            name: "Frappacinno",
            pic: "images/frappaccino.jpg",
            alt: "Frappacinno",
            day: "Sunday",
            desc: "This has a nice blend to it!"
        }
    break;

    case 1:
        today = "Monday";

        coffee = {
            color: "light brown",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "Caramel Latte",
            day: "Monday",
            desc: "You can never go wrong with caramel!"
        }
        

    break;

    case 2:
        today = "Tuesday";

        coffee = {
            color: "tan",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "Drip",
            day: "Tuesday",
            desc: "Too much drip.."
        }
        

    break;

    case 3:
        today = "Wednesday";

        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a Bubble Tea",
            day: "Wednesday",
            desc: `Yum, are there really bubbles in the tea?`
        };

    break;

    case 4:
        today = "Thursday";

        coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            day: "Thursday",
            desc: `Mocha?`
        };

    break;

    case 5:
        today = "Friday";

        coffee = {
            color: "blue",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "Cold Brew",
            day: "Friday",
            desc: `The witches brew it in the cold.?`
        };

    break;

    case 6:
        today = "Saturday";

        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "Pumkin Spice Latte",
            day: "Saturday",
            desc: `Ask for roated pumpkin seeds with it!`
        };

    break;

    default:
        today = "Something went wrong!";
}

// let coffeeData = coffeeTemplate(coffee);
// alert(coffee.pic);

// load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

// console.log(coffee);