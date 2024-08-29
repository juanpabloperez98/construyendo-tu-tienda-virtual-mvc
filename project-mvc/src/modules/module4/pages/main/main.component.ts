import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  top: number = 16;
  jump_line: number = 24;

  line1_top = this.top + (this.jump_line * 5) - this.jump_line;
  line2_top = this.top + (this.jump_line * 14) - this.jump_line;

  top_style1: string = this.line1_top + 'px';
  top_style2: string = this.line2_top + 'px';

  code1 = `from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(200))
    precio = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return f'<Producto {self.nombre}>'`

  code2 = `from flask import Flask
from models import db
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://usuario:password@localhost/mi_tienda_virtual'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)`

  code3 = `nuevo_producto = Producto(nombre='Camiseta', descripcion='Camiseta 100% algodón', precio=19.99, stock=50)
db.session.add(nuevo_producto)
db.session.commit()`

  code4 = `productos = Producto.query.all()  # Obtiene todos los productos
producto = Producto.query.filter_by(nombre='Camiseta').first()  # Filtra productos por nombre`

  code5 = `producto = Producto.query.get(1)
producto.precio = 24.99
db.session.commit()
`

  code6 = `producto = Producto.query.get(1)
db.session.delete(producto)
db.session.commit()
`

  code7 = `class Categoria(db.Model):
      __tablename__ = 'categorias'
      id = db.Column(db.Integer, primary_key=True)
      nombre = db.Column(db.String(100), nullable=False)
      productos = db.relationship('Producto', backref='categoria', lazy=True)

    class Producto(db.Model):
      __tablename__ = 'productos'
      id = db.Column(db.Integer, primary_key=True)
      nombre = db.Column(db.String(100), nullable=False)
      descripcion = db.Column(db.String(200))
      precio = db.Column(db.Float, nullable=False)
      stock = db.Column(db.Integer, nullable=False)
      categoria_id = db.Column(db.Integer, db.ForeignKey('categorias.id'), nullable=False)`

  code8 = `productos_etiquetas = db.Table('productos_etiquetas',
    db.Column('producto_id', db.Integer, db.ForeignKey('productos.id'), primary_key=True),
    db.Column('etiqueta_id', db.Integer, db.ForeignKey('etiquetas.id'), primary_key=True)
)`

  code9 = `class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    etiquetas = db.relationship('Etiqueta', secondary=productos_etiquetas, lazy='subquery',
    backref = db.backref('productos', lazy=True))

  class Etiqueta(db.Model):
    __tablename__ = 'etiquetas'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)`

  code10 = `productos_caros = Producto.query.filter(Producto.precio > 100).all()`

  code11 = `productos_ordenados = Producto.query.order_by(Producto.precio.desc()).all()`

  code12 = `pagina = 1
productos_por_pagina = Producto.query.paginate(page=pagina, per_page=10)
`

  ngOnInit(): void {

  }

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
