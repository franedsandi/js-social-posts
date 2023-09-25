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
1. Creazione dell'array con i dati dei posts
2. prendere il disegno della card di bootstrap
3. iterare l'array ed inserire ogni elemento nel DOM
4. salvare gli elementi nella variabile cardsContainer
5. mettere dentro cardsContainer il contenuto delle cards create
6. utilizzare console.log(cardsContainer); per vedere cosa ha generato
7. aggiungere all'HTML il nuovo div appena creato
8. fare click sul bottone "Like"
9. quando clicchi su Like, cambia lo stato del pulsante
10. aggiornare il valore degli hearts corrispondenti
11. non permetterci di toccare il tasto multiple volte (remove event listener)
===
**Bonus step by step:**
1. formattare le date in Italian language
2. if picture = null -----> picture = name first letter
3. like button : first click like +1, second click unlike (-1)