// Reference : https://www.w3schools.com/go/go_maps.php
package main
import ("fmt")

func main()  {
	// Note: 
	// - The make()function is the right way to create an empty map. 
	// - If you make an empty map in a different way and write to it, it will causes a runtime panic.
	var map1 = make(map[string]string)
	var map2 map[string]string

	fmt.Println("Map 1 : ", map1) // map[]
	fmt.Println("Is Map 1 empty : ", map1 == nil) // false
	fmt.Println("Map 2 : ", map2) // map[]
	fmt.Println("Is Map 2 empty : ", map2 == nil) // true
}
