import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
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

  updateBook(){
    this.restService.updateBook(this.route.snapshot.params['id'],this.book).subscribe((result)=>{
      this.router.navigate(['/book-detail/'+result.bookId])
    },(err)=>{console.log(err)});
  }
}
