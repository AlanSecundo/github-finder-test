import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitrepoService } from './../gitrepo.service';
import { ModalComponent } from './components/modal/modal.component';

declare const $;

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.css']
})

export class ListRepositoriesComponent implements OnInit {

  repositories = []
  name = this.activatedRoute.snapshot.paramMap.get('name');
  page = 0;
  repo = {};
  numberOfPages = 0
  actualPage = 1
  spinner = false

  @ViewChild(ModalComponent)
  newModal: ModalComponent;

  constructor(private gitRepoService: GitrepoService, private activatedRoute : ActivatedRoute) {
   }

  ngOnInit() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
    this.getGitRepos(this.name, this.page)
  }

  getGitRepos(name, page) {
    this.spinner = true;
    this.repositories = []
    this.gitRepoService.getRepositories(name, page).subscribe(res => {
      res.items = res.items.map(this.formatData)
      this.repositories = res.items
      // IF because in gitHub API Only the first 1000 search results are available
      if (res.total_count > 1000) {
        this.numberOfPages = 84 //1000 / 12 = 84 (Rounded)
      } else {
        this.numberOfPages = Math.round(res.total_count/12)
      }
      this.spinner = false;
    });
  }

  openModal(repositorie) {
    this.repo = repositorie
    this.newModal.show();
  }

  nextPage() {
    this.actualPage++;
    this.getGitRepos(this.name, this.actualPage)
  }

  backPage() {
    this.actualPage--;
    this.getGitRepos(this.name, this.actualPage)
  }

  goToPage(page) {
    this.actualPage = page
    this.getGitRepos(this.name, page)
  }

  formatData (object) {
    object.created_at = object.created_at.substring(0, 10).split('-').reverse().join('/');
    return object;
  }
}
