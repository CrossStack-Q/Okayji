package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// type Employee struct {
// 	ID        primitive.ObjectID
// 	Name      string
// 	Email     string
// 	CreatedAt string
// }

type Employee struct {
	ID    primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Name  string             `bson:"name" json:"name"`
	Email string             `bson:"email" json:"email"`
	// CreatedAt string             `bson:"created_at" json:"created_at"`
}

var client *mongo.Client

func getEmployees(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var employees []Employee
	collection := client.Database("trial-1").Collection("employee")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var employee Employee
		cursor.Decode(&employee)
		employees = append(employees, employee)
	}
	json.NewEncoder(w).Encode(employees)
}

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	defer cancel()

	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	client, _ = mongo.Connect(ctx, clientOptions)

	http.HandleFunc("/employees", getEmployees)

	fmt.Println("Server started at :8080")

	log.Fatal(http.ListenAndServe(":8080", nil))

}
