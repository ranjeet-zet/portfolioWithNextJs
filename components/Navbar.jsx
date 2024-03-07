'use clinte'
import './Navbar.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import React, { useState } from 'react';
const Navbar = () => {
    'use clinte'
    const [isExpanded, setIsExpand] = useState(false);
    const data = [
        { name: "Home", link: "#" },
        { name: "About ", link: "#about" },
        { name: "Tech Skills", link: "#techskill" },
        { name: "Project", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ]
    return (
        <div className='navbar'>
            <div>
                <p className='navebartitel'>RANJEET</p>
            </div>
            {
                    !isExpanded &&
                    <div onClick={()=>{
                        setIsExpand((el)=>!el)
                    }} className='closebutton'>
                        <MdOutlineMenuOpen size={50} />
                    </div>
                }
            <div className={`navbarsecounddiv ${isExpanded? 'navbarsecounddivresponsive':""}`}>
               
                  {
                    isExpanded &&
                    <div  onClick={()=>{
                        setIsExpand((el)=>!el)
                    }} className='closebuttonclose'>
                        <IoMdCloseCircleOutline  size={50} />
                    </div>
                }
                {data.map((ele, i) => {
                    return <a key={i} href={ele.link}>{ele.name}</a>
                })}
            </div>
        </div>

    )
}
export default Navbar