// Reference : https://www.w3schools.com/go/go_maps.php
package main
import ("fmt")

func main()  {
	var dodgers = make(map[string]string)

	dodgers["bestPlayer"] = "Mookie Betts"
	dodgers["bestPitcher"] = "Walker Buehler"

	fmt.Println("Dodgers' best player : ", dodgers["bestPlayer"])
	fmt.Println("Dodgers' best pitcher : ", dodgers["bestPitcher"])

	// Adding an element in a map
	dodgers["bestReliever"] = "Craig Kimbrel"
	fmt.Println("Dodgers' best reliever : ", dodgers["bestReliever"])

	// Updating an element in a map
	dodgers["bestPitcher"] = "Tony Gonsolin"
	fmt.Println("Dodgers' current best pitcher : ", dodgers["bestPitcher"])

	// Removing an element in a map
	delete(dodgers, "bestReliever")
	fmt.Println("Dodgers : ", dodgers) // <- "bestReliever" element should not be present
}
