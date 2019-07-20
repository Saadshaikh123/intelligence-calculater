function intelligence (){
    let intelligenceLevels= [
       "crazy about any thing",
        "smart",
        "caring",
        "cool",
        "genius",
        "awesome",
        "marvellous",
        "dumb",
        "excellent",
        "intelligent",
        "smasrt",
        "einstien",
        "over confidence",
        "Nice",
        "best person"
    ]
    let name = document.querySelector("input").value;

    let randomindex = parseInt(Math.random() * intelligenceLevels.length);

    alert(intelligenceLevels[randomindex]);
}