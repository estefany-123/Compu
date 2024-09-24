import React, {useState} from "react";
import { IoHomeOutline} from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";


const Navbar = () => {

    const[Open, setOpen] = useState(false);

    const toggleMenu = () =>{
        setOpen(!Open);
    };


    return (
        

    );
};

export default Navbar