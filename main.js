const sk = {
    tec1:{name:"Python", img:"./img/python.png"},
    tec2:{name:"C++", img:"./img/c++.png"},
    tec3:{name:"Java", img:"./img/java.png"},
    tec4:{name:"Android", img:"./img/android.png"},
    tec5:{name:"Godot", img:"./img/godot.png"},
    tec6:{name:"Excel", img:"./img/excel.png"}
};
console.log(sk.tec1.name)
const skillsDiv = document.getElementById("skills");

for (let tec in sk){
    skillsDiv.innerHTML += `<div id="${tec}" class="tec-div">
                                <p id="${tec}-text" class="sk-name">${sk[tec]['name']}</p>
                                <img class="tec-img" src="${sk[tec]['img']}" alt="tecnologia" />
                            </div>`
};