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
      this.albums = this.service.getAlbums(this.artist.Name);
    }
  }

  public onSelectAlbum(album: Album) {
		console.log("Selected Album of " + album.Title);
		this.selectedAlbum = album;
	}
}
