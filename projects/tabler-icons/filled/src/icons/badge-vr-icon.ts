import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-badge-vr-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-3.5 4h-1.5a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1.196l1.168 1.75a1 1 0 0 0 1.387 .278l.093 -.07a1 1 0 0 0 .184 -1.317l-1.159 -1.738l.044 -.023a2.5 2.5 0 0 0 -1.217 -4.684m-4.184 .051a1 1 0 0 0 -1.265 .633l-1.051 3.154l-1.051 -3.154a1 1 0 0 0 -1.898 .632l2 6c.304 .912 1.594 .912 1.898 0l2 -6a1 1 0 0 0 -.633 -1.265m4.184 1.949a.5 .5 0 1 1 0 1h-.5v-1z"
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
export class SiBadgeVrIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
