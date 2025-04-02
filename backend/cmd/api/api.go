package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type application struct {
	Config config
}

type config struct {
	addr string
}

func (app *application) mount() http.Handler {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)

	r.Route("/v1", func(r chi.Router) {
		r.Get("/health", app.health)
	})

	return r

}

func (app *application) run(mux http.Handler) error {

	srv := &http.Server{
		Addr:    app.Config.addr,
		Handler: mux,
	}

	log.Println("Server started at port :8080")

	return srv.ListenAndServe()

}
