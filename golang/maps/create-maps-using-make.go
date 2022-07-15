// Reference : https://www.w3schools.com/go/go_maps.php
package main
import ("fmt")

func main()  {
	var strikeouts = make(map[string]int)
	fmt.Println("Strikeouts (should be empty) :", strikeouts) // Should be empty

	strikeouts["Shane McClanahan"] = 147
	strikeouts["Dylan Cease"] = 142
	strikeouts["Corbin Burnes"] = 135
	fmt.Println("Strikeouts : ", strikeouts) // Should be filled

	win := make(map[string]string)
	fmt.Println("Win (should be empty) :", win)

	win["Tony Gonsolin"] = "Los Angeles Dodgers"
	win["Justin Verlander"] = "Houston Astros"
	win["Kyle Wright"] = "Atlanta Braves"
	fmt.Println("Win : ", win)
}
