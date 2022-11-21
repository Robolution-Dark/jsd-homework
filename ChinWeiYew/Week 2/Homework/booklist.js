const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
];

// let body = document.querySelector('body')
// for(var i=0; i<books.length; i++) {
//     let book = books[i]
//     let p = document.createElement('p')
//     p.innerHTML = `Book Title: ${book.title}, Author: ${book.author}, AlreadyRead: ${book.alreadyRead}`
//     if (book.alreadyRead) {
//         p.style.color = 'red'
//     }
//     body.appendChild(p)
// }

let body = document.querySelector('body')
for(var i=0; i<books.length; i++) {
    let book = books[i]
    let ul = document.createElement('ul')
    ul.innerHTML = `<li>Name: ${book.title}</li><li>Author: ${book.author}</li><li>Already Read: ${book.alreadyRead ? 'Yes' : 'No'}</li>`
    if (book.alreadyRead) {
        ul.style.color = 'red'
    }
    body.appendChild(ul)
}