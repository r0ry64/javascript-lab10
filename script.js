const fetchBtn = document.getElementById('fetch-btn');
const xhrBtn = document.getElementById('xhr-btn');
const postForm = document.getElementById('post-form');
const putForm = document.getElementById('put-form');
const outputDiv = document.getElementById('output');
const postOutput = document.getElementById('post-output');
const putOutput = document.getElementById('put-output');

fetchBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            outputDiv.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        })
        .catch(error => {
            outputDiv.innerHTML = `<p class='error'>Failed to fetch data: ${error.message}</p>`;
        });
});

xhrBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            outputDiv.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
        } else {
            outputDiv.innerHTML = `<p class='error'>Failed to fetch data: ${xhr.statusText}</p>`;
        }
    };

    xhr.onerror = function () {
        outputDiv.innerHTML = `<p class='error'>Network error occurred.</p>`;
    };

    xhr.send();
});