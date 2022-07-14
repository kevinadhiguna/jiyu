// Reference : https://www.w3schools.com/go/go_function_recursion.php
package main
import ("fmt")

func main()  {
	var factorialNumber int = 7

	fmt.Println("Factorial", factorialNumber, ":", factorialRecursion(factorialNumber))
}

func factorialRecursion(number int) (result int)  {
	if number > 0 {
		result = number * factorialRecursion(number-1)
	} else {
		// 0! = 1 (Reference: https://www.zero-factorial.com/whatis.html)
		result = 1
	}
	return
}
