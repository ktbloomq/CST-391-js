import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}
  
  ngOnInit() {
    console.log("Getting data...");
    this.service.getArtists((dbartists: Artist[]) => {
      this.artists = dbartists;
      console.log("this.artists ", this.artists);
    });
  }

  public onSelectArtist(artist: Artist) {
		console.log("Selected Artist of " + artist.name);
		this.selectedArtist = artist;
    console.log(this.selectedArtist);
	}
}
