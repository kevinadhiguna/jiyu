// Reference: https://go.dev/doc/articles/wiki/
package main

import (
	"fmt"
	"os"
	"log"
	"net/http"
)

type Page struct {
	Title string
	Body []byte
}

func main()  {
	p1 := &Page{Title: "MLB All Stars 2022", Body: []byte("Come and watch MLB All Stars 2022 in the Dodgers Stadium, Los Angeles !")}
	p1.save()

	p2, _ := loadPage("MLB All Stars 2022")
	// fmt.Println(p2.Body) 			// Output : [67 111 109 101 32 97 110 100 32 119 97 116 99 104 32 77 76 66 32 65 108 108 32 83 116 97 114 115 32 50 48 50 50 32 105 110 32 116 104 101 32 68 111 100 103 101 114 115 32 83 116 97 100 105 117 109 44 32 76 111 115 32 65 110 103 101 108 101 115 32 33]
	fmt.Println(string(p2.Body))  // Output : Come and watch MLB All Stars 2022 in the Dodgers Stadium, Los Angeles !

	// Serve wiki pages
	http.HandleFunc("/view", viewHandler)
	// Edit content
	http.HandleFunc("/edit", editHandler)
	log.Fatal(http.ListenAndServe(":8083", nil))
}

func (p *Page) save() error  {
	filename := p.Title + ".txt"
	return os.WriteFile(filename, p.Body, 0600) // '0600' is the permission 
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := os.ReadFile(filename)
	// Return two (in case of an error) :
	// (1) 'nil' as '*Page'
	// (2) 'err' as 'error'
	if err != nil {
		return nil, err
	}

	// Return two :
	// (1) '&Page{Title: title, Body: body}' as '*Page'
	// (2) 'nil' as 'error' (since this line is executed when no error occurrs)
	return &Page{Title: title, Body: body}, nil
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, _ := loadPage(title)
	fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
}

func editHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/edit/"):]
	p, err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	fmt.Fprintf(w, "<h1>Editing %s</h1>"+
		"<form action=\"/save/%s\" method=\"POST\">"+
		"<textarea name=\"body\">%s</textarea><br>"+
		"<input type=\"submit\" value=\"Save\">"+
		"</form>",
		p.Title, p.Title, p.Body)
}
