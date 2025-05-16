
import { FaPlus ,FaShoppingBasket  } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';


function Form({onAddItem,onBasketClear}){
    const [title,setTitle]=useState("");
    const [quantity,setQuantity]=useState(0);

    function handleFormSubmit(e){
        //------------------------------
        e.preventDefault();
        //------------------------------
        if(title==''&& quantity==0){
            window.confirm("Please enter the title and the product");
            setTitle('');
            setQuantity(0);
        }
        if(quantity==0 && title.length >0){
            window.confirm("Please enter quantity of product");
            setTitle('');
            setQuantity(0);
        }
        if(title=='' && quantity>0){
            window.confirm("Please enter the product");
            setTitle('');
            setQuantity(0);
        }else{
            //------------------------------
            // Form girilen bilgiler
            const item={id:Date.now(),title,quantity,completed:false};
            onAddItem(item);
            //------------------------------
            console.log(item);
            //------------------------------
            // ürün bilgileri alma sonucu (title,quantity) sıfırlama
            setTitle('');
            setQuantity(0);
            //------------------------------
        }

    }
    return(
        <form className='form' onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-6">
                    <input className='form-control'
                            type="text" 
                            placeholder="Enter the product name"
                            value={title}                             // useState içinde verilen değer
                            onChange={(e)=>setTitle(e.target.value)}  // text yazma sonucu çalışacak işlem
                    />
                </div>
                <div className="col-3">
                    <select className='form-select'
                            value={quantity}
                            onChange={(e)=>setQuantity(Number(e.target.value))}
                    >
                        {
                            Array.from({length:10},(v,i)=>i+1).map(number=> <option key={number} value={number}>{number}</option>)
                        }
                    </select>
                    </div>
                <div className="col-3">
                    <button className='btn btn-primary' type="submit"><FaPlus />Add</button>
                    <button className='btn btn-warning' type="button" onClick={onBasketClear}><FaShoppingBasket/>Clear</button>
                </div>
            </div>
        </form>
    )
}

export default Form