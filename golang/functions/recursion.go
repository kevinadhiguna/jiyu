// Reference : https://www.w3schools.com/go/go_function_recursion.php
package main
import ("fmt")

func main()  {
	countRosters(1)
}

func countRosters(number int) int {
	var	maxFieldPlayers int = 13

	if number > maxFieldPlayers {
		return 0
	}

	fmt.Println("number :", number)
	return countRosters(number+1)
}
