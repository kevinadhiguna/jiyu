// Reference: https://go.dev/doc/articles/wiki/
package main

import (
	"fmt"
	"os"
)

type Page struct {
	Title string
	Body []byte
}

func (p *Page) save() error  {
	filename := p.Title + ".txt"
	return os.WriteFile(filename, p.Body, 0600) // '0600' is the permission 
}

func loadPage(title string) *Page {
	filename := title + ".txt"
	body, _ := os.ReadFile(filename)
	return &Page{Title: title, Body: body}
}
