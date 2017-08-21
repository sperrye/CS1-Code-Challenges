/*
 * For this coding challenge you will be recreating low level logic gates.
 * You will first create the NAND function and then you will create
 * NOT, OR, AND, and XOR all using the NAND function that you created.
 * Implement NAND however you would like and then use NAND to implement the
 * other logic gates.
 * See the link below for the truth tables for these logic gates.
 * https://en.wikipedia.org/wiki/NAND_logic#NAND
 * All functions should return a 1 for true and a 0 for false.
 */

const NAND = (x, y) => {
	// You can use whatever JS operators that you would like: &&, ||, !
  if x is true and y is true return false
  return true
};

const NOT = (n) => {
	// Do not use !, &&, or ||
  if n is true return false
  if n is false return true
};

const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
  if x is true and y is true return true;
  return false
};

const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  if x is true or y is true return true
  return false
};

const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
  if x is true and y is false or if x is false and y is true
  return true, else return false;
};
