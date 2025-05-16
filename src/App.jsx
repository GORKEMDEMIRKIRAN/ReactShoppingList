

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import Summary from './components/Summary.jsx'
import {dataArray} from './data/data.js'

function App() {

  const [items,setItems]=useState(dataArray);
  function handleAddItem(item){
      setItems((items)=>[...items,item]);
  }
  function handleDeleteItem(id){
    // filter ile koşula uymayan değer hariç kalanları array olarak döndürür.
    setItems(items=> items.filter(item=>item.id !== id));
  }
  function handleUpdateItem(id){
    setItems(items=> items.map(item=>item.id==id ? {...item,completed:!item.completed}:item ))
  }
  function handleClearList(){
    const accept=window.confirm('Are you sure you want to clear the whole list ? ');
    if(accept){
      setItems([]);
    }
    
  }

  return (
    <>
      <Header/>
      <div className="card shopCart">
        <Form onAddItem={handleAddItem} onBasketClear={handleClearList}/>
        <List items={items} onDeleteItem={handleDeleteItem} updateItem={handleUpdateItem}/>
        <Summary items={items}/>
      </div>
    </>
  )
}

export default App
