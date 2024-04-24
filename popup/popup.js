const images = Array.from( document.querySelectorAll("img"));

images.forEach((img) => {
    img.addEventListener("click", () => {
        alert(hi);
        chrome.storage.local.set({image : img.src});
    })
})