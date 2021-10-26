import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Brenda U. KEZA','i can do things you cannot do, you can do things i cannot do. together we can do great things','Mother Teresa',new Date(2020,11,5)),
  ];

  toggleDetails(index){
    this.quotes[index].showQuoted = !this.quotes[index].showQuoted;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.uploadedDate = new Date(quote.uploadedDate);
    this.quotes.push(quote);
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].names}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
