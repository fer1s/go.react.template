package database

import (
	"feris.dev/api/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:password@/goapi"), &gorm.Config{})
	if err != nil {
		panic("could not connect with mysql")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
