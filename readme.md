# Rinaord (unofficial) package

Bonjour, j'ai creer un simple project afin d'utiliser l'api de rinaorc plus facilement.

## Comment s'authentifier ?
A savoir que pour avoir votre api key il faut faire /api sur play.rinaorc.com
```js
const Rinaorc = require('rinaorc');
const api = new Rinaorc("<VOTRE-API_KEY>", <true/false>/*Debug mode (default false)*/);
```

## Comment avoir les statistiques d'un joueurs
```js
api.player("<PLAYER-NAME/PLAYER-UUID>");
```

## Comment avoir les statistiques d'un clan
```js
api.clan("<CLAN-NAME/CLAN-ID>");
```

## Comment avoir la liste des staff
```js
api.staff()
```

## Comment avoir les statistiques de tous les joueurs ?
```js
api.playersStats()
```