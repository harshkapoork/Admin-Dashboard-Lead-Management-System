import axios from 'axios';

const API_URL = 'https://6851a6c58612b47a2c0adbd3.mockapi.io/leads';

export default {
  getLeads() {
    return axios.get(API_URL);
  },
  addLeads(todo) {
    return axios.post(API_URL, todo);
  },
  updateTodo(id, todo) {
    return axios.put(`${API_URL}/${id}`, todo);
  },
  deleteTodo(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
