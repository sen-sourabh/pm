import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertRouteToLabel',
})
export class ConvertRouteToLabelPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return this.convertRouteToLabel(value);
  }

  convertRouteToLabel(route: string): string {
    // Split the route string, removing the leading slash
    const parts = route.split('/');
    const labelParts = parts.slice(1).map((part) => part.charAt(0).toUpperCase() + part.slice(1));

    // Replace hyphens with spaces and handle special cases
    return labelParts.join(' ').replace(/-/g, ' ');
  }
}
