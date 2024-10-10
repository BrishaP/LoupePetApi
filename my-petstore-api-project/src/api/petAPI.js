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

  // CRUD Operation: Read
// RESTful Operation: Retrieve a resource (get a pet by ID)
// Example URL: /pets/{id}
// HTTP Method: GET

export async function getPetById(id) {
    try {
      const response = await axios.get(`/pets/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error retrieving pet:', error);
      throw error;
    }
  }

// CRUD Operation: Update
// RESTful Operation: Update an existing resource (update a pet)
// Example URL: /pets/{id}
// HTTP Method: PUT or PATCH

export async function updatePetById(id, pet) {
    try {
      const response = await axios.put(`/pets/${id}`, pet);
      return response.data;
    } catch (error) {
      console.error('Error updating pet:', error);
      throw error;
    }
  }