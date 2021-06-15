import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  twitterurl: string = 'https://twitter.com/F93nt'
  linkedinurl: string =  'https://www.linkedin.com/in/felipe93nt'
  githuburl: string = 'https://github.com/felipe93nt'

  twtterimg: string = './assets/images/twitter.png'
  linkedinimg: string = './assets/images/linkedin.png'
  githubimg: string = './assets/images/github-icon.png'

  constructor() { }

  ngOnInit(): void {
  }

}
