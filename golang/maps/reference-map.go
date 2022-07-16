// Reference : https://www.w3schools.com/go/go_maps.php
package main
import ("fmt")

func main()  {
	var car1 = map[string]string{
		"brand": "Toyota",
		"name": "Prius",
		"year": "1997",
	}
	car2 := car1
	
	fmt.Println("car1 : ", car1)
	fmt.Println("car2 : ", car2)

	// Modify an element in the 'car2' map
	car2["name"] = "Supra"
	car2["year"] = "2021"

	fmt.Println("-- After change to 'car2' --")
	fmt.Println("car1 : ", car1)
	fmt.Println("car2 : ", car2)
}
