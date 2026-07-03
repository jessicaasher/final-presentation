// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(' .user-list');

async function main () {
    const users = await fetch ("https://jsonplaceholder.typicode.com/users") /** wait for the backend to get back to us*/
    const usersData = await users.json();  /** wait for the backend to convert the data to frontend format */
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join(""); /** map through the array of users and convert each user to HTML and join them together */
}

main();

function userHTML(user) {
    return `<div class="user-card">
        <div class="user-card__container">
            <h3>${user.name}</h3>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
                ${user.website}
                </a></p>
         </div>
</div>`;
}