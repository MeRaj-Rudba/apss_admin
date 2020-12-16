function fetchOwnerData() {
    fetch('http://localhost:8080/flatOwners').then(res => {

        if (!res.ok) {
            throw Error("ERROR!!!");
        }

        return res.json()
    })
        .then(data => {
            //do what i wanna do!!
            const ownerTable = document.getElementById("flat-owner-tbody");
            data.map(owner => {

                const tr = document.createElement('tr')
                tr.innerHTML =
                    `<tr>
                    <td>${owner.name}</td>
                    <td>${owner.fathers_name}</td>
                    <td>${owner.phone}</td>
                    <td>${owner.email}</td>
                    <td>${owner.flatNo}</td>
                </tr>`
                ownerTable.appendChild(tr)
            });


            console.log(data)

        }).catch(err => {
            console.log(err);
        })
}

function fetchMemberData() {
    fetch('http://localhost:8080/flatMembers').then(res => {

        if (!res.ok) {
            throw Error("ERROR!!!");
        }

        return res.json()
    })
        .then(data => {
            //do what i wanna do!!
            const ownerTable = document.getElementById("flat-member-tbody");
            data.map(member => {

                const tr = document.createElement('tr')
                tr.innerHTML =
                    `<tr>
                        <td>${member.name}</td>
                        <td>${member.relation}</td>
                        <td>${member.flatNo}</td>
                
                    </tr>`
                ownerTable.appendChild(tr)
            });


            console.log(data)

        }).catch(err => {
            console.log(err);
        })
}

fetchOwnerData();
fetchMemberData();


