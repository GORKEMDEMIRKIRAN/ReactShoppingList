



import Item from './Item.jsx'

function List({items,onDeleteItem,updateItem}){
    return(
        <div className="ListRegion">
            <div className="buttons">   
                <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                    {
                        items.length > 0 ?(
                            items.map((i,index) =>(
                                <Item item={i} key={index} onDeleteItem={onDeleteItem} updateItem={updateItem}/>
                            ))
                        ):(<p className='NoItems'>No Items</p>)
                    }
                </div>
            </div>

        </div>
    );
}


export default List