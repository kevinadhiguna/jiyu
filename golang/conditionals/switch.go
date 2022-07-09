// Reference: https://www.w3schools.com/go/go_switch.php
package main
import ("fmt")

func main()  {
	os := "macos"

	switch os {
		case "android":
			fmt.Println("The operating system is owned by Google !")
		case "ios":
			fmt.Println("An operating system in iPhone")
		case "macos":
			fmt.Println("An operating system in Macbook")
		case "windows":
			fmt.Println("The operating system created by Microsoft !")
		default:
			fmt.Println("Oops, the OS was not available in list. Please check ")
	}
}
