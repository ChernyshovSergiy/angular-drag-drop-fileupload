import { Component, NgZone } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent {
    options: AnimationOptions = {
        path: '/assets/data.json',
    };
    styles: Partial<CSSStyleDeclaration> = {
        maxWidth: '100px',
        margin: '0 auto',
    };
    point: boolean = false;

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

    updateAnimation() {
        this.point = !this.point;
        this.options = {
            ...this.options, // In case you have other properties that you want to copy
            path: this.getPath(),
            // path: '/assets/new-animation.json',
        };
    }
    getPath() {
        return this.point === true ? '/assets/new-animation.json' : '/assets/data.json';
    }
    onLoopComplete() {
        NgZone.assertNotInAngularZone();
        console.log(NgZone.isInAngularZone()); // false
    }
}
