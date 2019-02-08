import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  @Input()
  book: Book={ bookId: 123,
    bookName: 'GOT',
    authorName: 'G RR MARTIN',
    price: 340};
  constructor(private restService: HttpService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
  }

  addBook(){
    console.log(this.book);
    this.restService.addBook(this.book).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/book-detail/'+result.bookId])
    },(err)=>{console.log(err)});
  }

}
