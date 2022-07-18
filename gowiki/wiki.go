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
