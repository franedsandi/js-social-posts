OLD TIMES TWITTER
===
Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
===
**Milestone 1** 
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
  - id del post, numero progressivo da 1 a n
  - nome autore,
  - foto autore,
  - data in formato americano (mm-gg-yyyy),
  - testo del post,
  - immagine (non tutti i post devono avere una immagine),
  - numero di likes.
*Non è necessario creare date casuali*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
===
**Milestone 2** 
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
===
**Milestone 3** 
- Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
===
****BONUS**
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
3. Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
===
**Consigli del giorno:**
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
===
**Step by step:**
1. print the given html card in js in the most generic way to add the array info
2. use a for each to add an event listener to esch like buton
3. asociate the like button to the post
4. modify the likes counter when the button is clicked
5. modify the like button when is clicked
6. if like button is liked, when reclick , unlike -----> check if the button have been pressed , if it true then unlike, if false then like
7. update the like counter
8. create a funtion to split the american stile date and reorganize it in the italian style
9. change the print so it will show the new date format (italian)
10. create a funtion to pic the initials of the name based in the parts of the name (name and last name), picking from the word 0 the char 0 and from the word 1 the char 0
11. if profile have a picture, display picture, if not , display initials (profileImageOrInitials)
===
**EXTRA**
Organize post by created date (newest to oldest)
**************************************
posts.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return dateB - dateA;
});
**************************************
This code is sorting the posts array by the created date in descending order (from newest to oldest) using the sort method and a custom comparison function. Here's an explanation of each part:

posts.sort((a, b) => { ... });: This line calls the sort method on the posts array and provides a comparison function as an argument. The comparison function is used to determine the order in which the elements should be sorted.

const dateA = new Date(a.created); and const dateB = new Date(b.created);: These lines create JavaScript Date objects from the created date strings of two posts, a and b. This allows us to compare the dates and determine their order.

return dateB - dateA;: In the comparison function, we subtract dateA from dateB. This subtraction is crucial for sorting in descending order. When dateB (the date of the second post) is later than dateA (the date of the first post), the result is positive, indicating that b should come before a. This results in the array being sorted from newest to oldest, as posts with later dates will appear earlier in the sorted array.
===
**Coments**
the HTML post format and the JS aray were already made , just worked on the funtionality, not the design (lovely to know an our earlier...)

