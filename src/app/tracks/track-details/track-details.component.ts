import { Component, Input } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})

export class TrackDetailsComponent {
  @Input()
  track: Track;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private trackService: TrackService) {}

  createTrack(track: Track) {
    this.trackService.createTrack(track).then((newTrack: Track) => {
      this.createHandler(newTrack);
    });
  }

  updateTrack(track: Track): void {
    this.trackService.updateTrack(track).then((updatedTrack: Track) => {
      this.updateHandler(updatedTrack);
    });
  }

  deleteTrack(trackId: String): void {
    this.trackService.deleteTrack(trackId).then((deletedTrackId: String) => {
      this.deleteHandler(deletedTrackId);
    });
  }
}
