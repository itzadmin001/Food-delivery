import React, { useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import BurgerCard from "./BurgerCard";


function FoodMenu() {
  const [addToCart, SetaddToCart] = useState([])
  const Category = [
    {
      name: "Burger",
      icon: <PiHamburgerFill />,
    },
    {
      name: "Coffee",
      icon: <GiCoffeeCup />,
    },
    {
      name: "Pizza",
      icon: <FaPizzaSlice />,
    },
    {
      name: "Salad",
      icon: <LuSalad />,
    },
    {
      name: "rice",
      icon: <GiBowlOfRice />,
    },
    {
      name: "Hot Dog",
      icon: <FaHotdog />,
    },
    {
      name: "Drinks",
      icon: <BiSolidDrink />,
    },
  ];

  const menuItems = [
    {
      name: "Lemonade",
      short_description: "Refreshing homemade lemonade with a hint of mint.",
      price: 3.99,
      Category: "Drinks",
      image: "images/lemonade.jpg",
      weight: "340 g",
    },
    {
      name: "Iced Tea",
      short_description: "Chilled black tea with a slice of lemon.",
      price: 2.99,
      Category: "Drinks",
      image: "images/iced_tea.jpg",
      weight: "340 g",
    },
    {
      name: "Coca-Cola",
      short_description: "Classic fizzy cola in a chilled bottle.",
      price: 1.99,
      Category: "Drinks",
      image: "images/coca_cola.jpg",
      weight: "340 g",
    },
    {
      name: "Orange Juice",
      short_description: "Freshly squeezed orange juice.",
      price: 4.5,
      Category: "Drinks",
      image: "images/orange_juice.jpg",
      weight: "340 g",
    },
    {
      name: "Mango Smoothie",
      short_description: "Creamy mango smoothie with a tropical twist.",
      price: 5.49,
      Category: "Drinks",
      image: "images/mango_smoothie.jpg",
      weight: "400 g",
    },
    {
      name: "Strawberry Milkshake",
      short_description:
        "Sweet strawberry milkshake topped with whipped cream.",
      price: 4.99,
      Category: "Drinks",
      image: "images/strawberry_milkshake.jpg",
      weight: "400 g",
    },
    {
      name: "Sparkling Water",
      short_description: "Lightly carbonated mineral water.",
      price: 1.49,
      Category: "Drinks",
      image: "images/sparkling_water.jpg",
      weight: "330 g",
    },
    {
      name: "Root Beer",
      short_description: "Classic root beer served chilled.",
      price: 2.5,
      Category: "Drinks",
      image: "images/root_beer.jpg",
      weight: "355 g",
    },
    {
      name: "Hot Chocolate",
      short_description: "Rich hot chocolate topped with marshmallows.",
      price: 3.25,
      Category: "Drinks",
      image: "images/hot_chocolate.jpg",
      weight: "250 g",
    },
    {
      name: "Green Tea Latte",
      short_description: "Creamy latte made with matcha green tea.",
      price: 4.75,
      Category: "Drinks",
      image: "images/green_tea_latte.jpg",
      weight: "300 g",
    },
    {
      name: "Classic Hot Dog",
      short_description:
        "Grilled sausage in a toasted bun with ketchup and mustard.",
      price: 4.99,
      Category: "Hot Dog",
      image: "images/classic_hotdog.jpg",
      weight: "180 g",
    },
    {
      name: "Chili Cheese Dog",
      short_description: "Hot dog topped with chili and melted cheddar cheese.",
      price: 5.99,
      Category: "Hot Dog",
      image: "images/chili_cheese_dog.jpg",
      weight: "220 g",
    },
    {
      name: "Bacon Wrapped Dog",
      short_description: "Sausage wrapped in crispy bacon.",
      price: 6.49,
      Category: "Hot Dog",
      image: "images/bacon_wrapped_dog.jpg",
      weight: "200 g",
    },
    {
      name: "Vegan Hot Dog",
      short_description: "Plant-based sausage in a whole-grain bun.",
      price: 5.29,
      Category: "Hot Dog",
      image: "images/vegan_hotdog.jpg",
      weight: "190 g",
    },
    {
      name: "Cheese-Stuffed Dog",
      short_description: "Sausage stuffed with gooey cheese.",
      price: 6.99,
      Category: "Hot Dog",
      image: "images/cheese_stuffed_dog.jpg",
      weight: "210 g",
    },
    {
      name: "Spicy Jalapeño Dog",
      short_description: "Hot dog with jalapeños and spicy mayo.",
      price: 5.99,
      Category: "Hot Dog",
      image: "images/spicy_jalapeno_dog.jpg",
      weight: "200 g",
    },
    {
      name: "BBQ Dog",
      short_description: "Topped with BBQ sauce and crispy onions.",
      price: 5.79,
      Category: "Hot Dog",
      image: "images/bbq_dog.jpg",
      weight: "195 g",
    },
    {
      name: "Chicago Style Dog",
      short_description: "Pickles, tomatoes, onions, and mustard on a hot dog.",
      price: 6.19,
      Category: "Hot Dog",
      image: "images/chicago_style_dog.jpg",
      weight: "205 g",
    },
    {
      name: "Mexican Hot Dog",
      short_description: "Hot dog with salsa, avocado, and sour cream.",
      price: 6.59,
      Category: "Hot Dog",
      image: "images/mexican_hotdog.jpg",
      weight: "210 g",
    },
    {
      name: "New York Dog",
      short_description: "Hot dog with sauerkraut and spicy brown mustard.",
      price: 5.59,
      Category: "Hot Dog",
      image: "images/new_york_dog.jpg",
      weight: "200 g",
    },
    {
      name: "Fried Rice",
      short_description: "Classic fried rice with veggies and egg.",
      price: 8.99,
      Category: "Rice",
      image: "images/fried_rice.jpg",
      weight: "300 g",
    },
    {
      name: "Chicken Biryani",
      short_description: "Spiced basmati rice with marinated chicken.",
      price: 12.99,
      Category: "Rice",
      image: "images/chicken_biryani.jpg",
      weight: "400 g",
    },
    {
      name: "Vegetable Pilaf",
      short_description: "Aromatic rice cooked with mixed vegetables.",
      price: 9.49,
      Category: "Rice",
      image: "images/vegetable_pilaf.jpg",
      weight: "350 g",
    },
    {
      name: "Seafood Paella",
      short_description: "Spanish rice dish with shrimp and mussels.",
      price: 15.99,
      Category: "Rice",
      image: "images/seafood_paella.jpg",
      weight: "450 g",
    },
    {
      name: "Jasmine Rice",
      short_description: "Steamed fragrant jasmine rice.",
      price: 3.99,
      Category: "Rice",
      image: "images/jasmine_rice.jpg",
      weight: "250 g",
    },
    {
      name: "Risotto",
      short_description: "Creamy Italian rice with mushrooms.",
      price: 14.49,
      Category: "Rice",
      image: "images/risotto.jpg",
      weight: "300 g",
    },
    {
      name: "Sticky Rice",
      short_description: "Traditional sticky rice served with mango.",
      price: 6.99,
      Category: "Rice",
      image: "images/sticky_rice.jpg",
      weight: "280 g",
    },
    {
      name: "Wild Rice",
      short_description: "Nutty wild rice mix with herbs.",
      price: 7.99,
      Category: "Rice",
      image: "images/wild_rice.jpg",
      weight: "275 g",
    },
    {
      name: "Nasi Goreng",
      short_description: "Indonesian fried rice with shrimp and spices.",
      price: 10.99,
      Category: "Rice",
      image: "images/nasi_goreng.jpg",
      weight: "300 g",
    },
    {
      name: "Brown Rice",
      short_description: "Healthy steamed brown rice.",
      price: 4.99,
      Category: "Rice",
      image: "images/brown_rice.jpg",
      weight: "250 g",
    },
    {
      name: "Caesar Salad",
      short_description:
        "Classic Caesar salad with crispy croutons and parmesan.",
      price: 7.99,
      Category: "Salad",
      image: "images/caesar_salad.jpg",
      weight: "250 g",
    },
    {
      name: "Greek Salad",
      short_description: "Fresh salad with feta cheese, olives, and cucumbers.",
      price: 6.99,
      Category: "Salad",
      image: "images/greek_salad.jpg",
      weight: "230 g",
    },
    {
      name: "Caprese Salad",
      short_description:
        "Tomatoes, mozzarella, and basil with olive oil drizzle.",
      price: 8.49,
      Category: "Salad",
      image: "images/caprese_salad.jpg",
      weight: "200 g",
    },
    {
      name: "Garden Salad",
      short_description: "Mixed greens with fresh vegetables and vinaigrette.",
      price: 5.99,
      Category: "Salad",
      image: "images/garden_salad.jpg",
      weight: "220 g",
    },
    {
      name: "Chicken Salad",
      short_description:
        "Grilled chicken breast with mixed greens and ranch dressing.",
      price: 9.49,
      Category: "Salad",
      image: "images/chicken_salad.jpg",
      weight: "300 g",
    },
    {
      name: "Pepperoni Pizza",
      short_description: "Classic pizza with pepperoni slices and mozzarella.",
      price: 12.99,
      Category: "Pizza",
      image: "images/pepperoni_pizza.jpg",
      weight: "400 g",
    },
    {
      name: "Margherita Pizza",
      short_description: "Fresh tomatoes, mozzarella, and basil.",
      price: 10.99,
      Category: "Pizza",
      image: "images/margherita_pizza.jpg",
      weight: "380 g",
    },
    {
      name: "BBQ Chicken Pizza",
      short_description: "Pizza topped with BBQ chicken and red onions.",
      price: 14.49,
      Category: "Pizza",
      image: "images/bbq_chicken_pizza.jpg",
      weight: "420 g",
    },
    {
      name: "Veggie Supreme Pizza",
      short_description:
        "Loaded with bell peppers, olives, onions, and mushrooms.",
      price: 13.99,
      Category: "Pizza",
      image: "images/veggie_supreme_pizza.jpg",
      weight: "400 g",
    },
    {
      name: "Meat Lovers Pizza",
      short_description: "Topped with sausage, pepperoni, ham, and bacon.",
      price: 15.49,
      Category: "Pizza",
      image: "images/meat_lovers_pizza.jpg",
      weight: "450 g",
    },
    {
      name: "Espresso",
      short_description: "Strong and rich single shot of espresso.",
      price: 2.99,
      Category: "Coffee",
      image: "images/espresso.jpg",
      weight: "50 g",
    },
    {
      name: "Cappuccino",
      short_description: "Espresso with steamed milk and a layer of foam.",
      price: 3.99,
      Category: "Coffee",
      image: "images/cappuccino.jpg",
      weight: "150 g",
    },
    {
      name: "Latte",
      short_description: "Creamy coffee with steamed milk.",
      price: 4.49,
      Category: "Coffee",
      image: "images/latte.jpg",
      weight: "200 g",
    },
    {
      name: "Mocha",
      short_description: "Espresso with chocolate and steamed milk.",
      price: 4.99,
      Category: "Coffee",
      image: "images/mocha.jpg",
      weight: "200 g",
    },
    {
      name: "Iced Coffee",
      short_description: "Refreshing chilled coffee served over ice.",
      price: 3.49,
      Category: "Coffee",
      image: "images/iced_coffee.jpg",
      weight: "250 g",
    },
    {
      name: "Classic Burger",
      short_description: "Juicy beef patty with lettuce, tomato, and pickles.",
      price: 9.99,
      Category: "Burger",
      image: "images/classic_burger.jpg",
      weight: "300 g",
    },
    {
      name: "Cheeseburger",
      short_description: "Beef patty topped with melted cheese.",
      price: 10.49,
      Category: "Burger",
      image: "images/cheeseburger.jpg",
      weight: "320 g",
    },
    {
      name: "Bacon Burger",
      short_description: "Crispy bacon and cheddar on a beef patty.",
      price: 11.99,
      Category: "Burger",
      image: "images/bacon_burger.jpg",
      weight: "340 g",
    },
    {
      name: "Veggie Burger",
      short_description: "Plant-based patty with avocado and greens.",
      price: 10.99,
      Category: "Burger",
      image: "images/veggie_burger.jpg",
      weight: "300 g",
    },
    {
      name: "Spicy Chicken Burger",
      short_description: "Fried chicken breast with spicy sauce.",
      price: 11.49,
      Category: "Burger",
      image: "images/spicy_chicken_burger.jpg",
      weight: "330 g",
    },
  ];

  const AddToCartHandler = (index) => {
    if (!addToCart.includes(index)) {
      SetaddToCart([...addToCart, index]);
    } else {
      const updatedCart = addToCart.filter((item) => item !== index);
      SetaddToCart(updatedCart);
    }
  }
  return (
    <div className="px-4 mt-20">
      <h3 className=" text-center text-red-500 text-sm">Our Menu</h3>
      <h1 className=" text-center font-bold text-[2vw]">
        Menu That Always Make You <br /> To Fall In Love
      </h1>
      <div>
        <div className="flex items-center justify-center gap-4 mt-5">
          <h1 className="px-5 py-1 shadow-lg text-sm rounded-lg">All</h1>
          {Category.map((item, i) => {
            return (
              <div key={i} className=" flex items-center justify-center hover:bg-[#EF4444] hover:text-white duration-300 cursor-pointer gap-3 px-5 py-1 border-2 text-sm  shadow-lg rounded-lg">
                <h4>{item.icon}</h4>
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap mt-10 justify-start items-center gap-5 px-28 ">
        {menuItems.map((item, i) => {
          return <BurgerCard data={item} index={i} AddToCartHandler={AddToCartHandler} SetaddToCart={SetaddToCart} addToCart={addToCart} />;
        })}
      </div>
      <div className="w-fit mx-auto">
        <h1 className=" text-red-500 text-sm px-3 py-2 border-2 shadow-md rounded-xl ">
          Show more
        </h1>
      </div>
    </div>
  );
}

export default FoodMenu;
