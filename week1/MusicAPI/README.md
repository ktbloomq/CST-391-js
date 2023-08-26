# MusicAPI
CRUD API for music database.

## Database
initialization file: [MusicDB.sql](./src/MusicDB.sql)

## API endpoints
API source template: 
[https://documenter.getpostman.com/view/8284265/UVeDtnei](https://documenter.getpostman.com/view/8284265/UVeDtnei)

| Type | Request | Description |
| - | - | - |
| GET | http://localhost:5000/artists | get all artists |
| GET | http://localhost:5000/albums | get all albums |
| GET | http://localhost:5000/albums?albumId=# | get album by ID |
| GET | http://localhost:5000/albums/ARTIST | get album by artist |
| GET | http://localhost:5000/albums/search/artist/TERM | search albums by artist name
| GET | http://localhost:5000/albums/search/description/TERM | search albums by description
| POST | http://localhost:5000/albums | create an album |
| PUT | http://localhost:5000/albums | update an album |
| DELETE | http://localhost:5000/albums/# | delete an album |

## Command
start the api
```
npm run start
```
start the api with live editng
```
npm run start:watch
```