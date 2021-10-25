package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"
);

type Welcome struct {
	Sale string
	Time string
}

func main() {
	welcome := Welcome{"Sale begins now", time.Now().Format(time.Stamp)}
	template := template.Must(template.ParseFiles("template/template.html"));

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if sale := r.FormValue("sale"); sale != "" {
			welcome.Sale = sale;
		}

		if err := template.ExecuteTemplate(w, "template.html", welcome); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError);
		}
	})

	fmt.Println(http.ListenAndServe(":8000", nil));
}
