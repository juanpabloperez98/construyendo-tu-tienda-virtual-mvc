import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  code1 = `def suma(a, b):
  return a + b
def resta(a, b):
  return a - b
def multiplicacion(a, b):
  return a * b
def division(a, b):
  if b != 0:
      return a / b
  else:
      return "Error: División por cero"
operacion = input("Ingrese la operación (+, -, *, /): ")
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))
# Realizar la operación seleccionada
if operacion == "+":
  resultado = suma(num1, num2)
elif operacion == "-":
  resultado = resta(num1, num2)
elif operacion == "*":
  resultado = multiplicacion(num1, num2)
elif operacion == "/":
  resultado = division(num1, num2)
else:
  resultado = "Operación no válida"
# Imprimir el resultado
print(f"Resultado: {resultado}")`

  code2 = `def celsius_a_fahrenheit(celsius):
  return (celsius * 9/5) + 32
temperatura_celsius = float(input("Ingrese la temperatura en grados Celsius: "))
temperatura_fahrenheit = celsius_a_fahrenheit(temperatura_celsius)
print(f"La temperatura en grados Fahrenheit es: {temperatura_fahrenheit}")`

  code3 = `from flask import Flask
  app = Flask(__name__)
  @app.route('/')
  def index():
      return '¡Bienvenido a mi primera aplicación web con Flask!'
  if __name__ == '__main__':
      app.run(debug=True)`

  code4 = `from flask import Flask, request
  app = Flask(__name__)
  @app.route('/saludo/<nombre>')
  def saludo(nombre):
      return f'¡Hola, {nombre}! Bienvenido a mi aplicación web con Flask.'
  if __name__ == '__main__':
      app.run(debug=True)`


  code5 = `from flask import Flask, render_template
  app = Flask(__name__)
  @app.route('/')
  def index():
      return render_template('index.html')
  if __name__ == '__main__':
      app.run(debug=True)`


  code6 = `<!DOCTYPE html>
  <html>
  <head>
      <title>Mi Tienda Online</title>
  </head>
  <body>
      <h1>Bienvenido a {{ tienda_nombre }}</h1>
      <p>Explora nuestros productos:</p>
      <ul>
          {% for producto in productos %}
              <li>{{ producto.nombre }} - $ {{ producto.precio }}</li>
          {% endfor %}
      </ul>
  </body>
  </html>
  `


  code7 = `from flask import render_template
  @app.route('/')
  def index():
      tienda_nombre = "Mi Tienda Online"
      productos = [
          {"nombre": "Producto 1", "precio": 19.99},
          {"nombre": "Producto 2", "precio": 29.99},
          {"nombre": "Producto 3", "precio": 39.99},
      ]
      return render_template('index.html', tienda_nombre=tienda_nombre, productos=productos)`

  constructor(
    private highlightService: HighlightService
  ){ }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
