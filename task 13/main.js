function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    const obj = {
        name,
        email,
        phonenumber,
    };
    axios
        .post(
            "https://crudcrud.com/api/57f1df62145c4056a40e4046338d3973/appointmentdata",
            obj
        )
        .then((response) => {
            showListofRegisteredUser(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
}
function deleteUser(id) {
    axios
        .delete(
            `https://crudcrud.com/api/57f1df62145c4056a40e4046338d3973/appointmentdata/${id}`
        )
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });

    removeItemFromScreen(id);
}

window.addEventListener("DOMContentLoaded", (event) => {
    axios
        .get(
            `https://crudcrud.com/api/57f1df62145c4056a40e4046338d3973/appointmentdata`
        )
        .then((response) => {
            if (response.data.length === 0) {
                console.log("No registered Users");
            } else {
                for (let i = 0; i < response.data.length; i++) {
                    showListofRegisteredUser(response.data[i]);
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

function showListofRegisteredUser(user) {
    const parentNode = document.getElementById("listOfitems");
    const createNewUserHtml = `<li id='${user._id}'>${user.name} - ${user.email} - ${user.phonenumber}
                                        <button onclick=deleteUser('${user._id}')>Delete</button>
                                    </li>
                                    `;
    console.log(createNewUserHtml);
    parentNode.innerHTML += createNewUserHtml;
}

function removeItemFromScreen(id) {
    const parentNode = document.getElementById("listOfitems");
    const elem = document.getElementById(id);
    parentNode.removeChild(elem);
}
