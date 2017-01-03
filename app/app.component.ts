import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
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