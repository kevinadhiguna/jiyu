package main
import ("fmt")

func main()  {
	var (
		obp float32 = 0.368
		slg float32 = 0.786
	)
	myOps := calculateOps(obp, slg)
	fmt.Println("My OPS :", myOps)
}

func calculateOps(obp float32, slg float32) (ops float32)  {
	ops = obp + slg
	return
}
