import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./menuCard";



export default function RestaurantMenu(){
   
    let {id} = useParams();
    console.log(id);

    const [RestData, setRestData] = useState([]);
     const [selected,setselected]=useState(null);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
           const filterData=tempData.filter((items)=>'title' in items.card.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])

       console.log(RestData);

    return (
      <div>
      <div>
           <div className="ml-100 mt-20 ">
        <button className={`${selected==='veg'? "bg-green-600" : "bg-white-600"}`} onClick={()=>setselected(selected==='veg'?null:'veg')}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mr-4">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              ry="2"
              stroke="green"
              
            />
            <circle cx="12" cy="12" r="4" fill="green" />
          </svg>
        </button>
        <button className={`${selected==='nonveg'? "bg-red-600" : "bg-white-600"}`} onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              ry="2"
              stroke="red"
              
            />
            <polygon points="12,7 17,17 7,17" fill="red" />
          </svg>
        </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
    {RestData.map((menuItems) => (
      <MenuCard
        key={menuItems?.card?.card?.title}
        menuItems={menuItems.card?.card} foodSelected={selected}
      />
    ))}
  </div>
  </div>
);

}
