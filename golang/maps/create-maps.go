// Reference : https://www.w3schools.com/go/go_maps.php
package main
import ("fmt")

func main()  {
	var bestPlayersUnder24 = map[string]string{
		"name": "Juan Soto",
		"club": "Washington Nationals",
	}
	NLrookieRank2022 := map[string]int{
		"Spencer Strider": 1,
		"MacKenzie Gore": 2,
		"Hunter Greene": 3,
	}

	fmt.Println("Best Player under 24 : ", bestPlayersUnder24)
	fmt.Println("MLB NL ROTY 2022 rank : ", NLrookieRank2022)
}
