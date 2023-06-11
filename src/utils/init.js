export const init = () => {
    // turn off default form submitting
    const searchForm = document.querySelector('#searchForm');
    searchForm && searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
    });

    const profileEditForm = document.querySelector('#profileEditForm');
    profileEditForm && profileEditForm.addEventListener('submit', (e) => {
        e.preventDefault()
    });


//backButtonFunction
    const backButton = document.querySelector('#backButton');
    backButton && backButton.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
    })
}
