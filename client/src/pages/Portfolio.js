import React, {useState} from 'react';
import {Link} from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Heading  from "../components/common/Heading"
import { portfolio } from "../constants/data";

const allCategory = ["all", ...new Set(portfolio.map((item)=> item.category))]

const Portfolio = () => {

    const [list, setLists] = useState(portfolio);
    const [category, setcategory] = useState(allCategory);

    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setLists(newItems)
        if(category === "all"){
            setLists(portfolio)
            return
        }
    }

  return (
    <>
    <article>
        <div className='container'>
            <Heading title="Subjects"/>
            <div className='catButton'>
                {category.map((category)=> (
                    <button className='primaryBtn' onClick={()=> filterItems(category)} data-aos='zoom-out-down'>
                        {category}
                    </button>
                ))}
            </div>
            <div className='content grid3'>
              
                {list.map((item)=>(
                    <div className='box' data-aos='fade-up'>
                        <div className='img'>
                            <img style={{width: "300px", height: "310px"}} src={item.cover} alt=''/>
                           
                        </div>
                        <div className='overlay'>
                            <Link>{item.title}</Link>
                            <Link>{item.name}</Link>
                        <Link to={`/Project/${item.category_url}`}>
                            <VisibilityOutlinedIcon/>
                        </Link>
                            
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </article>
    </>
  )
}

export default Portfolio