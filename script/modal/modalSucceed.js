export function initModalSucceed() {
  // Création de notre nouvelle modal qui sera afficher à la place de la modal form
  const contentModalSucceed = `
        <div class="content contentSucceed">
            <span class="close closeSucceed"></span>
            <div class="modal-body">
                <div class="modalSucceed">
                    <h1>Merci pour votre inscription</h1>
                        <input
                            class="btn-submit btn-succeed"
                            type="submit"
                            class="button"
                            value="Fermer"
                        />
                </div>
            </div>
        `;
  const modalSucceed = document.createElement('div');
  const previousDiv = document.querySelector('.hero-section');
  previousDiv.after(modalSucceed);
  modalSucceed.classList.add('bgroundSucceed');
  modalSucceed.innerHTML = contentModalSucceed;



  // Gestion de la fermeture du modal par le bouton "fermer" ou la croix
  // en y inserant une fonction de fermeture de modal
  const spanClose = document.querySelector('.closeSucceed');
  const btnSucceed = document.querySelector('.btn-succeed');

  btnSucceed.addEventListener('click', () => {
    closeModalSucceed(modalSucceed);
  });
  spanClose.addEventListener('click', () => {
    closeModalSucceed(modalSucceed);
  });
}

// Destruction de modal de confirmation 
function closeModalSucceed(modalSucceed) {
  modalSucceed.remove();
}
