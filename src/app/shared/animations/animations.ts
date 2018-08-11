import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
} from '@angular/animations';

export const fade = (duration: number = 200) =>
  trigger('fade', [
    state('show', style({ opacity: 1 })),
    state('hide', style({ opacity: 0 })),
    transition('show => hide', animate(`${duration}ms ease-in`)),
    transition('hide => show', animate(`${duration}ms ease-out`))
  ]);

export const spin = (duration: number = 200) =>
  trigger('spin', [
    transition('* => show', [
      animate(`${duration}ms`, keyframes([
        style({ transform: 'rotate(0)' }),
        style({ transform: 'rotate(90deg)' })
      ]))
    ])
  ]);

export const slideRight = () =>
  trigger('slideRight', [
    transition(':enter', [
      animate('1500ms', keyframes([
        style({ transform: 'translateX(-30%)' }),
        style({ transform: 'translateX(0)' })
      ]))
    ])
  ]);

