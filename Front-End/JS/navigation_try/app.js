let elements = document.querySelectorAll(".navigation");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(e){
    const target = e.currentTarget;
        if (target.getAttribute("target") == "blank") {
            location.href = "/" + target.getAttribute("data-link")
        } else {
            location.href = "#" + target.getAttribute("data-link")
        }
  };
};

function _search() {
    document.querySelector('ul').classList.toggle('d-none');
    document.getElementById('search_input').classList.toggle('d-none');
};