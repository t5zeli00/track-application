import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';
import { TrackDetailsComponent } from '../track-details/track-details.component';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  providers: [TrackService]
})

export class TrackListComponent implements OnInit {

  tracks: Track[]
  selectedTrack: Track

  constructor(private trackService: TrackService) { }

  ngOnInit() {
     this.trackService
      .getTracks()
      .then((tracks: Track[]) => {
        this.tracks = tracks.map((track) => {
          if (!track.phone) {
            track.phone = {
              mobile: '',
              work: ''
            }
          }
          return track;
        });
      });
  }

  private getIndexOfTrack = (trackId: String) => {
    return this.tracks.findIndex((track) => {
      return track._id === trackId;
    });
  }

  selectTrack(track: Track) {
    this.selectedTrack = track
  }

  createNewTrack() {
    var track: Track = {
      item_name: '',
      parcel_type: '',
      name: '',
      address: '',
      email: '',
      phone: {
        work: '',
        mobile: ''
      },
      status: {
        'proceed': false,
        'shipped': false,
        'lost': false,
        'delivered': false,
        'not_delivered': false
      }
    };

    // By default, a newly-created contact will have the selected state.
    this.selectTrack(track);
  }

  deleteTrack = (trackId: String) => {
    var idx = this.getIndexOfTrack(trackId);
    if (idx !== -1) {
      this.tracks.splice(idx, 1);
      this.selectTrack(null);
    }
    return this.tracks;
  }

  addTrack = (track: Track) => {
    this.tracks.push(track);
    this.selectTrack(track);
    return this.tracks;
  }

  updateTrack = (track: Track) => {
    var idx = this.getIndexOfTrack(track._id);
    if (idx !== -1) {
      this.tracks[idx] = track;
      this.selectTrack(track);
    }
    return this.tracks;
  }
}
