import React from 'react'
import { PiHamburgerFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import BurgerCard from './BurgerCard';
import Container from './Container';


function FoodMenu() {
    const Category = [
        {
            name: "Burger",
            icon: <PiHamburgerFill />

        },
        {
            name: "Coffee",
            icon: <GiCoffeeCup />
        },
        {
            name: "Pizza",
            icon: <FaPizzaSlice />
        },
        {
            name: "Salad",
            icon: <LuSalad />
        },
        {
            name: "rice",
            icon: <GiBowlOfRice />
        },
        {
            name: "Hot Dog",
            icon: <FaHotdog />
        },
        {
            name: "Drinks",
            icon: <BiSolidDrink />
        }
    ]

    const menuItems = [
        {
            name: "Cheeseburger",
            price: 12.99,
            description: "A classic burger with cheese, lettuce, tomatoes, and onions.",
            image: "cheeseburger.jpg"
        }
    ]
    return (
        <Container classes='px-4 mt-20'>
            <h3 className=' text-center text-red-500 text-sm'>Our Menu</h3>
            <h1 className=' text-center font-bold text-[2vw]'>Menu That Always Make You <br /> To Fall In Love</h1>
            <div>
                <div className='flex items-center justify-center gap-4 mt-5'>
                    <h1 className='px-5 py-1 hover:bg-[#EF4444] hover:text-white duration-300 cursor-pointer gap-3  border-2 text-sm bg-gray-50 shadow-md rounded-lg'>All</h1>
                    {
                        Category.map((item, i) => {
                            return (
                                <div className=' flex items-center justify-center hover:bg-[#EF4444] hover:text-white duration-300 cursor-pointer gap-3 px-5 py-1 border-2 text-sm bg-gray-50 shadow-md rounded-lg'>
                                    <h4>{item.icon}</h4>
                                    <h1>{item.name}</h1>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 gap-5">
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
            </div>
            <div className='w-fit mx-auto mt-10'>
                <h1 className=' text-red-500 text-sm px-3 py-2 border-2 shadow-md rounded-xl '>Show more</h1>
            </div>
        </Container>
    )
}

export default FoodMenu
