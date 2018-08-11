import { animate, state, style, transition, trigger } from '@angular/animations';

export const fade = (duration: number = 200) =>
  trigger('fade', [
    state('show', style({ opacity: 1 })),
    state('hide', style({ opacity: 0 })),
    transition('show => hide', animate(`${duration}ms ease-in`)),
    transition('hide => show', animate(`${duration}ms ease-out`))
  ]);
