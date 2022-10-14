import './nav.css'
import { BsPlusSquareDotted } from 'react-icons/bs';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import {AiFillMessage} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';



function Nav() {
  return <>
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <div>
    <a class="navbar-brand" href="#">LogoDuSite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="nav-link text-center">
    <a href=""><button type="button" class="btn btn-secondary btn-sm">Déposer une annonce <BsPlusSquareDotted/></button></a>
    </div>
    {/* <form id='searchbar' class="d-flex mt-3" role="search">
    <select class="form-select" aria-label="Default select example">
  <option selected>Open</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        <input  class="form-control me-2 test" type="search" placeholder="Rechercher un produit, une marque, une référence..." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Chercher</button>
      </form> */}
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="nav nav-tabs" id='liste'>
  <li class="nav-item " >
  <div className="nav-link text-center">
    <div>< MdOutlineFavoriteBorder/></div>
    <a className='' href="#">Favoris</a>
    </div>
  </li>
  <li class="nav-item">
  <div className="nav-link text-center">
    <div>< AiFillMessage/></div>
    <a className='' href="#">Messages</a>
    </div>
  </li>
  <li class="nav-item">
    <div className="nav-link text-center">
    <div>< BiUser/></div>
    <a className='' href="#">Connexion | S'inscrire</a>
    </div>
  </li>
  {/* <li class="nav-item">
  <div className="nav-link text-center">
    <a href=""><button type="button" class="btn btn-secondary btn-sm">Déposer une annonce <BsPlusSquareDotted/></button></a>
    </div>
  </li> */}
</ul>
    </div>
  </div>
</nav>
  </>;
}

export default Nav;

//  {/* <form class="d-flex" role="search">
//         <input  class="form-control me-2 test" type="search" placeholder="Rechercher un produit, une marque, une référence" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Cherche</button>
//       </form> */}
//       <nav class="navbar bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">
//       <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
//       LogoDuSite
//       {/* <button type="button" class="ms-3 btn btn-secondary">Déposer une annonce <BsPlusSquareDotted/></button> */}
//        <form id='searchbar' class="d-flex mt-3" role="search">
//         <input  class="form-control me-2 test" type="search" placeholder="Rechercher un produit, une marque, une référence..." aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Chercher</button>
//       </form>
//     </a>
//     <div className='d-flex'>
//     {/* <button type="button" class="btn btn-secondary">Déposer une annonce <BsPlusSquareDotted/></button> */}
//     <div>
//     <a href="">Favoris <MdOutlineFavoriteBorder/></a>
//     <a href="">Messages</a>
//     <a href="">Connexion</a>

    
//     </div>
    
//     </div>
//   </div>
// </nav>