// Reference : https://www.w3schools.com/go/go_arithmetic_operators.php
package main
import ("fmt")

func main() {
	var (
		x int = 100
		y int = 50
		i float32 = 200.6
		j float32 = 156.7
	)

	fmt.Println("X + Y : ", addition(x, y))
	fmt.Println("I - J : ", subtraction(i, j))
	fmt.Println("I * J : ", multiplication(i, j))
	fmt.Println("X / Y : ", division(x, y))
	fmt.Println("X % Y : ", modulus(x, y))
	// Increment
	i++
	fmt.Println("I++   : ", i)
	// Decrement
	j--
	fmt.Println("J--   : ", j)
}

func addition(number1 int, number2 int) int {
	return number1 + number2
}

func subtraction(number1 float32, number2 float32) float32 {
	return number1 - number2
}

func multiplication(number1 float32, number2 float32) float32 {
	return number1 * number2
}

func division(number1 int, number2 int) int {
	return number1 / number2
}

func modulus(number1 int, number2 int) int {
	return number1 % number2
}
