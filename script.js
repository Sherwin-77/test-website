// alert(`Janji HTML ${location.hostname}`)

var links = document.getElementsByTagName('a')


for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.addEventListener("click", () => console.log("Clicked"));
}