    function createSnow() {
    const snow = document.getElementById("snow");

    if (!snow) {
        console.error("Hiba: A #snow ID-jű konténer nem található.");
        return;
    }   

    for (let i = 0; i < 80; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        snowflake.textContent = "★";

        const size = Math.random() * 20 + 10; 
        snowflake.style.fontSize = `${size}px`;

        snowflake.style.position = "absolute"; 
        
        snowflake.style.left = Math.random() * 100 + "vw";
        
        snowflake.style.top = Math.random() * -500 + "px"; 

        snowflake.style.opacity = Math.random() * 0.8 + 0.2; 

        const duration = 2 + Math.random() * 4; 
        snowflake.style.animation = `fall ${duration}s linear infinite`;
    
        snowflake.style.animationDelay = `-${Math.random() * duration}s`; 

        snow.appendChild(snowflake);
    }
}

