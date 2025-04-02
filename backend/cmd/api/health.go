package main

import (
	"fmt"
	"net/http"
)

func (app *application) health(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Health Ok")
}
