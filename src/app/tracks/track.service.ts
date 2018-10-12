import { Injectable } from '@angular/core';
import { Track } from './track';
import { Http, Response } from '@angular/http';

@Injectable()
export class TrackService {
    private tracksUrl = '/api/tracks';

    constructor (private http: Http) {}

    // get("/api/contacts")
<<<<<<< HEAD
    getTracks(): Promise<Track[]> {
=======
    getTracks(): Promise<void | Track[]> {
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
      return this.http.get(this.tracksUrl)
                 .toPromise()
                 .then(response => response.json() as Track[])
                 .catch(this.handleError);
    }

    // post("/api/contacts")
<<<<<<< HEAD
    createTrack(newTrack: Track): Promise<Track> {
=======
    createTrack(newTrack: Track): Promise<void | Track> {
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
      return this.http.post(this.tracksUrl, newTrack)
                 .toPromise()
                 .then(response => response.json() as Track)
                 .catch(this.handleError);
    }

    // get("/api/contacts/:id") endpoint not used by Angular app

    // delete("/api/contacts/:id")
<<<<<<< HEAD
    deleteTrack(delTrackId: String): Promise<String> {
=======
    deleteTrack(delTrackId: String): Promise<void | String> {
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
      return this.http.delete(this.tracksUrl + '/' + delTrackId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/contacts/:id")
<<<<<<< HEAD
    updateTrack(putTrack: Track): Promise<Track> {
=======
    updateTrack(putTrack: Track): Promise<void | Track> {
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
      var putUrl = this.tracksUrl + '/' + putTrack._id;
      return this.http.put(putUrl, putTrack)
                 .toPromise()
                 .then(response => response.json() as Track)
                 .catch(this.handleError);
    }

<<<<<<< HEAD
    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
=======
    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
    }
}
