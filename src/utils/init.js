export const init = () => {
    // turn off default form submitting
    const searchForm = document.querySelector('#searchForm');
    searchForm && searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })

//backButtonFunction
    const backButton = document.querySelector('#backButton');
    backButton && backButton.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
    })
}
