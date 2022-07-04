// Reference : https://www.w3schools.com/go/go_slices_modify.php
package main
import ("fmt")

func main()  {
	var cyyoung = [3]string{"Shane McClanahan", "Dylan Cease", "Shohei Ohtani"}
	fmt.Println("Cy Young 2022 (before modification) : ", cyyoung)
	
	// Change an element of a slice
	cyyoung[1] = "Justin Verlander"
	fmt.Println("Cy Young 2022 (after modification) : ", cyyoung)
}
