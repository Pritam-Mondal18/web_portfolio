// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//  hide style - switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        (document.querySelector(".style-switcher").classList.remove("open"))
    }
})
/*===================== theme colors =========================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
} 
// /*===================== theme light and dark mode =========================*/
        // Function to enable dark mode
        function enableDarkMode() {
            document.body.classList.add("dark");
        }

        // Function to disable dark mode
        function disableDarkMode() {
            document.body.classList.remove("dark");
        }

        // Toggle dark mode when the day-night icon is clicked
        const dayNight = document.querySelector(".day-night");
        dayNight.addEventListener("click", () => {
            dayNight.querySelector("i").classList.toggle("fa-sun");
            dayNight.querySelector("i").classList.toggle("fa-moon");
            document.body.classList.toggle("dark");

            // Save the user's preference in local storage
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });

        // Check user's dark mode preference on page load
        window.addEventListener("load", () => {
            const darkModePreference = localStorage.getItem("darkMode");
            if (darkModePreference === "enabled") {
                enableDarkMode();
                dayNight.querySelector("i").classList.add("fa-sun");
            } else {
                disableDarkMode();
                dayNight.querySelector("i").classList.add("fa-moon");
            }
        });