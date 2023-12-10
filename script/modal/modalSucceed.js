export function initModalSucceed(){
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
    const modalSucceed = document.createElement("div");
    const previousDiv = document.querySelector(".hero-section");
    previousDiv.after(modalSucceed);
    modalSucceed.classList.add("bgroundSucceed")
    modalSucceed.innerHTML = contentModalSucceed;

    const spanClose = document.querySelector(".closeSucceed");
    const btnSucceed = document.querySelector(".btn-succeed");
    btnSucceed.addEventListener("click", () => {
        closeModalSucceed(modalSucceed)
        });
    spanClose.addEventListener("click", () => {
        closeModalSucceed(modalSucceed)
        });
};

function closeModalSucceed(modalSucceed){
    modalSucceed.remove();
}