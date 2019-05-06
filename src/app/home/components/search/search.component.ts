import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nameRepository =  this.activatedRoute.snapshot.paramMap.get('name');

  constructor (private router: Router, private activatedRoute : ActivatedRoute) {}

  searchRepository () {
    this.router.navigate([`search/${this.nameRepository}`]);
  }

  ngOnInit() {
  }

}
