# [DEPRECATION](https://github.com/podcast-list/podcast-list.github.io)

<p align="center">
  <a href="http://ogilvieira.github.io/awesome-podcasts-br" target="_blank">
    <img src="https://raw.githubusercontent.com/ogilvieira/awesome-podcasts-br/master/brand_files/brand_medium.png" alt="Awesome Podcasts BR">
    </a>
    <br>
    Lista dos podcasts que todo desenvolvedor brasileiro deveria experimentar acompanhar. 
    <a href="http://ogilvieira.github.io/awesome-podcasts-br" target="_blank">[VER SITE]</a>
  </p>

---

## Como contribuir? :rocket:

* **Fork & Pull Request:**
Edite o arquivo: `data/podcasts.json` com a alteração.
Para adicionar um novo podcast, utilize o template de objeto json abaixo (remova os comentários)
```javascript
  {
    "name":"",
    "description":"",
    "status":false, // false = desativado, true = em atividade
    "itunes_link":"",
    "website_link":"",
    "youtube_link":"",
    "rss_link":"",
    "soundclound_link":"",
    "twitter_at":"", // username do twitter, sem '@'
    "image":"", // image link
    "language":"pt_br" // en
  }
```
Lembre-se de verificar se o arquivo json final é válido.

**Por Issue, usando flags no titulo:**

* **[UPDATE]** -> Para sugestão de atualizações de dados e links dos podcasts
* **[NEW]** -> Para sugestão de novo podcast a lista, utilize o template abaixo:
```
    Nome:
    Descrição: 
    status: (desativado, em atividade)
    Itunes link:
    Website:
    Canal no Youtube:
    RSS dos episódios:
    Soundclound:
    Twitter:
    Image:
    Idioma: (Português BR ou Inglês)
```
Issues sobre qualquer outro assunto que não seja adição e atualização de lista, podem ser abertos sem FLAG no titulo.


[![Analytics](https://ga-beacon.appspot.com/UA-67879079-1/ogilvieira/dev-podcast-list-brazil)](https://github.com/ogilvieira/dev-podcast-list-brazil)
