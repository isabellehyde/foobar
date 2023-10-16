const buttonFoo = document.getElementById("Foo")
const buttonBar = document.getElementById("Bar")
const buttonFooBar = document.getElementById("FooBar")
const body = document.querySelector("body")

buttonFoo.addEventListener("click", function(){
    const pTag = document.createElement('h3');
    pTag.textContent = "Foo";
    body.appendChild(pTag);
})

buttonBar.addEventListener("click", function(){
    const pTag = document.createElement('h3');
    pTag.textContent = "Bar";
    body.appendChild(pTag);
})

buttonFooBar.addEventListener("click", function(){
    const pTag = document.createElement('h2');
    pTag.textContent = "FooBar";
    body.appendChild(pTag);
})