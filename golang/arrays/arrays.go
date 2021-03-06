// Reference : https://www.w3schools.com/go/go_arrays.php
package main
import ("fmt")

func main() {
	var marks = [7]int{99, 96, 93, 91, 90, 88, 100}
	otherMarks := [5]int{100, 99, 91, 93, 97}
  var students = [7]string{"john", "doe", "kai", "smith", "patrick", "michael", "noah"}

	fmt.Println("Marks : ", marks)
	fmt.Println("Other Marks : ", otherMarks)

  // Access an element of array
  fmt.Println("The first student : ", students[0])

	inferredArrays()
}

func inferredArrays() {
	// Arrays with inferred lengths
	var teachers = [...]string{"nolan", "erica", "mike", "jessica"}
	assistantTeachers := [...]string{"machado", "rebecca", "jared", "May"}

	fmt.Println("Teachers : ", teachers)
	fmt.Println("Assistant Teachers : ", assistantTeachers)
}
