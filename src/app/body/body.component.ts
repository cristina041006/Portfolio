import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Icon } from '../interfaces/icon';
import { CirculoComponent } from '../circulo/circulo.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, CirculoComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  squaress : Icon[] = [
    {icon: 'angularjs.png', name:'Angular'},
    {icon: 'javascript.png', name:'JavaScript'},
    {icon: 'typescript.png', name:'TypeScript'},
    {icon: 'html.webp', name:'HTML'},
    {icon: 'css.webp', name:'CSS'},
    {icon: 'react.png', name:'React'},
    {icon: 'node7.png', name:'NodeJs'},
    {icon: 'express-js.png', name:'ExpressJs'},
    {icon: 'python.webp', name:'Python'},
    {icon: 'java.png', name:'Java'},
    {icon: 'Spring_Boot.svg.png', name:'SpringBoot'},
    {icon: 'jsp.png', name:'JSP'},
    {icon: 'thyme.png', name:'Thymeleaf'},
    {icon: 'json.png', name:'JSON'},
    {icon: 'xml.png', name:'XML'},
    {icon: 'MySQL-Logo.wine.png', name:'MySQL'},
    {icon: 'oracle.png', name:'Oracle'},
    {icon: 'postgresql.png', name:'PostgreSQL'},
    {icon: 'mongodb.webp', name:'MongoDB'},
    {icon: 'pl-sql_icon-1.png', name:'PL/SQL'},
    {icon: 'Git-Icon-1788C.png', name:'Git'},
    {icon: 'docker.webp', name:'Docker'},
    {icon: 'eclipse.png', name:'Eclipse'},
    {icon: 'vs.svg.png', name:'Visual Studio Code'},
  ]

}
