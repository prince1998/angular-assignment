import { Component, OnInit } from '@angular/core';
import fetch from 'cross-fetch';

interface Data {
  id: Number,
  uid: Number,
  title: String,
  body: String
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  results: Data[] = [];
  p: number = 1;

  constructor() {
    (async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }

        const response = await res.json();
        for (let item of response) {
          var a: Data = {
            id: item['id'],
            uid: item['userId'],
            title: item['title'],
            body: item['body'],
          };
          this.results.push(a);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }

  ngOnInit(): void {}

}
