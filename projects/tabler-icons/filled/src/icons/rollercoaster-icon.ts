import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rollercoaster-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M21 8a1 1 0 0 1 0 2v11a1 1 0 0 1 -2 0v-11h-1.675q -.163 0 -.325 .007v10.993a1 1 0 0 1 -2 0v-10.645a7.8 7.8 0 0 0 -2 .959v9.686a1 1 0 0 1 -2 0v-7.748a7.8 7.8 0 0 0 -1.051 2.064l-.735 2.205a7 7 0 0 1 -.213 .553l-.001 2.926a1 1 0 0 1 -2 0l.001 -.364a6.54 6.54 0 0 1 -4.001 1.364a1 1 0 0 1 0 -2a4.55 4.55 0 0 0 4.316 -3.111l.735 -2.205a9.775 9.775 0 0 1 9.274 -6.684zm-10.22 -3.625l2 2.5a1 1 0 0 1 -.18 1.425l-4 3a1 1 0 0 1 -.868 .164l-1.8 -.5a1 1 0 0 1 -.727 -.864l-.2 -2a1 1 0 0 1 .395 -.9l4 -3a1 1 0 0 1 1.38 .175m9.22 -2.375a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRollercoasterIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
