import React ,{ useState } from 'react'
import "./Gigs.scss"
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard"

export const Gigs= () => {
  // right menu
  const [Sort, setSort] = React.useState("sales") ;
  const [open, setOpen] = React.useState(false) ;

  const reSort =(type)=>{
    setSort(type) 
    setOpen(false)
  }



  return (
    <div className='gigs'>
      <div className="container">
          <span className='breadcrumbs'>
            Freelance {'>'} Graphics & Design
          </span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Freelance's AI artists 
          </p>
          <div className="menu">
            <div className="left">
               <input type="text" placeholder="min"/>
               <input type="text" placeholder="max"/>  
               <button>Applly</button>
            </div>
            <div className="right">
               <span className='sortBy'>Sort By</span>
               <span className='sortType'>{Sort === "sales" ? "Best Selling" : "Newest"}</span>
                <img src="src/public/img/down.png" alt="" onClick={()=>setOpen(!open)}/>
                {open &&(<div className="rightMenu">
                  {Sort === "sales" ? 
                  <span onClick={()=>reSort("createdAt")}>Newest</span>
                  :
                  <span onClick={()=>reSort("sales")}>Best Selling</span>}
                 </div>
                )}
            </div>
          </div>
          <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs