// Reference : https://www.w3schools.com/go/go_function_returns.php
package main
import ("fmt")

func main()  {
	fmt.Println(mlbClubPlayer("Pete Alonso", "Mets"))
	fmt.Println(mlbClubManager("Dave Roberts", "Dodgers"))
}

func mlbClubPlayer(player string, club string) (status string)  {
	status = player + " plays for " + club
	return
}

func mlbClubManager(manager string, club string) (inCharge string)  {
	inCharge = manager + " is the " + club + " manager"
	return inCharge
}
