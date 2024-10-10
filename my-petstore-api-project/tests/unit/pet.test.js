import { describe, expect, test, jest } from '@jest/globals';
import axios from 'axios';
import { addPet, getPetById} from '../../src/api/petAPI';

//mocking the axios library to simulate hrrp requests (as we aren't making actual network calls)
jest.mock('axios');

// CRUD Operation: Create
// RESTful Operation: Create a new resource (pet)
// Example URL: /pets
// HTTP Method: POST

//setup and teardown: beforeeach to ensure each test run in isolation/ independently
describe('Pet API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


//using Arange(setup test conditions) Act (execute code being tested) Assert (ensure outcome is as expected)
//Test case: successful post request
  test('POSTs and returns a pet with id: 12, name: test, and status: available', async () => {
    // Arrange
    const newPet = { id: 12, name: 'test', status: 'available' };
    const response = { data: newPet };
    axios.post.mockResolvedValue(response);

    // Act
    const result = await addPet(newPet);

    // Assert
    expect(result).toEqual(newPet);
    expect(axios.post).toHaveBeenCalledWith('/pets', newPet);
  });

  //Edge case test: in event of network error, do we get error message
  test('should handle network error when adding a pet', async () => {
    // Arrange
    const newPet = { id: 12, name: 'test', status: 'available' };
    const errorMessage = 'Network Error';
    axios.post.mockRejectedValue(new Error(errorMessage));

    // Act & Assert
    await expect(addPet(newPet)).rejects.toThrow(errorMessage);
    expect(axios.post).toHaveBeenCalledWith('/pets', newPet);
  });

  //test case: server-side validation error--> **CHECK THIS 
  test('should handle server-side validation error when adding a pet', async () => {
    // Arrange
    const newPet = { id: 12, name: 'test', status: 'available' };
    const errorResponse = {
      response: {
        status: 400,
        data: { message: 'Bad Request' }
      }
    };
    axios.post.mockRejectedValue(errorResponse);

    // Act & Assert
    try {
      await addPet(newPet);
    } catch (error) {
      expect(error.response.data.message).toBe('Bad Request');
    }
    expect(axios.post).toHaveBeenCalledWith('/pets', newPet);
  });

   // CRUD Operation: Read
  // RESTful Operation: Retrieve a resource (get a pet by ID)
  // Example URL: /pets/{id}
  // HTTP Method: GET

  //Test case: successful get request by ID
  test('GETs a pet by id and returns the pet data', async () => {
    // Arrange
    const petId = 12;
    const petData = { id: 12, name: 'test', status: 'available' };
    axios.get.mockResolvedValue({ data: petData });

    // Act
    const result = await getPetById(petId);

    // Assert
    expect(result).toEqual(petData);
    expect(axios.get).toHaveBeenCalledWith(`/pets/${petId}`);
  });

   // Test case: Pet not found (Pet with an ID not in database)
   test('should handle pet not found error', async () => {
    // Arrange
    const petId = 999;
    const errorResponse = {
      response: {
        status: 404,
        data: { message: 'Pet not found' }
      }
    };
    axios.get.mockRejectedValue(errorResponse);

    // Act & Assert
    try {
        await getPetById(petId);
      } catch (error) {
        expect(error.response.data.message).toBe('Pet not found');
      }
      expect(axios.get).toHaveBeenCalledWith(`/pets/${petId}`);
    });
  
    // Test case: Network error 
    test('should handle network error when retrieving a pet', async () => {
      // Arrange
      const petId = 12;
      const errorMessage = 'Network Error';
      axios.get.mockRejectedValue(new Error(errorMessage));
  
      // Act & Assert
      await expect(getPetById(petId)).rejects.toThrow(errorMessage);
      expect(axios.get).toHaveBeenCalledWith(`/pets/${petId}`);
    });
  
    // Test case: Invalid ID
test('should handle invalid ID error', async () => {
    // Arrange
    const invalidId = 'invalid-id';
    const errorResponse = {
      response: {
        status: 400,
        data: { message: 'Invalid ID' }
      }
    };
    axios.get.mockRejectedValue(errorResponse);
  
    // Act & Assert
    try {
      await getPetById(invalidId);
    } catch (error) {
      expect(error.response.data.message).toBe('Invalid ID');
    }
    expect(axios.get).toHaveBeenCalledWith(`/pets/${invalidId}`);
  });
});