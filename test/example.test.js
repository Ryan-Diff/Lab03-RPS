// IMPORT MODULES under test here:
import { getRandomThrow } from '../r-p-g.js';


const test = QUnit.test;


test('it should take in a number and return that number squared', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
});