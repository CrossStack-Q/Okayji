package store

type Name struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

type Employee struct {
	ID         int64 `json:"id"`
	Name       Name
	Role       string `json:"role"`
	Department string `json:"department"`
	Email      string `json:"email"`
	Phone      string `json:"phone"`
	Manager    string `json:"manager"`
}


