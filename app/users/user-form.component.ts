import { Component } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-form',
    styles: [`
        form {
            padding: 10px;
            background: #ecf0f1;
            border-radius: 3px;
            margin-bottom: 30px;
        }
    `],
    template: `
        <form #form="ngForm">
            {{ form.valid }}
            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="name" required [(ngModel)]="newUser.name" #name="ngModel" />
            </div>
            <div class="form-group">
                <input type="text" name="email" class="form-control" placeholder="e-mail" required [(ngModel)]="newUser.name" #name="ngModel" />
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-primary">Create User</button>
        </form>
    `
})

export class UserFormComponent {
    newUser: User = new User();
}