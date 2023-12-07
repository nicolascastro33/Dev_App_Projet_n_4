function succeed(){
     const newChildDiv = `
        <div class="bgroundSucceed">
            <div class="content succeedContent">
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
        </div>
        `;
    // const heroSection = document.querySelector(".hero-section");
    // heroSection.after(newChildDiv);
    
    function closeSucceedModal(newChildDiv){
        newChildDiv.remove();
    }
    const spanClose = document.querySelector(".closeSucceed");
    const inputSucceed = document.querySelector(".btn-succeed");
    inputSucceed.addEventListener("click", () => {
        closeSucceedModal();
    })   

    spanClose.addEventListener("click", () => {
        closeSucceedModal();
    }) 

}


