import Gameboard from "../../src/modules/Gameboard";

// Testing the placeShip method
// Testing single vertical placements
test("placing a ship of length 5 vertically at coordinates [0,0] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(5, 0, 0, false);

  expect(testGameboard.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 3 vertically at coordinates [4,5] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(3, 4, 5, false);

  expect(testGameboard.occupiedCoords).toEqual([
    [4, 5],
    [5, 5],
    [6, 5],
  ]);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [4, 5],
    [5, 5],
    [6, 5],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 1 vertically at coordinates [9,9] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(1, 9, 9, false);

  expect(testGameboard.occupiedCoords).toEqual([[9, 9]]);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([[9, 9]]);

  expect(valid).toBe(true);
});

test("placing a ship of length 5 vertically at coordinates [9,9] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 9, 9, false);

  expect(testGameboard.occupiedCoords).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 5 vertically at coordinates [6,9] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 6, 9, false);

  expect(testGameboard.occupiedCoords).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 1 vertically at coordinates [10,10] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(1, 10, 10, false);

  expect(testGameboard.occupiedCoords).toEqual([]);

  expect(invalid).toBe(false);
});

// Testing single horizontal placements
test("placing a ship of length 5 horizontally at coordinates [0,0] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(5, 0, 0, true);

  expect(testGameboard.occupiedCoords).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 4 horizontally at coordinates [7,4] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(4, 7, 4, true);

  expect(testGameboard.occupiedCoords).toEqual([
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
  ]);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 2 horizontally at coordinates [9,8] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(2, 9, 8, true);

  expect(testGameboard.occupiedCoords).toEqual([
    [9, 8],
    [9, 9],
  ]);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [9, 8],
    [9, 9],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 5 horizontally at coordinates [9,9] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 9, 9, true);

  expect(testGameboard.occupiedCoords).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 5 horizontally at coordinates [9,6] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 9, 6, true);

  expect(testGameboard.occupiedCoords).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 1 horizontally at coordinates [10,10] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(1, 10, 10, true);

  expect(testGameboard.occupiedCoords).toEqual([]);

  expect(invalid).toBe(false);
});

// Testing multiple placements

const testGameboard2 = new Gameboard(10, 10);

test("placing a ship of length 3 vertically at coordinates [0,0] returns valid coords", () => {
  const valid = testGameboard2.placeShip(3, 0, 0, false);

  expect(testGameboard2.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship0Location = testGameboard2.shipsAndLocations[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 5 horizontally at coordinates [5,5] returns valid coords", () => {
  const valid = testGameboard2.placeShip(5, 5, 5, true);

  expect(testGameboard2.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship0Location = testGameboard2.shipsAndLocations[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard2.shipsAndLocations[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 4 vertically at coordinates [5,3] returns valid coords", () => {
  const valid = testGameboard2.placeShip(4, 5, 3, false);

  expect(testGameboard2.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  const ship0Location = testGameboard2.shipsAndLocations[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard2.shipsAndLocations[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship2Location = testGameboard2.shipsAndLocations[2];

  expect(ship2Location.coordsArray).toEqual([
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 1 horizontally at coordinates [0,1] returns valid coords", () => {
  const valid = testGameboard2.placeShip(1, 0, 1, true);

  expect(testGameboard2.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [0, 1],
  ]);

  const ship0Location = testGameboard2.shipsAndLocations[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard2.shipsAndLocations[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship2Location = testGameboard2.shipsAndLocations[2];

  expect(ship2Location.coordsArray).toEqual([
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  const ship3Location = testGameboard2.shipsAndLocations[3];

  expect(ship3Location.coordsArray).toEqual([[0, 1]]);

  expect(valid).toBe(true);
});

test("placing a second ship of length 1 horizontally at coordinates [0,1] is invalid", () => {
  const valid = testGameboard2.placeShip(1, 0, 1, true);

  expect(testGameboard2.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [0, 1],
  ]);

  const ship0Location = testGameboard2.shipsAndLocations[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard2.shipsAndLocations[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship2Location = testGameboard2.shipsAndLocations[2];

  expect(ship2Location.coordsArray).toEqual([
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  const ship3Location = testGameboard2.shipsAndLocations[3];

  expect(ship3Location.coordsArray).toEqual([[0, 1]]);

  expect(valid).toBe(false);
});

test("placing a ship that would intersect another ship in invalid", () => {
  const valid = testGameboard2.placeShip(4, 6, 3, true);

  expect(testGameboard2.occupiedCoords).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [0, 1],
  ]);

  const ship0Location = testGameboard2.shipsAndLocations[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard2.shipsAndLocations[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship2Location = testGameboard2.shipsAndLocations[2];

  expect(ship2Location.coordsArray).toEqual([
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  expect(valid).toBe(false);
});

// Testing the receiveAttack function
test("a ship of length 3 should sink when hit 3 times", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(3, 0, 0, false);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const attack1 = testGameboard.receiveAttack(0, 0);
  expect(attack1).toBe(true);

  const attack2 = testGameboard.receiveAttack(1, 0);
  expect(attack2).toBe(true);

  const attack3 = testGameboard.receiveAttack(2, 0);
  expect(attack3).toBe(true);

  expect(shipAndLocation.ship.isSunk()).toBe(true);
});

test("a ship of length 3 should not sink when hit 2 times", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(3, 0, 0, false);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const attack1 = testGameboard.receiveAttack(0, 0);
  expect(attack1).toBe(true);

  const attack2 = testGameboard.receiveAttack(1, 0);
  expect(attack2).toBe(true);

  const attack3 = testGameboard.receiveAttack(3, 0);
  expect(attack3).toBe(false);

  expect(shipAndLocation.ship.isSunk()).toBe(false);
});

test("an attack that lands in the water should not hit any ship", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);

  const shipAndLocation = testGameboard.shipsAndLocations[0];

  expect(shipAndLocation.coordsArray).toEqual([[0, 0]]);

  const attack3 = testGameboard.receiveAttack(3, 0);
  expect(attack3).toBe(false);

  expect(shipAndLocation.ship.isSunk()).toBe(false);
});

// Testing the allSunk method
test("a board with a one un-sunk ship should not register all ships sunk", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);

  expect(testGameboard.allSunk()).toBe(false);
});

test("a board with multiple un-sunk ships should not register all ships sunk", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);
  testGameboard.placeShip(6, 4, 4, false);

  expect(testGameboard.allSunk()).toBe(false);
});

test("a board with a single sunk ship and multiple un-sunk ships should not register all ships sunk", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);
  testGameboard.placeShip(3, 4, 4, false);

  testGameboard.receiveAttack(0, 0);

  expect(testGameboard.allSunk()).toBe(false);
});

test("a board with a single ship that is sunk should register all ships sunk", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);
  testGameboard.receiveAttack(0, 0);

  expect(testGameboard.allSunk()).toBe(true);
});

test("a board with multiple ships that are all sunk should register all ships sunk", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);
  testGameboard.placeShip(3, 4, 4, false);
  testGameboard.placeShip(4, 6, 6, true);

  testGameboard.receiveAttack(0, 0);

  testGameboard.receiveAttack(4, 4);
  testGameboard.receiveAttack(5, 4);
  testGameboard.receiveAttack(6, 4);

  testGameboard.receiveAttack(6, 6);
  testGameboard.receiveAttack(6, 7);
  testGameboard.receiveAttack(6, 8);
  testGameboard.receiveAttack(6, 9);

  expect(testGameboard.allSunk()).toBe(true);
});

// testing the placeAIShips method
test("a board with one ai ship should contain one ship", () => {
  const testGameboard = new Gameboard(10, 10);
  const shipsList = [1];
  testGameboard.placeShipsRandomly(shipsList);

  expect(testGameboard.shipsAndLocations.length).toBe(1);

  expect(testGameboard.shipsAndLocations[0].ship.length).toBe(1);
});

test("a board with four ai ships should contain four ships", () => {
  const testGameboard = new Gameboard(10, 10);
  const shipsList = [5, 3, 3, 2];
  testGameboard.placeShipsRandomly(shipsList);

  expect(testGameboard.shipsAndLocations.length).toBe(4);

  expect(testGameboard.shipsAndLocations[0].ship.length).toBe(5);
  expect(testGameboard.shipsAndLocations[1].ship.length).toBe(3);
  expect(testGameboard.shipsAndLocations[2].ship.length).toBe(3);
  expect(testGameboard.shipsAndLocations[3].ship.length).toBe(2);
});

test("a board with seven ai ships should contain six ships", () => {
  const testGameboard = new Gameboard(10, 10);
  const shipsList = [5, 4, 3, 2, 2, 1, 1];
  testGameboard.placeShipsRandomly(shipsList);

  expect(testGameboard.shipsAndLocations.length).toBe(7);

  expect(testGameboard.shipsAndLocations[0].ship.length).toBe(5);
  expect(testGameboard.shipsAndLocations[1].ship.length).toBe(4);
  expect(testGameboard.shipsAndLocations[2].ship.length).toBe(3);
  expect(testGameboard.shipsAndLocations[3].ship.length).toBe(2);
  expect(testGameboard.shipsAndLocations[4].ship.length).toBe(2);
  expect(testGameboard.shipsAndLocations[5].ship.length).toBe(1);
  expect(testGameboard.shipsAndLocations[5].ship.length).toBe(1);
});

// testing the isCoordOccupied method
test("a board with a no occupied coords should not return any of its coord occupied", () => {
  const testGameboard = new Gameboard(10, 10);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      expect(testGameboard.isCoordOccupied(i, j)).toBe(false);
    }
  }
});

test("a board with a single occupied coord should return that coord", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(1, 0, 0, false);
  expect(testGameboard.isCoordOccupied(0, 0)).toBe(true);
});

test("a board with multiple occupied coords should indicate each as occupied", () => {
  const testGameboard = new Gameboard(10, 10);
  testGameboard.placeShip(5, 4, 5, true);
  expect(testGameboard.isCoordOccupied(4, 5)).toBe(true);
  expect(testGameboard.isCoordOccupied(4, 6)).toBe(true);
  expect(testGameboard.isCoordOccupied(4, 7)).toBe(true);
  expect(testGameboard.isCoordOccupied(4, 8)).toBe(true);
  expect(testGameboard.isCoordOccupied(4, 9)).toBe(true);
});
