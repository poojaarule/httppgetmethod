let sendrequestbtn1 = document.getElementById("sendrequestbtn");
let loading1 = document.getElementById("loading");
let requeststatus1 = document.getElementById("requeststatus");
let response1 = document.getElementById("response");

function sendgethttprequest() {
    let url = "https://gorest.co.in/public-api/users"
    let option = {
        method: "GET"
    }
    loading1.classList.remove("d-none")
    requeststatus1.classList.add("d-none")

    fetch(url, option)
        .then(function(response) {
            return response.json()
        }).then(function(jsondata) {
            requeststatus1.classList.remove("d-none")
            loading1.classList.remove("d-none")
            requeststatus1.textContent = jsondata.code
            response1.textContent = JSON.stringify(jsondata)
            console.log(jsondata)

        })

}


sendrequestbtn1.addEventListener("click", sendgethttprequest)