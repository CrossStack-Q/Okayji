package main

import (
	"log"
)

func main() {
	cfg := config{
		addr: ":8080",
	}

	app := &application{
		Config: cfg,
	}

	log.Fatal(app.run(app.mount()))
}
