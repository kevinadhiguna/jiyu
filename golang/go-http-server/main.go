package main

import (
	"net/http"
	"github.com/gowebexamples/http-server/api"
);

func main()  {
	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	w.Write([]byte("Welcome to Golang server !"))
	// });

	srv := api.NewServer();
	http.ListenAndServe(":8080", srv);
}
