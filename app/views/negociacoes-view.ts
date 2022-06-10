import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.lista().map((item) => {
            return `
            <tr>
              <td>${new Intl.DateTimeFormat().format(item.data)}</td>
              <td>${item.quantidade}</td>
              <td>${item.valor}</td>
            </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `;
  }

}