import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-direction-arrows-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m-.293 13.293a1 1 0 0 0 -1.414 1.414l1 1a1 1 0 0 0 1.414 0l1 -1a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -1.32 .083l-.293 .292zm-3 -5a1 1 0 0 0 -1.414 0l-1 1a1 1 0 0 0 0 1.414l1 1a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-.292 -.293l.292 -.293a1 1 0 0 0 0 -1.414m8 0a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l.292 .292l-.292 .294a1 1 0 0 0 1.414 1.414l1 -1a1 1 0 0 0 0 -1.414zm-4 -4a1 1 0 0 0 -1.414 0l-1 1a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l.293 -.292l.293 .292a1 1 0 0 0 1.414 -1.414z"
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
export class SiDirectionArrowsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
