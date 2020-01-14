## Design process

- gather requirements
- define list of resources (nouns) [song, user, pets, exercies, routines]
- list of endpoints

## Endpoints

- address for the resource
- avoid using verbs, its not a URL, its a URI. (instead create-song => /api/songs)
  URI is a thing we're using to identify a particular thing on a server -> /api/songs. Is a string of characters used to identify a name or a resource on the internet. Such identification enables interaction with representation
- A URI tells us how to get to a particular point on the server to access the resource (songs) -->/api/songs
- actions are expressed with http methods

- filtering/sorting is the responsibility of the server
  songs

- avoid using verbs, it's not a URL, it's URI. (instead create-song => /api/songs)
- actions are expressed with http methods

Songs

Properties

- name
- duration
- artists
- year
- recordLabel

Actions

- create
- find a song by (filters)
- update
- delete
- paginated list (filters)
- album art

| Action               | Method | Endpoint             |
| :------------------- | :----- | :------------------- |
| List songs           | GET    | /api/songs           |
| Create a Song        | POST   | /api/songs           |
| Update a Song        | PUT    | /api/songs/:id       |
| Remove a song        | DELETE | /api/songs/:id       |
| Add Song's Album Art | PUT    | /api/songs/:id/cover |

## CommonJS module system

- import a module using: require();
- export a module using: module.exports

## Query string

- [article about a url](https://doepud.co.uk/blog/anatomy-of-a-url)
- begins with a `?`
- is made up of key=value pairs
- each key=value pair is separated by an `&`
- the query values are accessed on: req.query

https://www.google.com
/search
?
q=using+the+query+string
&
oq=using+the+query+string
&
aqs=chrome..69i57j0l3.2954j0j8
&
sourceid=chrome
&
ie=UTF-8
