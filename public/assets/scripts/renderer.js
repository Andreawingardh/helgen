
eventResults.forEach(eventResult => {
const article = document.createElement('article')
const hgroup = document.createElement('hgroup')
const paragraph = document.createElement('p')
const heading = document.createElement('h2')
const link = document.createElement('a')
const innerWrapper = document.getElementById("inner-wrapper")

paragraph.textContent = eventResult.date;
heading.textContent = eventResult.title;

hgroup.appendChild(paragraph)
hgroup.appendChild(heading)

article.appendChild(hgroup)

innerWrapper.appendChild(article)

})


/* <article>
<hgroup>
    <p>Fredag 17 januari</p>
    <h2>Sagostund på Stadsbiblioteket</h2>
</hgroup>
<p>Veritatis, quo quidem nisi architecto excepturi dolorum enim nostrum nam? Neque sint architecto adipisci vero tempore ducimus quaerat nobis corrupti quasi sed.</p>
<a href="" class="read-more">Läs mer</a>
</article> */