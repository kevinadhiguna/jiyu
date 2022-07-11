package main
import ("fmt")

func main()  {
	for i := 0; i < 100; i +=10 {
		fmt.Println("i = ", i)
	}
	// i =  0
	// i =  10
	// i =  20
	// i =  30
	// i =  40
	// i =  50
	// i =  60
	// i =  70
	// i =  80
	// i =  90

	continueStatement()
	breakStatement()
}

func continueStatement()  {
	for j := 0; j < 10; j++ {
		if j == 7 {
			continue // j = 7 is skipped
		}
		fmt.Println("j = ", j)
		// j =  0
		// j =  1
		// j =  2
		// j =  3
		// j =  4
		// j =  5
		// j =  6
		// j =  8
		// j =  9
	}
}

func breakStatement()  {
	for k := 1; k < 500; k++ {
		if k == 6 {
			break // Gets out of this looping if k = 6
		}
		fmt.Println("k = ", k)
		// k =  1
		// k =  2
		// k =  3
		// k =  4
		// k =  5
	}
}
