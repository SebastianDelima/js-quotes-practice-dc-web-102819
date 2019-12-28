document.addEventListener('DOMContentLoaded',() => {
  getQuotes()

})

function getQuotes(){

    fetch('http://localhost:3000/quotes?_embed=likes')
    .then(response => response.json())
    .then(quotes => quotes.forEach(quote => {displayQuotes(quote)}))
}

function displayQuotes(quote){

    let quoteList        = document.querySelector('#quote-list')
    let quoteLi          = document.createElement('li')
    let blockquote       = document.createElement('blockquote')
    let quoteText        = document.createElement('p')
    let authorFooter     = document.createElement('footer')
    let likeButton       = document.createElement('button')
    let deleteButton     = document.createElement('button')
    let subButton        = document.querySelector('.btn-primary')

    blockquote.classList.add('blockquote')
    quoteText.classList.add('mb-0')
    authorFooter.classList.add('blockquote-footer')
    likeButton.classList.add('btn-success')
    deleteButton.classList.add('btn-danger')

    quoteText.innerText    = quote.quote
    authorFooter.innerText = quote.author
    likeButton.innerText   = 'Like'
    deleteButton.innerText = 'delete'

    likeButton.addEventListener('click', addLike)
    subButton.addEventListener('click', createQuote)

    quoteList.appendChild(quoteLi)
    quoteLi.appendChild(blockquote)
    blockquote.append(quoteText, authorFooter, likeButton, deleteButton)

}


function createQuote(){

    event.preventDefault()
    let quoteText = event.target.parentElement.querySelector('#new-quote').value
    let authorText = event.target.parentElement.querySelector('#author').value
    let newQuote = Object.assign({quote: quoteText, author: authorText})
    event.target.parentElement.reset()
    

    displayQuotes(newQuote)
   event.preventDefault()
}

function addLike(event){

    debugger
}