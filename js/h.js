fetch("https://gplaystore.p.rapidapi.com/newFreeApps?country=us", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9bb64e532bmshd7a43c648710e1ap1d743ejsn3901af8c82e7",
            "x-rapidapi-host": "gplaystore.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response)
    }).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });