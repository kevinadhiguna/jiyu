// Reference : https://www.w3schools.com/go/go_loops.php
package main
import ("fmt")

func main()  {
	players := [3]string{"Shohei Ohtani", "Aaron Judge", "Yordan Alvarez"}
	rating := [2]string{"elite", "awesome"}
	
	for i := 0; i < len(players); i++ {
		for j := 0; j < len(rating); j++ {
			fmt.Println(players[i], " is ", rating[j])
		}
	}
}
