import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circulo.component.html',
  styleUrl: './circulo.component.css'
})
export class CirculoComponent {
  isVisible = false;

  // Detecta el scroll para mostrar u ocultar el botón
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 300; // Muestra el botón si el scroll es mayor a 300px
  }

  // Método para hacer scroll hacia arriba
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
