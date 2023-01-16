package main

import (
	"context"
	"fmt"
	"github.com/docker/docker/api/types"
	"github.com/moby/moby/client"
)

// App struct
type App struct {
	ctx       context.Context
	dockerCtx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{dockerCtx: context.Background()}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) ListImages() ([]types.ImageSummary, error) {
	var cli, err = client.NewClientWithOpts()
	var dockerOpts = types.ImageListOptions{}

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	imageSummaries, err := cli.ImageList(a.dockerCtx, dockerOpts)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return imageSummaries, nil
}
