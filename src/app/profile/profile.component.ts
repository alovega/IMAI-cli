import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faComment, faCog, faVideo, faClone } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Profile, ProfileData } from '../profile';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_data:any;
  sub!: Subscription
  faHeart = faHeart;
  faComment= faComment;
  faCog=faCog;
  faVideo=faVideo;
  faClone=faClone
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.sub = this.sharedService.profile_data.subscribe(
      data => {
        this.profile_data = data;
      }
    )
  }

}
