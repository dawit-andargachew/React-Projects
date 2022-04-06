import './nav.css';
import {Link} from 'react-router-dom'

function Nav(){
return <header> 
    <div className='header-div'>
        <h2 className='header-h2'>Logo</h2>
        <ul className='header-ul'>
<Link className='none' to="/"> <li>Home</li></Link>
<Link className='none' to="/about"><li>About</li></Link>
<Link className='none' to="/products"><li>Products</li></Link>

           
            
            
        </ul>
    </div>

</header>
}


export default Nav;
