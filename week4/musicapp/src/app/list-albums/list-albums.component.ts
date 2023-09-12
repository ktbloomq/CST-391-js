import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
  @Input() artist: Artist | null = null;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    if(this.artist) {
    console.log("Getting data...");
      this.service.getAlbums(this!.artist!.name, (albums: Album[]) => {
        this.albums = albums;
        console.log("this.artists ", this.albums);
      });
    }
  }

  public onSelectAlbum(album: Album) {
		console.log("Selected Album of " + album.title);
		this.selectedAlbum = album;
    console.log("this.selectedAlbum", this.selectedAlbum);
	}
}
