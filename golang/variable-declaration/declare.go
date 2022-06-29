// Reference : https://www.w3schools.com/go/go_variables.php
package main

import ("fmt")

func main() {
	// (1) -> var <variable_name> <type> = <value>
	var firstname string = "john"

	// (2) -> <variable_name> := <value>
	// In this case, the type of variable is inferred from the value
	lastname := "doe"

	// The (1) way without declaring the type of variable
	var fullname = firstname + " " + lastname

	fmt.Println("First name :", firstname) // First name : john
	fmt.Println("Last  name :", lastname)  // Last name : doe
	fmt.Println("Full  name :", fullname)  // Full name : john doe

	assignmentAfterDeclaration()

	varsWithoutValues();

	multipleVarsDeclartion()
}

func varsWithoutValues() {
	var integerVar int
	var stringVar string
	var boolVar bool

	fmt.Println("integer variable without value :", integerVar) // integer variable without value : 0
	fmt.Println("string  variable without value :", stringVar)  // string variable without value : ""
	fmt.Println("boolean variable without value :", boolVar)    // boolean variable without value : false
}

func assignmentAfterDeclaration() {
	var familyname string
	familyname = "smith"

	fmt.Println("Family name :", familyname) // Family name : smith
}

// varOutsideFunc := 100 // <- ERROR since ':=' is used outside of a function
var varOutsideFunc = 101
var varOutsideFunc2 int = 102

func multipleVarsDeclartion() {
	var (
		player string = "Shohei Ohtani"
		club string = "Los Angeles Dodgers"
	)

	fmt.Println(player + " of " + club + " is the 2024 MLB National League MVP")
}
