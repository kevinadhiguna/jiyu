package main
import ("fmt")

func main()  {
	for i := 0; i < 100; i +=10 {
		fmt.Println("i = ", i)
	}

	continueStatement()
	breakStatement()
}

func continueStatement()  {
	for j := 0; j < 10; j++ {
		if j == 7 {
			continue
		}
		fmt.Println("j = ", j)
	}
}

func breakStatement()  {
	for k := 1; k < 500; k++ {
		if k == 6 {
			break
		}
		fmt.Println("k = ", k)
	}
}
