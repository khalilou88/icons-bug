import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-steam-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M16.5 4a5.5 5.5 0 1 1 -.309 10.992l-.078 -.007l-3.646 2.524l-.011 .094c-.267 1.775 -1.707 3.18 -3.571 3.38l-.209 .017h-.176a4 4 0 0 1 -3.756 -2.623l-.016 -.048l-2.122 -.91a1 1 0 0 1 -.599 -.8l-.007 -.119v-3.5a1 1 0 0 1 1.447 -.894l2.964 1.481l.174 -.1a4 4 0 0 1 2.15 -.482l.166 .014l2.126 -2.977l-.01 -.098a5.5 5.5 0 0 1 1.092 -3.758l.169 -.212a5.5 5.5 0 0 1 4.222 -1.974m0 3.5a2 2 0 1 0 0 4a2 2 0 0 0 0 -4"
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
export class SiBrandSteamIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
