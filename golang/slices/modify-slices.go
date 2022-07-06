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
	appendOneSliceToAnotherSlice()
	changeLengthOfSlice()
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

func appendOneSliceToAnotherSlice() {
	highestOPS := []string{"Shohei Ohtani", "Aaron Judge", "Mike Trout"}
	highestWAR := []string{"Shohei Ohtani", "Mike Trout", "Rafael Devers"}

	bestOffense := append(highestOPS, highestWAR...)
	fmt.Println("Best Offense : ", bestOffense)
	fmt.Println("Best Offense (Length) : ", len(bestOffense))
	fmt.Println("Best Offense (Capacity) : ", cap(bestOffense))

	// lowestERA := []float32{2.32, 2.34, 2.78}
	// bestPlayers := append(highestWAR, lowestERA) // <- ERROR : cannot use lowestERA (variable of type []float32) as string value in argument to append
}

func changeLengthOfSlice()  {
	data := [6]float32{13.78, 13.44, 11.23, 11.08, 10.99, 10.50}
	kPer9 := data[1:4]
	fmt.Println("K/9 : ", kPer9)
	fmt.Println("K/9 (length) : ", len(kPer9))
	fmt.Println("K/9 (capacity) : ", cap(kPer9))

	kPer9 = data[2:5]
	fmt.Println("K/9 (modified) : ", kPer9)
	fmt.Println("K/9 (modified - length) : ", len(kPer9))
	fmt.Println("K/9 (modified - capacity) : ", cap(kPer9))
}
