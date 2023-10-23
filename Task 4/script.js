//* Load ==============================================================================================

// let currentPage = 1;
// const usersContainer = document.querySelector('#users');
// const loadMoreButton = document.querySelector('#loadMore');

// function getUsers(page) {
//     fetch(`https://reqres.in/api/users?page=${page}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const users = data.data;

//             users.sort((a, b) => a.first_name.localeCompare(b.first_name));

//             users.forEach(user => {
//                 const card = document.createElement('div');
//                 card.classList.add('card');
//                 card.innerHTML = `
//                     <img src="${user.avatar}" alt="Avatar">
//                     <p class="card-header">${user.first_name} ${user.last_name}</p>
//                     <p class="email">${user.email}</p>
//                     <p><strong>User ID:</strong> ${user.id}</p>
//                 `;
//                 usersContainer.append(card);
//             });

//             if (data.total_pages > page) {
//                 loadMoreButton.style.display = 'block';
//                 currentPage++;
//             } else {
//                 loadMoreButton.style.display = 'none';
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// loadMoreButton.addEventListener('click', () => getUsers(currentPage));

// getUsers(currentPage);


//* Pagination========================================================================================

const usersOnPage = 5;
let currentPage = 1;
const usersContainer = document.querySelector('#users');
const paginationContainer = document.querySelector('#pagination');

function getUsers(page, usersOnPage) {
    fetch(`https://reqres.in/api/users?page=${page}&per_page=${usersOnPage}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const users = data.data;

            users.sort((a, b) => a.first_name.localeCompare(b.first_name));

            usersContainer.innerHTML = '';

            users.forEach((user) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${user.avatar}" alt="Avatar">
                    <p class="card-header">${user.first_name} ${user.last_name}</p>
                    <p class="email">${user.email}</p>
                    <p><strong>User ID:</strong> <span>${user.id}</span></p>
                `;
                usersContainer.append(card);
            });

            renderPagination(data.total_pages);
        })
        .catch((error) => console.error('Error:', error));
}

function renderPagination(totalPages) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            getUsers(currentPage, usersOnPage);
        });
        paginationContainer.append(button);
    }
}

getUsers(currentPage, usersOnPage);
