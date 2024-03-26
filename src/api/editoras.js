import axios from "axios";

export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const { data } = await axios.get("/editoras/");
    return data;
  }
  async adicionarEditora(editora) {
    const { data } = await axios.post("/editoras/", editora);
    return data.results;
  }
  async atualizarEditora(editora) {
    const { data } = await axios.put(`/editoras/${editora.id}/`, editora);
    return data.results;
  }
  async excluirEditora(id) {
    const { data } = await axios.delete(`/editoras/${id}/`);
    return data.results;
  }
}
