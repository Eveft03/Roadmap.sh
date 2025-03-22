document.querySelectorAll(".btn-tab").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".btn-tab, .tab").forEach(element => {
            element.classList.remove("active");
        });
        button.classList.add("active");
        
        const index = Array.from(button.parentElement.children).indexOf(button);
        const tabs = document.querySelectorAll('.tab');
        tabs[index].classList.add("active");
    });
});