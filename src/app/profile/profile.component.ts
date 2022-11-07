import { Component, OnInit } from '@angular/core';
import { faHeart, faComment, faCog, faVideo, faClone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faHeart = faHeart;
  faComment= faComment;
  faCog=faCog;
  faVideo=faVideo;
  faClone=faClone

  constructor() { }

  ngOnInit(): void {
  }

}
