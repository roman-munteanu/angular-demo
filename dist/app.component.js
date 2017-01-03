"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Please choose a User';
        this.users = [
            { id: 1, name: "Alice Parker", email: "ap@test.com" },
            { id: 2, name: "Tom Green", email: "tg@test.com" },
            { id: 3, name: "Jack Black", email: "jb@test.com" }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <a href=\"/\" class=\"navbar-brand\">Angular Demo App</a>\n            </div>\n        </nav>\n    </header>\n    <main>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <ul class=\"list-group users-list\" *ngIf=\"users\">\n                    <li class=\"list-group-item\"\n                        *ngFor=\"let user of users\"\n                        (click)=\"selectUser(user)\"\n                        [class.active]=\"user === activeUser\">\n                        {{user.name}} <b>{{user.email}}</b>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"jumbotron\" *ngIf=\"!activeUser\">\n                    <h2>{{ message }}</h2>\n                </div>\n                <div class=\"jumbotron\" *ngIf=\"activeUser\">\n                  <h2>{{ activeUser.name }} <small>{{ activeUser.email }}</small></h2>\n                </div>\n            </div>\n        </div>\n    </main>\n    <footer>\n        &copy; 2017 highlander\n    </footer>\n    ",
        styles: ["\n    .users-list li {\n        cursor: pointer;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map