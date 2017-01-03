import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">Angular Demo App</a>
            </div>
        </nav>
    </header>
    <main>
        <div class="row">
            <div class="col-sm-4">
                <ul class="list-group users-list" *ngIf="users">
                    <li class="list-group-item"
                        *ngFor="let user of users"
                        (click)="selectUser(user)"
                        [class.active]="user === activeUser">
                        {{user.name}} <b>{{user.email}}</b>
                    </li>
                </ul>
            </div>
            <div class="col-sm-8">
                <div class="jumbotron" *ngIf="!activeUser">
                    <h2>{{ message }}</h2>
                </div>
                <div class="jumbotron" *ngIf="activeUser">
                  <h2>{{ activeUser.name }} <small>{{ activeUser.email }}</small></h2>
                </div>
            </div>
        </div>
    </main>
    <footer>
        &copy; 2017 highlander
    </footer>
    `,
    styles: [`
    .users-list li {
        cursor: pointer;
    }
  `]
})

export class AppComponent {
    message: string = 'Please choose a User';
    users: User[] = [
        {id: 1, name: "Alice Parker", email: "ap@test.com"},
        {id: 2, name: "Tom Green", email: "tg@test.com"},
        {id: 3, name: "Jack Black", email: "jb@test.com"}
    ];
    activeUser: User;
    selectUser(user) {
        this.activeUser = user;
    }
}