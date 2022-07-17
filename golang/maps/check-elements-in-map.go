// Reference : https://www.w3schools.com/go/go_maps.php
package main
import("fmt")

func main() {
	var theOutfielders = map[string]string{
		"outfielder1": "Mike Trout", 
		"outfielder2": "Bryce Harper", 
		"outfielder3": "Ronald Acuna jr.", 
		"outfielder4": "Luis Robert",
	}

	val1, ok1 := theOutfielders["outfielder1"]
	val2, ok2 := theOutfielders["outfielder2"]
	val3, ok3 := theOutfielders["outfielder3"]
	_, ok4 := theOutfielders["outfielder4"] // Only checking for existing key, not its value
	val5, ok5 := theOutfielders["outfielder5"]

	fmt.Println("What is the value of 'outfielder1' ? :", val1)
	fmt.Println("What is the value of 'outfielder2' ? :", val2)
	fmt.Println("What is the value of 'outfielder3' ? :", val3)
	// fmt.Println("What is the value of 'outfielder4' ? :", val4) // <- (Error) undeclared name: val4
	fmt.Println("What is the value of 'outfielder5' ? :", val5) // <- does not exist

	fmt.Println("----------")

	fmt.Println("Does the 'outfielder1' exist ? :", ok1)
	fmt.Println("Does the 'outfielder2' exist ? :", ok2)
	fmt.Println("Does the 'outfielder3' exist ? :", ok3)
	fmt.Println("Does the 'outfielder4' exist ? :", ok4)
	fmt.Println("Does the 'outfielder5' exist ? :", ok5) // false
}
