document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-dark-mode");
    const body = document.body;

    // Ελέγχουμε αν υπάρχει αποθηκευμένη προτίμηση για dark mode
    const darkModeEnabled = localStorage.getItem("dark-mode") === "true";

    if (darkModeEnabled) {
        body.classList.add("dark-mode");
        toggleButton.textContent = '❂'; // Αν είναι dark mode, δείχνει ήλιο
    } else {
        toggleButton.textContent = 'ִֶָ☾'; // Αν δεν είναι, δείχνει φεγγάρι
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Ενημερώνουμε το τοπικό αποθηκευτικό
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);

        // Αλλαγή κειμένου στο κουμπί
        if (isDarkMode) {
            toggleButton.textContent = '❂'; // Ήλιος
        } else {
            toggleButton.textContent = 'ִֶָ☾'; // Φεγγάρι
        }
    });
});



