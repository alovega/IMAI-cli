import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faComment, faCog, faVideo, faClone } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../app.service';
import { Profile, ProfileData } from '../profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() data = '';
  faHeart = faHeart;
  faComment= faComment;
  faCog=faCog;
  faVideo=faVideo;
  faClone=faClone
  profile!: Profile
  constructor(private appService: AppService, private route: ActivatedRoute) { 
    this.profile = {account:this.route.snapshot.params['name']}
    console.log(this.data);
  }

  ngOnInit(): void {
    this.getProfile(this.profile);
  }

  getProfile(account:Profile){
    return this.appService.getProfile(account).subscribe((data:ProfileData) =>{
      console.log(data)
    })
  }

}
