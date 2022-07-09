// Reference: https://www.w3schools.com/go/go_elseif_statement.php
package main
import ("fmt")

func main()  {
	minimumMark := 75
	mark := 97

	if (mark > minimumMark) {
		fmt.Println("The student's mark is bigger than minimum mark")
	} else if (mark == minimumMark) {
		fmt.Println("The student's mark is equal to minimum mark")
	} else {
		fmt.Println("The student's mark is less than minimum mark")
	}

	if (mark >= minimumMark) {
		fmt.Println("Result : The student passed the exam")
	} else {
		fmt.Println("Result : The student did not pass the exam")
	}
}
