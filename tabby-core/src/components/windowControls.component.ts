/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, HostListener } from '@angular/core'
import { HostWindowService } from '../api/hostWindow'
import { AppService } from '../services/app.service'

/** @hidden */
@Component({
    selector: 'window-controls',
    templateUrl: './windowControls.component.pug',
    styleUrls: ['./windowControls.component.scss'],
    host: { '[class.window-inactive]': 'inactive' },
})
export class WindowControlsComponent {
    /** macOS traffic lights turn gray while the window is not focused */
    inactive = false

    constructor (public hostWindow: HostWindowService, public app: AppService) { }

    @HostListener('window:blur')
    onWindowBlur () {
        this.inactive = true
    }

    @HostListener('window:focus')
    onWindowFocus () {
        this.inactive = false
    }

    async closeWindow () {
        this.app.closeWindow()
    }
}
