import './nav.css'
import { BsPlusSquareDotted } from 'react-icons/bs';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import {AiFillMessage} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Modal from '../modalconnexion/modalconnect';

function Nav2() {
  return <>
   <Modal/>
  <nav className="navbar navbar-dark bg-dark sticky-top">
    <div className='container'>
      <div className='col-10'>
    <Link className="navbar-brand" to="/" title= "home">Logo</Link>
    </div>
    <div  className='test de nav'>
<a class="text-light" href='' data-bs-toggle="modal" data-bs-target="#ModalForm" >
<img
                src="./assets/image/user/nouUser.png"
                class="rounded-circle me-2"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
   Connexion
</a>
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">bienvenue {"utilisateur"}</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Favoris <MdOutlineFavoriteBorder/> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Messages <AiFillMessage/> </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
  <div className="text-center">
  <Link className="btn btn-secondary btn-sm" to="/deposit" title= "deposit">Déposer une annonce <BsPlusSquareDotted/></Link>

    {/* <a href=""><button type="button" class="btn btn-secondary btn-sm">Déposer une annonce <BsPlusSquareDotted/></button></a> */}

    </div>
      </div>
    </div>
  </div>
  
</nav>
  </>;
}

export default Nav2;

