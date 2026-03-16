import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-rectangle',
  standalone: true,
  imports: [CommonModule],
  template: `<div [ngClass]="classes" [style]="dynamicStyle"></div>`,
  styleUrls: ['./rectangle.css'],
})
export class RectangleComponent {
  /**
   * Width of the rectangle
   */
  @Input()
  width: string = '200px';

  /**
   * Height of the rectangle
   */
  @Input()
  height: string = '100px';

  /**
   * Background color of the rectangle
   */
  @Input()
  backgroundColor: string = '#d7172f';

  /**
   * Border radius style
   */
  @Input()
  variant: 'sharp' | 'rounded' | 'pill' = 'sharp';

  public get classes(): string[] {
    return ['storybook-rectangle', `storybook-rectangle--${this.variant}`];
  }

  public get dynamicStyle(): string {
    return `width: ${this.width}; height: ${this.height}; background-color: ${this.backgroundColor};`;
  }
}
