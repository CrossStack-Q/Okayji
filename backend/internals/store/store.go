package store

import "context"

type Storage struct {
	Employee interface {
		Create(context.Context, *Employee) error
	}
}


