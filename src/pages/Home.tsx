import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Grid3X3, Images, CreditCard, Download, Upload, Bookmark, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen app-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
                <Bookmark className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Stash</h1>
            </div>
            <nav className="flex items-center gap-6">
              <Link to="/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
                My Bookmarks
              </Link>
              <Button asChild className="btn-hero">
                <Link to="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Your Twitter Bookmarks, 
              <br />Beautifully Organized
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your exported Twitter bookmarks into a stunning, searchable gallery. 
              View your saved tweets in multiple layouts and export them anytime.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/dashboard">
                  <Upload className="mr-2 h-5 w-5" />
                  Start Organizing
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/dashboard">
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Everything you need</h3>
            <p className="text-muted-foreground text-lg">
              Powerful features to manage and view your Twitter bookmarks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* View Modes */}
            <Card className="card card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <Grid3X3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Multiple View Modes</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Switch between grid, gallery, and card views to find the perfect layout for your bookmarks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-primary/20 rounded border border-primary/30"></div>
                  <div className="w-6 h-6 bg-primary/20 rounded border border-primary/30"></div>
                  <div className="w-6 h-6 bg-primary/20 rounded border border-primary/30"></div>
                </div>
              </CardContent>
            </Card>

            {/* Gallery View */}
            <Card className="card card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <Images className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Beautiful Gallery</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Experience your bookmarks in a stunning gallery view with smooth navigation and zoom features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-full h-8 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded"></div>
                  <div className="w-full h-8 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded"></div>
                </div>
              </CardContent>
            </Card>

            {/* Card View */}
            <Card className="card card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-foreground">Card Navigation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Browse through your bookmarks one by one with intuitive left and right navigation controls.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                  <div className="text-white text-sm">← Tweet Card →</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Privacy First</h4>
              <p className="text-muted-foreground">
                Your data stays with you. We don't store or track your bookmarks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground">
                Instant loading and smooth interactions for the best user experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Easy Export</h4>
              <p className="text-muted-foreground">
                Export your organized bookmarks in multiple formats whenever you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to organize your bookmarks?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Upload your Twitter bookmark export and start exploring your saved content in a whole new way.
            </p>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/dashboard">
                <Bookmark className="mr-2 h-5 w-5" />
                Get Started Free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8 px-6 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-6 bg-primary-gradient rounded flex items-center justify-center">
              <Bookmark className="h-4 w-4 text-white" />
            </div>
            <span className="text-foreground font-semibold">Stash</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Your Twitter bookmarks, beautifully organized.
          </p>
        </div>
      </footer>
    </div>
  );
}