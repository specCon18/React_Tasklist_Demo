{
  description = "A Node.js project with Nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11"; # Adjust the nixpkgs version as needed
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_21 # Choose the Node.js version suitable for your project
            nodePackages_latest.pnpm
          ];

          # Optional: Set environment variables your project needs
          # shellHook = ''
          #   export NODE_ENV=development
          # '';
        };
      }
    );
}
