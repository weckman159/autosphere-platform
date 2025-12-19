{ pkgs, ... }: {
  # Which nixpkgs channel to use - stable version for reliability
  channel = "stable-24.05";

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.git
    pkgs.curl
  ];

  # Sets environment variables in the workspace
  env = {
    NEXT_PUBLIC_APP_NAME = "AutoSphere";
  };

  # IDE extensions configuration
  idx = {
    # Search for the extensions you want on https://open-vsx.org/
    extensions = [
      # TypeScript and React development
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "bradlc.vscode-tailwindcss"
      "dsznajder.es7-react-js-snippets"
      
      # Next.js specific
      "Prisma.prisma"
      
      # Code quality
      "usernamehw.errorlens"
      "streetsidesoftware.code-spell-checker"
      
      # Git integration
      "eamodio.gitlens"
      
      # Utilities
      "christian-kohler.path-intellisense"
      "formulahendry.auto-rename-tag"
    ];

    # Workspace settings
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        install-deps = "npm install";
      };
      
      # Runs when the workspace is (re)started
      onStart = {
        # Start dev server automatically
        # dev-server = "npm run dev";
      };
    };

    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          # Command to start your dev server
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
          # Optional: specify working directory
          # cwd = ".";
          env = {
            # Environment variables for the preview
            NODE_ENV = "development";
          };
        };
      };
    };
  };
}