const grid = document.querySelector(".grid");
const btn_play = document.getElementById("btn-play");
btn_play.addEventListener("click",
    function () {
        for (let i = 1; i <= 100; i++) {
            const squareElement = createMyElement("div", "square");
            squareElement.append(i);
            squareElement.addEventListener("click",
                function () {
                    squareElement.classList.add("clicked");
                }
            )
            grid.append(squareElement);
        }
    }
)

function createMyElement(tagName, className) {
    const currentElement = document.createElement(tagName);
    currentElement.classList.add(className);
    return currentElement;
}


