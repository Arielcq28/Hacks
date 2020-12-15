
fetch("https://restcountries.eu/rest/v2/all").then(function(resultado){
    return resultado.json();
}).then(init);

function init(countries){


    countries.forEach(country => {
        // console.log(country.name);
        build(country.flag, country.name, country.alpha2Code);
    });

}

function build(flag, name, code){

    let tag = document.querySelector("#body");

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let img = document.createElement("img");
    img.setAttribute("src", flag);

    td.append(img);
    tr.append(td);
    tag.append(tr);

    td = document.createElement("td");
    td.innerHTML = name;

    tr.append(td);
    tag.append(tr);

    td = document.createElement("td");
    td.innerHTML = code;

    tr.append(td);
    tag.append(tr);

    tag.append(tr);

}
