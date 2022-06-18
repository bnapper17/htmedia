import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {


    return(
        <nav className="header" >
            <h1 className="name"><Link to='/' className='link'>Heavenly Treasures <span className="ministries">Ministries</span></Link></h1>
            <h1 className="name_small"><Link to='/' className='link'>H.T.M.</Link></h1>
            <ul className="link_list">
                <li><Link to='/Radio' className='link'>Radio Broadcasts</Link></li>
                <li><Link to='/Service' className='link'>Church Services</Link></li>
                <li><a href="https://htsl.netlify.app" className='link'>Home Page</a></li>
                {/* <li>News Letters</li> */}
            </ul>
            <ul className="link_list_small">
                <li><Link to='/Radio' className='link'>Radio</Link></li>
                <li><Link to='/Service' className='link'>Services</Link></li>
                <li><a href="https://htsl.netlify.app" className='link'>Home Page</a></li>
                {/* <li>Letters</li> */}
            </ul>
        </nav>
    )
}

export {Nav};