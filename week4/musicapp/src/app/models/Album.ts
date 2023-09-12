import { Track } from "./Track";

export class Album {
	public id: number = -1;
	public title: string = "";
	public artist: string = "";
	public description: string = "";
	public year: number = 1900;
	public image: string = "";
	public tracks: Track[] = [];

	constructor(id: number, title: string, artist: string, description: string, year: number, image: string, tracks: Track[]) {
		this.id = id;
		this.title = title;
		this.artist = artist;
		this.description = description;
		this.year = year;
		this.image = image;
		this.tracks = tracks;
	}
}
