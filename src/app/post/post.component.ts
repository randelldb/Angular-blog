import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  title: string = 'List of Posts';
  messagePost: string = 'Message Post';
  postParentMessage: string = 'Message from post parent';

  @Input() fromParent: string;
}
