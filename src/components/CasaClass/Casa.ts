import React from "react";
import { ImageSourcePropType } from "react-native";

export class Casa {
  urls: ImageSourcePropType[];
  localizacao: string;
  nota: string;
  distancia: number;
  noites: number;
  periodo: string;
  preco: string;

  constructor(
    urls: ImageSourcePropType[],
    localizacao: string,
    nota: string,
    distancia: number,
    noites: number,
    periodo: string,
    preco: string
  ) {
    this.urls = urls;
    this.localizacao = localizacao;
    this.nota = nota;
    this.distancia = distancia;
    this.noites = noites;
    this.periodo = periodo;
    this.preco = preco;
  }
}
