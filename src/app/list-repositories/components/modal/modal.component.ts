import { Component, OnInit, ElementRef, Input } from '@angular/core';
declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modal = null;
  @Input()
  repositorie: {}

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
