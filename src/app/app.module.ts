import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { AnimationComponent } from './animation/animation.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


export function playerFactory() {
    return player;
}

@NgModule({
    declarations: [AppComponent, DragDropComponent, DragDropFileUploadDirective, AnimationComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        LottieModule.forRoot({ player: playerFactory }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {}
