import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: any = [];
  constructor(private restService: HttpService, private route:ActivatedRoute, private router:Router) {

   }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.books = [];
    this.restService.getBooks().subscribe((data: []) => {
      this.books = data;
    });
  }

  add(){
    this.router.navigate(['/book-add']);
  }

  delete(id)
 {
   this.restService.deleteBook(id).subscribe((res)=>{
    this.getBooks();
   }, (err) =>{console.log(err)});
 }
 
}
