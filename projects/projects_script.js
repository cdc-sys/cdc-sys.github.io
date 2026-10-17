
function createProjectElement(data) {
    if (data.type == "project") {
        var div = document.createElement("div");
        div.classList.add("project");

        var img = document.createElement("img");
        img.src = "./images/" + data.image;
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
    } else if (data.type == "category") {
        var h2 = document.createElement("h2");
        h2.classList.add("cog");
        h2.innerText = data.name;
        document.getElementById("item-container").appendChild(h2);
    }
}

async function fetchProjects() {
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