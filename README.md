<<<<<<< HEAD
#### Installation in your own project
- Install all dependencies `npm install`
- For UMD use you can include `ZiggeoModule` from `ziggeo-angular` package directly.<br/>
Example: `import {ZiggeoModule} from 'angular-ziggeo'`
- For `AOT` ready need to include directly from path <br/>
import { ZiggeoModule } from 'root_path/node_modules/angular-ziggeo/build/ziggeo/index'; <br/>
- and start server with `ng serve` also ready for production `--prod` and AOT `--aot`


#### Just for note
It has been already included in this project, but if you need to implement similar in your own project you have to include below packages<br/>

`src/vendor.ts`
```
    import 'ziggeo-client-sdk/build/ziggeo.css';
    import 'ziggeo-client-sdk/build/ziggeo.js';
```

## Setup Main Model:
```$angular
...
import { ZiggeoModule } from 'angular-ziggeo';

@NgModule({
    ...
    imports: [
        ...
        ZiggeoModule
    ],
    ...
})

...

```

## Recorder Component

```$angular
import {
    Component,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-recorder',
    template: `
       <ziggeo-recorder #ziggeorecorder
            [apiKey]="'your_api_key'"
            [options]="{height: 200, width: 300}"
       ></ziggeo-recorder>
    `
})
export class RecorderComponent implements AfterViewInit {
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: ZiggeoModel;

    ngAfterViewInit () {
        this.recorder = this.ziggeorecorder.recorderInstance;

        this.recorder.on('recording', () => {
            console.log('Recorder in progress');
        }, this);

        this.recorder.on('access_granted', () => {
            console.log('Recorder has camera access');
        }, this);

        this.recorder.on('verified', () => {
            console.log('playing your action here');
        }, this);

        // Below you can find other event listeners to use in your app with ziggeo recorder
    }
}
```
After you can use `app-recorder` in your app

##### Available `event listeners` for recorder:

```react2html

   - attached
   - loaded
   - playing
   - paused
   - ended
   - error
   - manually_submitted
   - uploaded
   - upload_selected
   - recording
   - uploading
   - seek
   - rerecord
   - countdown
   - recording_progress
   - upload_progress
   - processing
   - processed
   - access_forbidden
   - access_granted
   - camera_unresponsive
   - verified
   - no_camera
   - no_microphone
```

## Player:

Ziggeo player:

```$xslt
import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { ZiggeoModel } from 'angular-ziggeo';

@Component({
    selector: 'app-player',
    template: `
    <h5>{{ title }}</h5>
    <ziggeo-player #ziggeoplayer
       [apiKey]="'your_api_key'"
       [options]="{video: 'video_token', width: 520, height: 380}"
    ></ziggeo-player>

    `
})
export class PlayerComponent implements AfterViewInit {
    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: ZiggeoModel;

    constructor () {}

    ngAfterViewInit () {
        this.player = this.ziggeoplayer.playerInstance;

        this.player.on('attached', () => {
            console.log('Attached');
        });

        this.player.on('playing', () => {
            console.log('Playing your action here');
        });

        this.player.on('paused', () => {
            console.log('Paused, your action here');
        });
    }
}

After you can use `app-recorder` in your app

```
##### Available `events listeners` for player:
```angular

   - attached
   - loaded
   - playing
   - paused
   - ended
   - error
   - seek
```


#### Additional Parameters

You can add all available all Ziggeo related options from below link:
- [Ziggeo Available Parameters](https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-stable&javascript-version=v2)
- [Ziggeo Available Embedding Events](https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2)


#### Working Demo:
- [react-live-demo](https://sambua.github.io/react-ziggeo-page)
- [react-ziggeo demo for local install](https://github.com/Ziggeo/react-ziggeo/tree/master/demo)
=======
# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
>>>>>>> db532c472412e030c8fc396e45975e2dcc70465a
