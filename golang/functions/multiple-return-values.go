// Reference : https://www.w3schools.com/go/go_function_returns.php
package main
import ("fmt")

func main()  {
	var (
		myNumber1 int = 176
		myNumber2 int = 293
		myNumber3 int = 64
		myNumber4 int = 983
		myNumber5 int = 11
		myNumber6 int = 14
	)

	fmt.Println(additionMultiplication(myNumber1, myNumber2))

	// Assign into variables
	result3, result4 := additionMultiplication(myNumber3, myNumber4)
	fmt.Println("Result 3 : ", result3, " &  Result 4 : ", result4)

	// Omit one of the return values
	_, result5 := additionMultiplication(myNumber5, myNumber6)
	fmt.Println("Result 5 : ", result5)
	result6, _ := additionMultiplication(myNumber5, myNumber6)
	fmt.Println("Result 6 : ", result6)
}

func additionMultiplication(number1 int, number2 int) (additionResult int, multiplicationResult int) {
	additionResult = number1 + number2
	multiplicationResult = number1 * number2
	return
}
