import { Component } from '@angular/core';

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
        <div class="jumbotron">
          <h1>Welcome!</h1>
          <p>message: {{ message }}</p>
        </div>
        <ul>
            <li *ngFor="let user of users">{{user.name}} <b>{{user.email}}</b></li>
        </ul>
    </main>
    <footer>
        &copy; 2017 highlander
    </footer>
  `,
    styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})

export class AppComponent {
    message = 'Test!';
    users = [
        {id: 1, name: "Alice Parker", email: "ap@test.com"},
        {id: 2, name: "Tom Green", email: "tg@test.com"},
        {id: 3, name: "Jack Black", email: "jb@test.com"}
    ];
}