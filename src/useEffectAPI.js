import React, {useState,useEffect} from 'react'
import axios from 'axios'

const UseEffectAPI = () => {

    const url="https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco";
    const [users, setdata] = useState(null);
  
    useEffect(() => {
      axios.get(url).then((res) => {
        setdata(res.data);
      });
    }, []);

  return (
    <div>
    {users&&<div>
        <div className="contact">
         <h1>{users.name}</h1>
        </div>

        <div className="country">
        <p>{users.loclevel3Name}, 
        {users.loclevel2Name}, 
        {users.loclevel1Name}<br></br> speaks english</p>

        {/* {users.products[0].cmdtyStdName} */}
        {console.log(users.products)}
        </div>
            
        
            <div className="details">
        {
            users.products.map(cur=>{
                return(<div className="type">
                    {cur.cmdtyStdName }
                        {
                            cur.posts.map(curr=>{
                                return(<div className="market">
                                    {/* {curr.marketType} */}
                                    {curr.marketStdName}
                                    <br/>
                                    {curr.loclevel3Name}
                                    <br/>
                                    {curr.computed.highestAvgPriceVarietyGrade.minPrice}
                                    -
                                    {curr.computed.highestAvgPriceVarietyGrade.maxPrice}
                                    
                                </div>)
                            })
                        }
                    
                </div>
                )
            })
        }
        </div>
        </div>
    }
    </div>
  )
}

export default UseEffectAPI