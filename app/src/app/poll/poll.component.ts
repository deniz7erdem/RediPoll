import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  constructor(private route: ActivatedRoute) { }
  id: number = 0;
  poll = {
    id: 123456,
    title: 'What is your favorite color?',
    options: [
      { name: 'Red', votes: 89 },
      { name: 'Green', votes: 56 },
      { name: 'Blue', votes: 34 },
      { name: 'Yellow', votes: 45 },
      { name: 'Orange', votes: 56 },
      { name: 'Purple', votes: 13 }
    ],
    totalVotes: 293
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  selectedOption: number | null = null;

  selectOption(index: number) {
      this.selectedOption = index;
  }
}

