
import { FaRegSmile } from "react-icons/fa";



function Summary({items}){

    const itemCount=items.length;
    const completedItemsCount=items.filter(item=>item.completed).length; // true olanlarının sayısı
    return(
        <footer className="summary"> 
        {
            itemCount===0 ? (
                <p style={{color:'green',textAlign:'center',fontSize:'22px',fontWeight:500}}>Alışveriş listenizi hazırlamaya başlayabilirsiniz.</p>
            ):(
                itemCount===completedItemsCount ?(
                    <p style={{color:'green',textAlign:'center',fontSize:'22px',fontWeight:500}}>Shopping Completed <FaRegSmile/></p>
                ):(
                    <p style={{color:'green',textAlign:'center',fontSize:'16px',fontWeight:500}}>Alışveriş sepetinizde {itemCount} üründen {completedItemsCount} tanesini aldınız.</p>
                )
            )
        }
        </footer>
    );
}

export default Summary