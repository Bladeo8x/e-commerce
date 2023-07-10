import { Link } from 'react-router-dom';
import '../Item/Item.css';
import ItemCount from '../ItemCount/ItemCount';

const CartItem = ({ id, title, price, quantity }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
  
    const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity);
    }

    return (
      <div className="item">
        <img src={img} alt={name} className="img-thumbnail square-image" />
        <h3 className='square-image text-truncate'>{name}</h3>
        <p className='square-image'>Price: ${price}</p>
        <p className='square-image'>Category: {category}</p>
        <p className='square-image'>Stock: {stock}</p>
        <p className='square-image center text-truncate'>{description}</p> 
        <div>
        <Link to={`/item/${id}`} className="btn btn-light square-image">
        See Details
        </Link>
        </div>
        <footer className='mt-4'>
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
        <div>
        <button onClick={() => handleOnAdd(quantity)}>Add</button>
    </div>
        </footer>
      </div>
    );
  };

export default CartItem;