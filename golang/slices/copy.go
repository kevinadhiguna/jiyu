// Reference : https://www.w3schools.com/go/go_slices_modify.php

// PROBLEM & SOLUTION :
// When using slices, Go loads all the underlying elements into the memory.
// If the array is large and you need only a few elements, it is better to copy those elements using the copy() function.
// The copy() function creates a new underlying array with only the required elements for the slice. This will reduce the memory used for the program. 

package main
import ("fmt")

func main()  {
	RBInumbers := []int{135, 128, 127, 122, 111, 108, 107, 103, 100, 98, 97, 93, 92, 90, 90}
	fmt.Println("RBI numbers : ", RBInumbers)
	fmt.Println("RBI numbers (length) : ", len(RBInumbers))
	fmt.Println("RBI numbers (capacity) : ", cap(RBInumbers))

	RBInumbers2 := RBInumbers[:len(RBInumbers)-8]
	RBInumbers2Copy := make([]int, len(RBInumbers2))
	copy(RBInumbers2Copy, RBInumbers2)

	fmt.Println("RBI numbers 2 Copy : ", RBInumbers2Copy)
	fmt.Println("RBI numbers 2 Copy (length) : ", len(RBInumbers2Copy))
	fmt.Println("RBI numbers 2 Copy (capacity) : ", cap(RBInumbers2Copy))
}
