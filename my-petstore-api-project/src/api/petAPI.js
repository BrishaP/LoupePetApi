//import axios using ESmodules
import axios from "axios";

// CRUD Operation: Create
// RESTful Operation: Create a new resource (pet)
// Example URL: /pets
// HTTP Method: POST
export async function addPet(pet) {
    try {
      const response = await axios.post('/pets', pet);
      return response.data;
    } catch (error) {
      console.error('Error adding pet:', error);
      throw error;
    }
  }