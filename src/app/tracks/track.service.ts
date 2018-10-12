import { Injectable } from '@angular/core';
import { Track } from './track';
import { Http, Response } from '@angular/http';

@Injectable()
export class TrackService {
    private tracksUrl = '/api/tracks';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getTracks(): Promise<Track[]> {
      return this.http.get(this.tracksUrl)
                 .toPromise()
                 .then(response => response.json() as Track[])
                 .catch(this.handleError);
    }

    // post("/api/contacts")
    createTrack(newTrack: Track): Promise<Track> {
      return this.http.post(this.tracksUrl, newTrack)
                 .toPromise()
                 .then(response => response.json() as Track)
                 .catch(this.handleError);
    }

    // get("/api/contacts/:id") endpoint not used by Angular app

    // delete("/api/contacts/:id")
    deleteTrack(delTrackId: String): Promise<String> {
      return this.http.delete(this.tracksUrl + '/' + delTrackId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/contacts/:id")
    updateTrack(putTrack: Track): Promise<Track> {
      var putUrl = this.tracksUrl + '/' + putTrack._id;
      return this.http.put(putUrl, putTrack)
                 .toPromise()
                 .then(response => response.json() as Track)
                 .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
