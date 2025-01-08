import React, { useEffect, useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import BurgerCard from "./BurgerCard";

function FoodMenu() {
  const [addToCart, SetaddToCart] = useState([]);
  const [product, Setproduct] = useState([]);
  const [selectCategory, SetselectCategory] = useState("All");

  const menuitem = [
    {
      name: "Iced Tea",
      short_description: "Chilled black tea with a slice of lemon.",
      price: 2.99,
      Category: "Drinks",
      image: "src/assets/Img/Iced-Tea.webp",
      weight: "340 g",
    },
    {
      name: "Coca-Cola",
      short_description: "Classic fizzy cola in a chilled bottle.",
      price: 1.99,
      Category: "Drinks",
      image: "src/assets/Img/Coca-Cola.webp",
      weight: "340 g",
    },
    {
      name: "Orange Juice",
      short_description: "Freshly squeezed orange juice.",
      price: 4.5,
      Category: "Drinks",
      image: "src/assets/Img/Juice.webp",
      weight: "340 g",
    },
    {
      name: "Mango Smoothie",
      short_description: "Creamy mango smoothie with a tropical twist.",
      price: 5.49,
      Category: "Drinks",
      image: "src/assets/Img/mengo.webp",
      weight: "400 g",
    },
    {
      name: "Strawberry Milkshake",
      short_description:
        "Sweet strawberry milkshake topped with whipped cream.",
      price: 4.99,
      Category: "Drinks",
      image: "src/assets/Img/Strawberry Milkshake.webp",
      weight: "400 g",
    },
    {
      name: "Hot Chocolate",
      short_description: "Rich hot chocolate topped with marshmallows.",
      price: 3.25,
      Category: "Drinks",
      image: "src/assets/Img/Hot Chocolate.avif",
      weight: "250 g",
    },
    {
      name: "Classic Hot Dog",
      short_description:
        "Grilled sausage in a toasted bun with ketchup and mustard.",
      price: 4.99,
      Category: "HotDog",
      image: "src/assets/Img/Classic Hot Dog.avif",
      weight: "180 g",
    },
    {
      name: "Chili Cheese Dog",
      short_description: "Hot dog topped with chili and melted cheddar cheese.",
      price: 5.99,
      Category: "Hot_Dog",
      image: "src/assets/Img/Chili Cheese Dog.avif",
      weight: "220 g",
    },
    {
      name: "Vegan Hot Dog",
      short_description: "Plant-based sausage in a whole-grain bun.",
      price: 5.29,
      Category: "HotDog",
      image: "src/assets/Img/Vegan Hot Dog.jpg",
      weight: "190 g",
    },
    {
      name: "Fried Rice",
      short_description: "Classic fried rice with veggies and egg.",
      price: 8.99,
      Category: "Rice",
      image: "src/assets/Img/Fried Rice.jpg",
      weight: "300 g",
    },
    {
      name: "Vegetable Pilaf",
      short_description: "Aromatic rice cooked with mixed vegetables.",
      price: 9.49,
      Category: "Rice",
      image: "src/assets/Img/Vegetable Pilaf.avif",
      weight: "350 g",
    },
    {
      name: "Seafood Paella",
      short_description: "Spanish rice dish with shrimp and mussels.",
      price: 15.99,
      Category: "Rice",
      image: "src/assets/Img/Seafood Paella.jpg",
      weight: "450 g",
    },
    {
      name: "Risotto",
      short_description: "Creamy Italian rice with mushrooms.",
      price: 14.49,
      Category: "Rice",
      image: "src/assets/Img/Risotto.jpg",
      weight: "300 g",
    },
    {
      name: "Caesar Salad",
      short_description:
        "Classic Caesar salad with crispy croutons and parmesan.",
      price: 7.99,
      Category: "Salad",
      image: "src/assets/Img/Caesar Salad.avif",
      weight: "250 g",
    },
    {
      name: "Greek Salad",
      short_description: "Fresh salad with feta cheese, olives, and cucumbers.",
      price: 6.99,
      Category: "Salad",
      image: "src/assets/Img/Greek Salad.jpg",
      weight: "230 g",
    },
    {
      name: "Caprese Salad",
      short_description:
        "Tomatoes, mozzarella, and basil with olive oil drizzle.",
      price: 8.49,
      Category: "Salad",
      image: "src/assets/Img/Caprese Salad.jpg",
      weight: "200 g",
    },
    {
      name: "Garden Salad",
      short_description: "Mixed greens with fresh vegetables and vinaigrette.",
      price: 5.99,
      Category: "Salad",
      image: "src/assets/Img/Garden Salad.jpg",
      weight: "220 g",
    },
    {
      name: "Pepperoni Pizza",
      short_description: "Classic pizza with pepperoni slices and mozzarella.",
      price: 12.99,
      Category: "Pizza",
      image: "src/assets/Img/Pepperoni Pizza.avif",
      weight: "400 g",
    },
    {
      name: "Margherita Pizza",
      short_description: "Fresh tomatoes, mozzarella, and basil.",
      price: 10.99,
      Category: "Pizza",
      image: "src/assets/Img/Margherita Pizza.avif",
      weight: "380 g",
    },
    {
      name: "BBQ Chicken Pizza",
      short_description: "Pizza topped with BBQ chicken and red onions.",
      price: 14.49,
      Category: "Pizza",
      image: "src/assets/Img/BBQ Chicken Pizza.jpg",
      weight: "420 g",
    },
    {
      name: "Veggie Pizza",
      short_description:
        "Loaded with bell peppers, olives, onions, and mushrooms.",
      price: 13.99,
      Category: "Pizza",
      image: "src/assets/Img/Veggie Pizza.jpg",
      weight: "400 g",
    },
    {
      name: "Meat Lovers Pizza",
      short_description: "Topped with sausage, pepperoni, ham, and bacon.",
      price: 15.49,
      Category: "Pizza",
      image: "src/assets/Img/Meat Lovers Pizza.jpg",
      weight: "450 g",
    },
    {
      name: "Espresso",
      short_description: "Strong and rich single shot of espresso.",
      price: 2.99,
      Category: "Coffee",
      image: "src/assets/Img/Espresso.jpg",
      weight: "50 g",
    },
    {
      name: "Cappuccino",
      short_description: "Espresso with steamed milk and a layer of foam.",
      price: 3.99,
      Category: "Coffee",
      image: "src/assets/Img/Cappuccino.jpg",
      weight: "150 g",
    },
    {
      name: "Latte",
      short_description: "Creamy coffee with steamed milk.",
      price: 4.49,
      Category: "Coffee",
      image: "src/assets/Img/Latte.avif",
      weight: "200 g",
    },
    {
      name: "Mocha",
      short_description: "Espresso with chocolate and steamed milk.",
      price: 4.99,
      Category: "Coffee",
      image: "src/assets/Img/Mocha.jpg",
      weight: "200 g",
    },
    {
      name: "Iced Coffee",
      short_description: "Refreshing chilled coffee served over ice.",
      price: 3.49,
      Category: "Coffee",
      image: "src/assets/Img/Iced Coffee.avif",
      weight: "250 g",
    },
    {
      name: "Classic Burger",
      short_description: "Juicy beef patty with lettuce, tomato, and pickles.",
      price: 9.99,
      Category: "Burger",
      image: "src/assets/Img/Classic Burger.avif",
      weight: "300 g",
    },
    {
      name: "Cheeseburger",
      short_description: "Beef patty topped with melted cheese.",
      price: 10.49,
      Category: "Burger",
      image: "src/assets/Img/Cheeseburger.jpg",
      weight: "320 g",
    },
    {
      name: "Bacon Burger",
      short_description: "Crispy bacon and cheddar on a beef patty.",
      price: 11.99,
      Category: "Burger",
      image: "src/assets/Img/Bacon Burger.avif",
      weight: "340 g",
    },
    {
      name: "Veggie Burger",
      short_description: "Plant-based patty with avocado and greens.",
      price: 10.99,
      Category: "Burger",
      image: "src/assets/Img/Veggie Burger.jpg",
      weight: "300 g",
    },
    {
      name: "Spicy Chicken Burger",
      short_description: "Fried chicken breast with spicy sauce.",
      price: 11.49,
      Category: "Burger",
      image: "src/assets/Img/Spicy Chicken Burger.jpg",
      weight: "330 g",
    },
  ]
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
      name: "Rice",
      icon: <GiBowlOfRice />,
    },
    {
      name: "HotDog",
      icon: <FaHotdog />,
    },
    {
      name: "Drinks",
      icon: <BiSolidDrink />,
    },
  ];

  useEffect(() => {
    if (selectCategory === "All") {
      Setproduct([...menuitem]);
    } else {
      const filteredItems = menuitem.filter((item) => item.Category === selectCategory);
      Setproduct(filteredItems);
    }
  }, [selectCategory])


  const AddToCartHandler = (index) => {
    if (!addToCart.includes(index)) {
      SetaddToCart([...addToCart, index]);
    } else {
      const updatedCart = addToCart.filter((item) => item !== index);
      SetaddToCart(updatedCart);
    }
  };




  return (
    <div className="px-4 mt-20">
      <h3 className=" text-center text-red-500 text-sm">Our Menu</h3>
      <h1 className=" text-center font-bold text-[2vw]  " >
        Menu That Always Make You <br /> To Fall In Love
      </h1>
      <div>
        <div className="flex items-center justify-center gap-4 mt-5">
          <h1
            className="px-5 py-1  hover:bg-[#EF4444] hover:text-white duration-300 cursor-pointer gap-3 border-2 text-sm rounded-lg shadow-xl"
            onClick={() => SetselectCategory("All")}
          >
            All
          </h1>
          {
            Category.map((item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => SetselectCategory(item.name)}
                  className=" flex items-center justify-center hover:bg-[#EF4444]  hover:text-white duration-300 cursor-pointer gap-3 px-5 py-1 border-2 text-sm rounded-lg shadow-xl"
                >
                  <h4>{item.icon}</h4>
                  <h1>{item.name}</h1>
                </div>
              );
            })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full justify-center flex-wrap mt-10  gap-10 px-28 ">
          {product.map((item, i) => {
            return (
              <BurgerCard
                data={item}
                index={i}
                AddToCartHandler={AddToCartHandler}
                SetaddToCart={SetaddToCart}
                addToCart={addToCart}
              />
            );
          })}
        </div>
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
