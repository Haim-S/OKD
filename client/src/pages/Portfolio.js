import React, {useState} from 'react';
import {Link} from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Heading  from "../components/common/titles/Heading"
import Subtitle  from "../components/common/titles/Subtitle"
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
                {category.map((category, index)=> (
                    <button key={index} className='primaryBtn' onClick={()=> filterItems(category)} data-aos='zoom-out-down'>
                        {category}
                    </button>
                ))}
            </div>
            <div className='content grid3'>
              
                {list.map((item, index)=>(
                    <div key={index} className='box' data-aos='fade-up'>
                        <div className='img'>
                            <img style={{width: "100%", height: "100%"}} src={item.cover} alt=''/>
                        </div>
                        <div className='overlay'>
                            <Link to={`/Project/${item.category_url}`} style={{
                            width: "100%",
                            height: "100%",
                            color: "black",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            flexDirection: "column"}}>
                            <Subtitle title={item.title}/>
                            {/* <p>{item.name}</p> */}
                            {/* <VisibilityOutlinedIcon/> */}
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