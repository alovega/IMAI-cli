import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from '../app.service';
import { User } from '../profile';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  profile_data = new Subject<[User]>();
  constructor() { 
    
  }
}
