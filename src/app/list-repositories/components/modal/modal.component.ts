import { Component, OnInit, ElementRef, Input } from '@angular/core';
declare const $;

interface Repository {
  name: String,
  private: Boolean,
  watchers_count: Number,
  open_issues_count: Number,
  stargazers_count: Number,
  owner: {
    login: String,
    avatar_url: String
  }
  description: String
  created_at: String,
  language: String,
  html_url: String
 }

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modal = null;
  @Input()
  repository: Repository;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.modal = document.getElementById('myModal');
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  private getDivModal() {
    const elementNative:HTMLElement = this.element.nativeElement;
    return elementNative.firstChild;
  }

}
