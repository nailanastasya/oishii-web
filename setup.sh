#!/bin/bash

print_message() {
    echo "============================================"
    echo "$1"
    echo "============================================"
}

print_message "Updating and upgrading the system..."
sudo apt-get update && sudo apt-get upgrade -y

print_message "Installing Git..."
sudo apt-get install -y git

print_message "Installing Apache2..."
sudo apt-get install -y apache2

print_message "Installing required packages (ca-certificates, curl, gnupg)..."
sudo apt-get install -y ca-certificates curl gnupg

print_message "Creating keyring directory..."
sudo mkdir -p /etc/apt/keyrings

print_message "Adding NodeSource GPG key..."
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

NODE_MAJOR=20
print_message "Setting Node.js version to $NODE_MAJOR..."

print_message "Adding NodeSource repository..."
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

print_message "Updating package lists..."
sudo apt-get update

print_message "Installing Node.js..."
sudo apt-get install nodejs -y

print_message "Verifying Node.js and npm versions..."
node -v
npm -v

print_message "Running npm install (if package.json exists)..."
if [ -f package.json ]; then
    sudo npm install
else
    echo "No package.json found in the current directory. Skipping npm install."
fi

print_message "Installation of Git, Apache2, and Node.js completed!"
