
function createProjectElement(data){
    var div = document.createElement("div");
    div.classList.add("project");

    var img = document.createElement("img");
    img.src = "./images/"+data.image;
    if (data.image == null) img.src = "./images/place.png";
    div.appendChild(img);

    var title = document.createElement("a");
    title.innerText = data.name;
    title.href = data.url;
    div.appendChild(title);

    var description = document.createElement("p");
    description.innerText = data.description;
    div.appendChild(description);

    document.getElementById("item-container").appendChild(div);
}

async function fetchProjects(){
    try {
        var req = await fetch("./data.json");
        if (req.status == 200) {
            var data = await req.json();
            for (var project of data) {
                createProjectElement(project);
            }
        }
    } catch (e) {
        alert(e);
    }
}

fetchProjects();