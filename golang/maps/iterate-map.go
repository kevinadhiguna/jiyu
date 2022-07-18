// Reference : https://www.w3schools.com/go/go_maps.php
package main
import ("fmt")

func main()  {
	ALcentralStandings := map[string]int{
		"Minnesota Twins": 1,
		"Cleveland Guardians": 2,
		"Chicago White Sox": 3,
		"Detroit Tigers": 4,
		"Kansas City Royals": 5,
	}

	fmt.Println("[ Loop with no order ]")
	// However this does not iterate map in a specific order (loop with no order)
	for key, value := range ALcentralStandings {
		fmt.Println(key, value)
	}

	fmt.Println("-----------")

	// Defining order
	var order []string
	order = append(order, 
		"Minnesota Twins", 
		"Cleveland Guardians", 
		"Chicago White Sox", 
		"Detroit Tigers", 
		"Kansas City Royals")

	fmt.Println("[ Loop with order ]")
	for _, value2 := range order {
		fmt.Println(value2, ALcentralStandings[value2])
	}
}
