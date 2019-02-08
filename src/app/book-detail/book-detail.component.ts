import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input()
  book: Book;
  constructor(private restService: HttpService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.restService.getBook(this.route.snapshot.params['id']).subscribe((data:Book)=>{
      console.log(data);
      this.book = data;
    })
  }

}
