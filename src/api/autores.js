import axios from "axios";

export default class AutoresApi {
  async buscarTodosOsAutores() {
    const { data } = await axios.get("/autores/");
    return data;
  }
  async adicionarAutor(autor) {
    const { data } = await axios.post("/autores/", autor);
    return data.results;
  }
  async atualizarAutor(autor) {
    const { data } = await axios.put(`/autores/${autor.id}/`, autor);
    return data.results;
  }
  async excluirAutor(id) {
    const { data } = await axios.delete(`/autores/${id}/`);
    return data.results;
  }
}
