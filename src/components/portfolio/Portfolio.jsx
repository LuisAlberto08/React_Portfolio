import {useEffect, useState} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import {webPortfolio,digitalDesign} from "../../data.js"



export default function Portfolio() {
    const [selected, setSelected] = useState("web development");
    const [data, setData] = useState([]);
    
    const list = [
        
        {
            id:"web",
            title:"Web Development"
        },        
        {
            id:"design",
            title:"Digital Design"
        },
    ]
    useEffect(()=>{
        switch(selected){
            case "web development": setData(webPortfolio);
            break;
            case "digital design": setData(digitalDesign);
            break;
            default:setData(webPortfolio);
        }
    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                   {list.map(item=>(
                       <PortfolioList title={item.title} 
                       active={selected === item.id} 
                       setSelected={setSelected} 
                       id={item.id}/> 
                   ))} 
                </ul>
                <div className="container">
                 {data.map( (d)=>{
                    <div className="item">
                        <img src= {d.image} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                    
                })
            }
                </div>
        </div>
    )
}
