// Reference : https://www.w3schools.com/go/go_struct.php
package main
import ("fmt")

type Player struct {
	name string
	club string
	gamesPlayed int
}

func main()  {
	var (
		mlbPlayer1 Player
		mlbPlayer2 Player
	)

	mlbPlayer1.name = "Taylor Ward"
	mlbPlayer1.club = "Los Angeles Angels"
	mlbPlayer1.gamesPlayed = 160

	fmt.Println("MLB Player 1 - name : ", mlbPlayer1.name)
	fmt.Println("MLB Player 1 - club : ", mlbPlayer1.club)
	fmt.Println("MLB Player 1 - gamesPlayed : ", mlbPlayer1.gamesPlayed)

	fmt.Println("------------")

	mlbPlayer2.name = "Freddie Freeman"
	mlbPlayer2.club = "Los Angeles Dodgers"
	mlbPlayer2.gamesPlayed = 159

	fmt.Println("MLB Player 2 - name : ", mlbPlayer2.name)
	fmt.Println("MLB Player 2 - club : ", mlbPlayer2.club)
	fmt.Println("MLB Player 2 - gamesPlayed : ", mlbPlayer2.gamesPlayed)

	fmt.Println("------------")

	displayPlayer(mlbPlayer1)
	displayPlayer(mlbPlayer2)
}

func displayPlayer(player Player)  {
	fmt.Println("-- Display details using a function --")
	fmt.Println("Name : ", player.name)
	fmt.Println("Club : ", player.club)
	fmt.Println("Games Played : ", player.gamesPlayed)
}
