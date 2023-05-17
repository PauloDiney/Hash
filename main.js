const buttonList = document.querySelector("#listar-aulas");
const divResult = document.querySelector("#resultado");
const BtHash = document.querySelector("#gerar-hash");
const Btinput = document.querySelector("#hash");
const Btresul = document.querySelector("#resultado-hash");

buttonList.addEventListener("click", async function () {
    const result = await fetch("http://localhost/ams/")
        .then((response) => {
            return response.json();
        });
    montarHTMLaulas(result);

})

BtHash.addEventListener("click", async function(){
    const t = await fetch("http://localhost/ams/hash/" + Btinput.value)
        .then((response) => {
            return response.json();

        });
        Btresul.innerHTML = t
    })




montarHTMLaulas = (aulas) => {
    const divResult2 = document.createElement("div"); 
    aulas.forEach((aula) => {
        const button = document.createElement("button");
        button.innerHTML = aula;
        button.addEventListener("click", async () => {
            divResult2.innerHTML = "";
            const result = await fetch("http://localhost/ams/aula/" + aula)
                .then((response) => {
                    return response.json();
                });
            result.forEach((thing) => {
                const p = document.createElement("p");
                p.innerHTML = thing;
                divResult2.appendChild(p);
            })
            divResult.appendChild(divResult2);

        });
        divResult.appendChild(button);
    });

   
}