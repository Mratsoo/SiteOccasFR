import "./search.css";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <>
      <div className="container-fluid">
        <div className="container py-5">
          <form id="" className="p-4 bg-dark row rounded shadow-sm" role="search">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-1">
              <input
                className="form-control me-2 test"
                type="search"
                placeholder="Rechercher un produit, une marque, une référence..."
                aria-label="Search"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-1">
              <button
                type="submit"
                className="btn btn-secondary btn-block text-uppercase"
              >
                <FaSearch />
                <span className="d-inline-block d-md-none d-lg-inline-block">
                  &nbsp;Rechercher
                </span>
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-1">
              <select className="form-select">
                <option  selected disabled>
                  Catégorie
                </option>
                <optgroup label="Composants">
                  <option value="1">Processeur</option>
                  <option value="2">Carte mère</option>
                  <option value="3">Mémoire vive</option>
                  <option value="4">Carte graphique</option>
                  <option value="5">Ventirad</option>
                  <option value="6">Watercooling</option>
                  <option value="7">SSD M.2</option>
                  <option value="8">SSD 2.5</option>
                  <option value="9">Disque Dur</option>
                  <option value="10">Boitier PC</option>
                  <option value="11">Alimentation</option>
                  <option value="12">Ventilateur</option>
                </optgroup>
                <optgroup label="Périphériques">
                  <option value="13">Ecran</option>
                  <option value="14">Clavier</option>
                  <option value="15">Souris</option>
                  <option value="16">Tapis de souris</option>
                  <option value="17">Casque</option>
                  <option value="18">Siège gamer</option>
                  <option value="19">Réseau</option>
                  <option value="20">Kit</option>
                  <option value="21">Enceinte</option>
                  <option value="22">Microphone</option>
                  <option value="23">Manette</option>
                  <option value="24">Divers</option>
                </optgroup>
                <optgroup label="Ordinateurs">
                  <option value="25">PC Gamer</option>
                  <option value="26">PC Portable</option>
                  <option value="27">PC Portable Gamer</option>
                  <option value="28">PC Bureautique</option>
                </optgroup>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-1">
              {" "}
              <select className="form-select" aria-label="Default select example">
                <option selected>Endroit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-1 text-center">
              {" "}
           
              <input type="range" className="form-range align-items-end" min="0" max="5" step="0.5" id="customRange3" />
              <label className="text-secondary" htmlFor="">Prix (min, max)</label>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
