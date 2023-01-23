package routes

import (
	"feris.dev/api/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/api/auth/register", controllers.Register)
	app.Post("/api/auth/login", controllers.Login)
	app.Get("/api/auth/user", controllers.User)
	app.Post("/api/auth/logout", controllers.Logout)
}
