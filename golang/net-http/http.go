// Reference: https://go.dev/doc/articles/wiki/
package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s. ", r.URL.Path[1:])
	fmt.Fprintf(w, "%s is amazing !", r.URL.Path[1:])
}

func main()  {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8085", nil))
}

// -- Example --
// URL : http://localhost:8085/baseball
// Response : "Hi there, I love baseball. baseball is amazing !"
