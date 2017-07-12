console.log(customers.results);

let profileDiv = "";

customers.results.forEach(function (profile) {

    profileDiv += `
    <div class="profile">
        <img src="${profile.picture.large}">
        <h3>${profile.name.first.toUpperCase()} ${profile.name.last.toUpperCase()}</h3>
        <div class="info">
            <h6 class="email">${profile.email.toUpperCase()}</h6>
            <address>
                ${profile.location.street}</br>
                ${profile.location.city}, ${profile.location.state} ${profile.location.postcode}</br>
                ${profile.cell}
            </address>
            <div class="ssn">
                ${profile.id.value}
            </div>
        </div>
    
    </div>`

    console.log(profileDiv)
});

document.querySelector(".profilesContainer").innerHTML = profileDiv;
