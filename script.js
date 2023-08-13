function toggleMode() {
    const html = document.documentElement
    // Old way to change the mode
    // if (html.classList.contains("light")) {
    //    html.classList.remove("light")    
    // } else {
    //    html.classList.add("light")
    // }
    // New way
    html.classList.toggle('light')
    
    const img = document.querySelector(".profile img")
    if (html.classList.contains("light")) {
        img.setAttribute('src', 'Light-binary_background.png')
        
    } else {
        img.setAttribute('src', 'binary_code.PNG')   
        
    }
}