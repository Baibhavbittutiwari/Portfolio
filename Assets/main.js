// Filter Projects
function filterSelection(category) {
    var projects = document.getElementsByClassName("p_card");
    if (category == 'all') category = '';
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
        if (projects[i].className.indexOf(category) > -1) {
            projects[i].style.display = "block";
        }
    }
}

// Initially display all projects
filterSelection('all');