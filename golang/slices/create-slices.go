package main
import ("fmt")

func main()  {
	// A normal Array
	var top5mvp = [5]string{"shohei", "judge", "ramirez", "alvarez", "trout"}
	fmt.Println("Top 5 MVP (a normal array) : ", top5mvp)

	// A slice
	top3mvp := top5mvp[0:3]
	fmt.Println("Top 3 MVP (sliced from the top 5 MVP) : ", top3mvp)
	fmt.Println("Top 3 MVP Length    : ", len((top3mvp)))
	fmt.Println("Top 3 MVP Capacity  : ", cap((top3mvp)))

	createSliceWithMakeFunc()
}

func createSliceWithMakeFunc()  {
	// If the capacity parameter is not defined, it will be equal to length.
	top2mvps := make([]string, 2)
	fmt.Println("Top 2 MVP (created with make function) : ", top2mvps)
	fmt.Println("Top 2 MVP Length   : ", len(top2mvps))
	fmt.Println("Top 2 MVP Capacity : ", cap(top2mvps))
}
