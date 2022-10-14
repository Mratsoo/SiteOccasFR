import "./modalconnect.css";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <>
      {/* <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#ModalForm"
      >
        Launch Modal Form
      </button> */}

      <div
        class="modal fade"
        id="ModalForm"
        tabindex="-1"
        aria-labelledby="ModalFormLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="btnclose btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="myform bg-dark">
                <h1 class="text-center h1modal">Connexion</h1>
                <form>
                  <div class="mb-3 mt-4">
                    <label for="exampleInputEmail1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control form2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      class="form-control form2"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" class="btn btn-light mt-3">
                    Connexion
                  </button>
                  <p data-bs-dismiss="modal">
                    Nouvel utilisateur?  <Link to='/login' title='login'>S'inscrire</Link>
                    
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
