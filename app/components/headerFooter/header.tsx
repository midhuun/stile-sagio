'use client';
import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingBagLight, } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { LiaUser } from "react-icons/lia";
import Link from "next/link";
import Login from "../login/login";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLogin,setopenLogin] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-white top-0 w-full z-[200]">
    <header className=" border-b flex  shadow-sm px-3">
        <Login isOpen={openLogin} />
        <nav className="uppercase w-full">
            <div className="flex text-[12px] md:text-xs  items-center py-4">
                <ul className="hidden md:flex w-full justify-center items-center space-x-4">
                    <li>New Arrivals</li>
                    <li>Shop All</li>
                   <Link href='/'><h1 className="flex justify-center font-bold items-center"><div className="border-r"><Image className="h-[25px] w-[40px] object-cover" alt="stile sagio" height={50} width={50} src='/logo.png' /></div><p className="pl-2">STILE SAGIO <br /></p></h1></Link> 
                    <li>Track Order</li>
                   <Link href='/about-us'><li>About Us</li></Link>
                </ul>
            </div>
        </nav>
        <div className="flex items-center justify-end space-x-2">
            <button><CiSearch size={26} /></button>
            <button><CiHeart size={26} /> </button>
            <button><LiaUser onClick={()=>setopenLogin(!openLogin)} size={26} /></button>
            <button><PiShoppingBagLight size={26} /></button>
        </div>
         </header>
         </div>
  );
}
