function succeed(){
     const newChildDiv = `
        <div class="bground">
            <div class="content">
            <span class="close"></span>
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
        </div>
        `;
    closeModal();
   
    parentDiv.innerHTML = newChildDiv;
    
    const inputSucceed = document.querySelector(".btn-succeed")
    inputSucceed.addEventListener("click", () => {
        closeModal();
        content.classList.remove("succeedContent");
        parentDiv.innerHTML = oldContent;
    })   

    spanClose.addEventListener("click", () => {
        closeModal();
        content.classList.remove("succeedContent");
        parentDiv.innerHTML = oldContent;
    }) 

}

