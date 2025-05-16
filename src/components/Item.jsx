


function Item({item,onDeleteItem,updateItem}){
    return(
        <div className="item">
            {/* -------------------------------------------------------------------- */}
            <input 
                className="checkbox" 
                type="checkbox" 
                checked={item.completed}
                onChange={()=>updateItem(item.id)}
            />
            {/* -------------------------------------------------------------------- */}
            <span 
                className="text"
                style={item.completed ? {textDecoration:'line-through'}:{}}
            >
                {item.quantity} - {item.title}
            </span>
            {/* -------------------------------------------------------------------- */}
            <button className="btn bg-danger" onClick={()=>{onDeleteItem(item.id)}}> X </button>
            {/* -------------------------------------------------------------------- */}

        </div>
       
    );
}

export default Item