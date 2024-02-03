const jc = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () => {
    jc.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jc.textContent=`${item.joke}`;
        jc.classList.add("fade");
});
}
btn.addEventListener("click",getJoke);
getJoke();
