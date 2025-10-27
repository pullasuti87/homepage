# Salasanasuojaus

Yksittäinen kansio ja sen alikansiot on helppo suojata salasanalla.

- Suojataan Nanonanon dokumentit salasanalla. Lisää artikkelit-kansioon .htaccess-tiedosto ja kirjoita sinne:
  > - AuthUserFile /home/tunnus/.htusers
  > - AuthGroupFile /dev/null
  > - AuthName ByPassword
  > - AuthType Basic
  > - \<Limit GET>
  > - require valid-user
  > - \</Limit>

AuthUserFile-kohtaan annettava polku on oltava WWW-palvelimella toimiva ja sen on osoitettava salasanatiedostoon. Oikea polku näyttää samalta kuin halava/jalava-koneissa kotihakemiston polku, mutta ei kuitenkaan todellisuudessa ole sama. Tietoturvasyistä .htusers-tiedosto ei saa olla public_html-kansiossa, koska sieltä tiedosto olisi kaikkien luettavissa.

- Luo tunnus ja salasana seuraavalla komennolla, jossa korvaat sanan omatunnus omalla käyttäjätunnuksellasi:
  > - htpasswd -c /wwwhome/home/omatunnus/.htusers tunnus
  >   Komento luo tunnustiedoston kansioon /wwwhome/home/omatunnus/, joka näkyy www-palvelimelle polkuna /home/omatunnus/. Vrt. edellä .htaccess-tiedostoon lisätty polku.
- Anna kaikille lukuoikeus .htusers-tiedostoon:
  > - chmod a+r /wwwhome/home/omatunnus/.htusers
- Jos sinulla ennestään on jo olemassa .htusers-tiedosto ja haluat lisätä siihen tunnuksia, niin komento on:
  > - htpasswd /wwwhome/home/omatunnus/.htusers tunnus
  >   Kokeile kysyykö selain tunnusta ja salasanaa.
  >   Tarkemmin hakemistojen suojaamisesta voi lukea Digipalvelujen ohjeesta.
