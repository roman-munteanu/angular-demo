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
        this.message = 'Test!';
        this.users = [
            { id: 1, name: "Alice Parker", email: "ap@test.com" },
            { id: 2, name: "Tom Green", email: "tg@test.com" },
            { id: 3, name: "Jack Black", email: "jb@test.com" }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <a href=\"/\" class=\"navbar-brand\">Angular Demo App</a>\n            </div>\n        </nav>\n    </header>\n    <main>\n        <div class=\"jumbotron\">\n          <h1>Welcome!</h1>\n          <p>message: {{ message }}</p>\n        </div>\n        <ul>\n            <li *ngFor=\"let user of users\">{{user.name}} <b>{{user.email}}</b></li>\n        </ul>\n    </main>\n    <footer>\n        &copy; 2017 highlander\n    </footer>\n  ",
        styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map