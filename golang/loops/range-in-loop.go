// Reference : https://www.w3schools.com/go/go_loops.php
package main
import ("fmt")

func main()  {
	display_top3mvp()
	
	fmt.Println("\n")
	
	display_top3cyyoung()

	fmt.Println("\n")

	display_top3managers()

	fmt.Println("\n")

	display_top2insideParkHomeruns()
}

func display_top3mvp()  {
	top3mvp := []string{"Shohei Ohtani", "Aaron Judge", "Yordan Alvarez"}
	
	fmt.Println("Top 3 AL MVP 2022 :")
	for index, value := range top3mvp {
		fmt.Println(index+1, value)
	}
	// Output :
	// Top 3 AL MVP 2022 :
	// 1 Shohei Ohtani
	// 2 Aaron Judge
	// 3 Yordan Alvarez
}

func display_top3cyyoung()  {
	top3cyyoung := []string{"Shane McClanahan", "Justin Verlander", "Kevin Gausman"}
	
	fmt.Println("Top 3 AL Cy Young 2022 :")
	for key, cyyoung_players := range top3cyyoung {
		fmt.Println(key+1, cyyoung_players)
	}
	// Output :
	// Top 3 AL Cy Young 2022 :
	// 1 Shane McClanahan
	// 2 Justin Verlander
	// 3 Kevin Gausman
}

func display_top3managers()  {
	top3managers := []string{"Kevin Cash", "Aaron Boone", "Charlie Montoyo"}

	fmt.Println("Top 3 AL Managers 2022 :")
	// ONLY shows VALUES without indices or keys
	for _, managers := range top3managers {
		fmt.Println(managers)
	}
	// Output :
	// Top 3 AL Managers 2022 :
	// Kevin Cash
	// Aaron Boone
	// Charlie Montoyo
}

func display_top2insideParkHomeruns()  {
	top2iphr := []string{"Seiya Suzuki", "Kevin Kiermaier"}

	fmt.Println("Top 2 Inside Park Homeruns 2022 :")
	// ONLY shows KEYS without values
	for keys, _ := range top2iphr {
		fmt.Println(keys+1)
	}
	// Output :
	// Top 2 Inside Park Homeruns 2022 :
	// 1
	// 2
}
