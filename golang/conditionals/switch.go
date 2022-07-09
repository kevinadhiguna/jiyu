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
			fmt.Println("Oops, the OS was not available in  list...")
	}

	multicaseSwitch()
}

func multicaseSwitch() {
	region := "California"

	switch region {
		case "Tokyo", "Osaka":
			fmt.Println(region, "is in Japan")
		case "New York", "San Francisco", "California":
			fmt.Println(region, "belongs to the U.S.")
		case "Madrid":
			fmt.Println(region, "is a city in Spain")
		default:
			if (region != "") {
				fmt.Println(region, "is outside of Japan, U.S., and Spain")
			} else {
				fmt.Println("The region is not provided in database...")
			}
	}
}
