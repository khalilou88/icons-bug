import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-transition-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M6 2a1 1 0 1 1 0 2a2 2 0 0 0 -2 2v12a2 2 0 0 0 1.85 1.995l.15 .005a1 1 0 0 1 0 2a4 4 0 0 1 -4 -4v-12a4 4 0 0 1 4 -4m12 0a4 4 0 0 1 4 4v12a4 4 0 1 1 -8 0v-5h-4.585l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-3 -3l-.097 -.112l-.071 -.11l-.031 -.062l-.034 -.081l-.024 -.076l-.025 -.118l-.007 -.058l-.004 -.108l.003 -.064l.017 -.119l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09l3 -3a1 1 0 0 1 1.414 1.414l-1.292 1.293h4.585v-5a4 4 0 0 1 4 -4"
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
export class SiTransitionLeftIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
