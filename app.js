const menu =[
    {
    id: 1,
    title: "Choclate Pancake",
    category : "breakfast",
    price :2500,
    img: "pancake.jpeg",
    desc: "A pancake (or hotcake, griddlecake, or flapjack) is a flat cake filled with choclate and nuts."
},
{
    id: 2,
    title: "Rice wrap",
    category : "lunch",
    price : 300,
    img: "ricewrap.jpg",
    desc: "Vietnamese Rice Paper Rolls are packed with bright, fresh flavours and served with an insanely addictive Vietnamese Peanut Dipping Sauce "
},
{
    id: 3,
    title: "Pasta",
    category : "lunch",
    price :300,
    img: "images.jpg",
    desc: " Masala pasta recipe made in Indian style with Indian spices, herbs, mix veggies & pasta."
},
{
    id: 4,
    title: "Mojito",
    category : "dinner",
    price :149,
    img: "mojito.jpg",
    desc: "Mojito is a traditional Cuban punch. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint."
},
{
    id: 5,
    title: "Manchurian",
    category : "dinner",
    price :239,
    img: "manchurian.jpg",
    desc: "Manchurian is a class of Indian Chinese dish made by roughly chopping and deep-frying ingredients such as chicken, cauliflower, prawns, fish, mutton, and paneer, and then sautéeing them in a sauce flavored with soy sauce."
},
{
    id: 6,
    title: "Paratha",
    category : "lunch",
    price :99,
    img: "paratha.jpg",
    desc: " Paratha is an Indian flatbread that is a staple in many Indian homes served for breakfast. It is made with whole wheat flour aka atta."
},
{
    id: 7,
    title: "Burger",
    category : "breakfast",
    price :250,
    img: "burger.jpg",
    desc: "A hamburger or simply burger is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. "
},
{
    id: 8,
    title: "Chat",
    category : "dinner",
    price :175,
    img: "chaat.jpg",
    desc: "The chaat is a mixture of potato pieces, crisp fried bread dahi vada or dahi bhalla, gram or chickpeas and tangy-salty spices, with sour Indian chili and saunth etc. "
},
{
    id: 9,
    title: "Milshake",
    category : "breakfast",
    price : 259,
    img: "milkshake.jpg",
    desc: "A milkshake is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, or fruit syrup into a thick, sweet, cold mixture. "
},

];
const sectionCenter= document.querySelector(".section-center");
const container =document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded",function(){
   displayMenuItems(menu);
   displayMenuButtons();
});  




function displayMenuItems(menuItems){
    let displayMenu = menuItems.map( function (item){
        return `<article class="menu-item">
        <img src= ${item.img} class="img"/ >
        <div class="item">
            <header>
                <h4>${item.title}</h4>
                <h3 class="price">₹${item.price}
                </h3>
            </header>
            <p class="description">${item.desc}</p>
        </div>
    
    </article>`;
    });
    displayMenu=displayMenu.join("");

    sectionCenter.innerHTML=displayMenu;
}
function displayMenuButtons(){
    const categories=menu.reduce(
        function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
    return values;
       }, ["all"] 
       );
       const categoryBtns = categories
       .map(function(category){
       return `<button type="button" class=" filter-btn" data-id=${category }>${category} </button>`;
       })
     .join("");
       container.innerHTML= categoryBtns;
       const filterBtns = document.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(function (btn){
     btn.addEventListener("click", function(e){
        const category= e.currentTarget.dataset.id;  
         const  menuCategory = menu.filter( function(menuItem){
            if(menuItem.category===category){
            return menuItem;
            }
         });
    if(category==="all"){
        displayMenuItems(menu);
    }
    else{
        displayMenuItems(menuCategory);
    }
    });
});

}