import { Component } from "@angular/core";



 @Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
  })

 export class ArticleComponent {
  title: string = "Whatever you want";
  content: string = "Wabadebadoo Zapzing Ayaw Ko Bobo Siya Blursh! Meshaloob! Blursh! Uhh Shamoo Ralla Poo Cuh Teekaloo Depwa Spanewash Depla Blah Shoo Flee Turkey Nurbler? Firby Nurbs Benzi Chibna Looble Bazebni Gweb Ugh...Groble! Wag Nere, Wap Zow Ribby Wibbs Bloo Bagoo Dag Dag";
  isTechRelated: boolean = true;
  getColor() {
    return this.isTechRelated === true ? 'blue' : 'yellow'
  }
  // techYes = "Tech Related"
 }

// Simlish lol
// Wabadebadoo Zapzing Ayaw Ko Bobo Siya Blursh! Meshaloob! Blursh! Uhh Shamoo Ralla Poo Cuh Teekaloo Depwa Spanewash Depla Blah Shoo Flee Turkey Nurbler? Firby Nurbs Benzi Chibna Looble Bazebni Gweb Ugh...Groble! Wag Nere, Wap Zow Ribby Wibbs Bloo Bagoo Dag Dag
