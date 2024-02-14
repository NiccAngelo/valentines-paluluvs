const envelope = document.querySelector('.envelope-wrapper');
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });
onload = () =>{
    document.body.classList.remove("container");
};