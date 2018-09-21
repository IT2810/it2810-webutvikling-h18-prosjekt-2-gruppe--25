# Dokumentasjon
Gruppe 25

## Krav til innhold og funksjonalitet
For layouten til siden tok vi utgangspunkt i eksemplet i oppgaveteksten, da vi ikke tolket kreativitet på denne fronten som en relevant del av oppgaven.

Ved oppstart av siden blir man presentert med de første filene av de første kategoriene, og vil derfor være de samme hver gang.


### Media

Vi har valgt 3 ulike kategorier, med 4 filer, til hver type media, som er:
#### SVG
 - Minimalistiske planter
 - Landskap
 - Abstrakte spiraler

Kilder:
https://all-free-download.com/free-vector/download/5-floral-ornaments-vector-pack_147678.html  
https://all-free-download.com/free-vector/landscape-svg.html  
https://publicdomainvectors.org/

#### Tekst
 - Utrag fra "Fuglane" av Tarjej Vesaas
 - Haiku
 - Matematiske teoremer

 Kilder:
 https://www.nb.no/items/1841cec6146687482eb921fad1a84ff4?page=0&searchText=  
http://www.dahlbergforlag.se/hambe/haikusamling.html  
Elementary linear algebra 11th edition
 #### Lyd:
 - Klassisk musikk
 - Fuglelyder
 - Motorsykler

Kilder:  https://www.zapsplat.com/

Til sammen er mediafilene under 8mb, noe vi anser som akseptabelt.

## Krav til teknologi

Som spesifisert er løsningen er basert på React og Javascript, mens komponentene er implementert med class. Det er ikke brukt noen eksterne biblioteker, rent utenom Axios (for Ajax-kall), som har blitt spesifisert at vi kan bruke.

### React

Vi har delt inn appen i komponenter på en måte vi mener er hensiktsmessig med App.js på høyeste nivå. Her finner man logikk for innhenting og lagring av data i tillegg til kommunikasjon mellom underkomponentene. App.js inneholder 4 underkomponenter:

 - Header: en enkel komponent som kun inneholder overskriften.
 - TabList: en komponent som igjen inneholder 4 underkompoenter som er de faktiske trykkbare "tabsa". Når de blir trykket på trigges en metode (gitt til TabList som prop fra App) som endrer hvilken utstilling som skal vises. Altså endrer state i App.
 - CategoryContainer: en komponent som innheolder 3 av den samme underkomponen, som hver er en samling med radioknapper som man kan gi tittel og beskrivelse av hvert alternativ. Dette representerer de ulike kategoriene til de 3 medietypene, og kan settes uavhengig av hverandre gjennom en metode gitt som prop fra App, på samme måte som over.
 - Main: Hovedkomponenten som videre inneholder komponenter som faktisk viser tekst, bilde (svg/xml) og lyd (selv om denne komponenten er usynlig). Teksten er i App transformert til html og sendes til underkomponenten. Bildet er allerede i xml-format og sendes direkte til underkomponenten. Lyd håndteres med audio-tagen og trenger derfor bare å motta en kilde, ikke en faktisk fil.

### Ajax
Vi har valgt Axios-biblioteket for å kunne benytte oss av Ajax i React-appen.

#### Innlastning
Bildene er lagret som XML (SVG) og hentes som tekst. Denne kan settes direkte inn i HTMLen og  rendres da riktig.

Teksten er lagret som JSON-array med hvert element som en linje. Dette lastes ned som et JSON-objekt (default for Axios) og parses i App før det sendes videre til underkomponenten.

Lyd håndteres med audio-tagen og trenger derfor bare en source, ikke en faktisk fil. Denne bestemmes ut i fra brukerens valg på siden.
 #### Lagring
 Teksten og bildene som lastes inn lagres i App sin state for at brukeren skal slippe å laste inn filer flere ganger. Dette skjer i en nested array for hver av filtypene, hvor underlistene representerer hver sin mediakategori, for eksempel fuglelyder. Når en fil etterspørres gjøres det en sjekk på om den relevante arrayen har data på det forventede stedet, eller om det bare er "null". Er verdien "null" gjøres det et Axios-kall, ellers brukes bare de innlastede dataene direkte. Dette gjør at brukeren bare laster inn filer som er etterspurt, og gjør også innlastingen av siden første gang desidert raskere.

### Responsive web design
