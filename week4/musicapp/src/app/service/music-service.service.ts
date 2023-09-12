import { Injectable } from '@angular/core';

//import exampledata from '../../data/sample-music-data.json';

import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
	private readonly artists: Artist[] = [];
	private readonly albums: Album[] = [];
	private host = "http://localhost:5000";

	// construct Music Service
	constructor(private http: HttpClient) {
	}

	public getArtists(callback: (artists: Artist[]) => void): void {
		this.http.get<Artist[]>(this.host + "/artists").
		subscribe((artists: Artist[]) => {
			callback(artists);
		});
	}

	public getAlbums(artist: string, callback: (albums: Album[]) => void): void {
		this.http.get<Album[]>(this.host + "/albums/" + artist).
		subscribe((albums: Album[]) => {
			callback(albums);
		});
	}

	// get album by artist and id
	// public getAlbum(artist: string, id: number): Album | undefined {
	// 	const album = this.albums.find((a) => a.artist === artist && a.id === id);

	// 	if (album) {
	// 		const tracks = album.tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
	// 		return new Album(album.id, album.title, album.artist, album.description, album.year, album.image, tracks);
	// 	}

	// 	return undefined;
	// }

	// add new album to list
	public createAlbum(album: Album, callback: (album: Album) => void): void {
		this.http.post<Album>(this.host + "/albums", album).
		subscribe((data) => {
			callback(album);
		})
	}

	public updateAlbum(album: Album, callback: (album: Album) => void): void {
		this.http.put<Album>(this.host + "/albums", album).
		subscribe((data) => {
			callback(album);
		})
	}

	public deleteAlbum(id: number, callback: (id: number) => void): void {
		this.http.delete<Album>(this.host + "/albums/" + id).
		subscribe((data) => {
			callback(id);
		})
	}
}
