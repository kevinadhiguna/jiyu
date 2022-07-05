// Reference : https://www.w3schools.com/go/go_slices_modify.php
package main
import ("fmt")

func main()  {
	var cyyoung = [3]string{"Shane McClanahan", "Dylan Cease", "Shohei Ohtani"}
	fmt.Println("Cy Young 2022 (before modification) : ", cyyoung)
	
	// Change an element of a slice
	cyyoung[1] = "Justin Verlander"
	fmt.Println("Cy Young 2022 (after modification) : ", cyyoung)

	appendToSlice()
}

func appendToSlice()  {
	mostRBI := []string{"Shohei Ohtani", "Jose Ramirez", "Aaron Judge"}
	fmt.Println("Most RBI : ", mostRBI)
	fmt.Println("Most RBI (length) : ", len(mostRBI))
	fmt.Println("Most RBI (capacity) : ", cap(mostRBI))

	mostRBI = append(mostRBI, "Vladimir Guerrero Jr.", "Mike Trout")
	fmt.Println("Most RBI (after being appended) : ", mostRBI)
	fmt.Println("Most RBI (length, after being appended) : ", len(mostRBI))
	fmt.Println("Most RBI (capacity, after being appended) : ", cap(mostRBI))	
}
