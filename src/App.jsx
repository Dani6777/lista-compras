
import './App.css'
import { ShopList } from "./components/ShopList";
import { ShopAdd } from "./components/ShopAdd";
import { useShop } from './hooks/useShop'

function App(){

  const{ 
    shops,
    shopsCount,
    pendingShopsCount,
    handleNewShop,
    handleCompleteShop,
    handleDeleteShop,
    handleUpdateShop
  } = useShop()
  return(
    <>
    <div className="card-list">
      <h1>Lista de Compras</h1>
      <div className="counter-shops">
        <h3>N° de Compras:<span>{shopsCount}</span></h3>
        <h3>Pendientes:<span>{pendingShopsCount}</span></h3>
      </div>
      <div className="add-shop">
        <h3>Agregar Compra</h3>
        <ShopAdd 
        handleNewShop={handleNewShop}
        />
      </div>

      <ShopList
      shops={ shops}
      handleUpdateShop={ handleUpdateShop}
      handleDeleteShop={ handleDeleteShop}
      handleCompleteShop={ handleCompleteShop}
      />
    </div>
    </>
  );
}

export default App;