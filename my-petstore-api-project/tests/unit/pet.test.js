import { describe, expect, test, jest } from '@jest/globals';
import axios from 'axios';
import { addPet } from '../../src/api/petAPI';

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
});