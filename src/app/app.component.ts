import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
    // template: '<h2>Hello World</h2>',
    // styles: ['h2{font-family: sans-serif;font-size: 1.2em;}']
})
export class AppComponent{
    emoji = ['🎉', '😍', '😜', '👍'];
    activeEmoji: string;
    changeEmoji(){
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}