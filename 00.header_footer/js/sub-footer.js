fetch("../00.header_footer/sub-footer.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("footer").innerHTML = data; 
    })