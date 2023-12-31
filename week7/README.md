# Week 7
## Blog Demo
This demo showcases how an array can be dynamically modified in React. Here, blog posts can be created and deleted. Updates to the post list are caught by the useEffect hook which re-renders the posts. 

![blog demo](./blog_screenshot1.png)

## Music App
### Part 1
In this update, I updated the UI to include track information. Each album card now displays a list of tracks. In the detailed view, these tracks can be clicked to reveal the lyrics for the song, and a link to play the track.

![album details](./music_screenshot1.png)

### Part 2
In this update, I added the ability to create an album and add it to the database.
![create album](./music_screenshot2.png)

### Part 3
In this update, NewAlbum has been changed to EditAlbum. This component contains logic to both create and edit albums. If the component is passed an existing album, it assumes the edit role Otherwise, it creates a new album.
![edit album](./music_screenshot3.png)