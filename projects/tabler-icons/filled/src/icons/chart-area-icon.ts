import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chart-area-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M20 18a1 1 0 0 1 .117 1.993l-.117 .007h-16a1 1 0 0 1 -.117 -1.993l.117 -.007h16z"
    />
    <svg:path
      d="M15.22 5.375a1 1 0 0 1 1.393 -.165l.094 .083l4 4a1 1 0 0 1 .284 .576l.009 .131v5a1 1 0 0 1 -.883 .993l-.117 .007h-16.022l-.11 -.009l-.11 -.02l-.107 -.034l-.105 -.046l-.1 -.059l-.094 -.07l-.06 -.055l-.072 -.082l-.064 -.089l-.054 -.096l-.016 -.035l-.04 -.103l-.027 -.106l-.015 -.108l-.004 -.11l.009 -.11l.019 -.105c.01 -.04 .022 -.077 .035 -.112l.046 -.105l.059 -.1l4 -6a1 1 0 0 1 1.165 -.39l.114 .05l3.277 1.638l3.495 -4.369z"
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
export class SiChartAreaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
