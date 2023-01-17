package docklister

import (
	"github.com/docker/docker/api/types"
	"testing"
)

func TestListImages(t *testing.T) {
	app := NewApp()
	want := []types.ImageSummary{}
	msg, err := app.ListImages()
	t.Fatalf(`ListImages says %q, err says %q, wanted %q`, msg, err, want)
}
