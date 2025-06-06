import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-binary-tree-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M5.058 18.306l2.88 -4.606" />
    <svg:path d="M10.061 10.303l2.877 -4.604" />
    <svg:path d="M10.065 13.705l2.876 4.6" />
    <svg:path d="M15.063 5.7l2.881 4.61" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBinaryTreeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
