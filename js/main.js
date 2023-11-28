const grid = document.querySelector(".grid");
for(let i = 1; i <= 100; i++){
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    squareElement.append(i);
    grid.append(squareElement);
}