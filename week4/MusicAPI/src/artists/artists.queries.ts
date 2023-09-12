export const artistQueries = {
    readArtists: `
    SELECT
    DISTINCT artist as name
    FROM music.albums
    `
}