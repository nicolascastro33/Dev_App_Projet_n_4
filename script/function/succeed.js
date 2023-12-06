function succeed(){
    const content = document.querySelector(".content");
    const spanClose = document.querySelector(".close")
    content.classList.add("succeedContent");
    
    
    form.remove(); 
    

    const newChildDiv = `
        <div class="modalSucceed">
            <h1>Merci pour votre inscription</h1>
            <input
                class="btn-submit btn-succeed"
                type="submit"
                class="button"
                value="Fermer"
              />
        </div>

    `;
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

