const darkMode = () =>{
    const headerBtn = document.querySelector(".header__btn")

    headerBtn.addEventListener("click", () => {
        const html = document.querySelector("html")

        const DarkMode = html.classList.toggle("dark-mode")
        headerBtn.classList.toggle("header__btn--dark-mode")
        
        localStorage.setItem("@dark-mode", DarkMode)
    })
}

const verifyMode = () => {
    const darkInfo = JSON.parse(localStorage.getItem("@dark-mode"))
    const headerBtn = document.querySelector(".header__btn")
    const html = document.querySelector("html")

    if(darkInfo){
        html.classList.add("dark-mode")
        headerBtn.classList.add("header__btn--dark-mode")
    }
}

darkMode()
verifyMode()