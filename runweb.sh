#!/bin/bash

print_message() {
    echo "============================================"
    echo "$1"
    echo "============================================"
}

print_message "Enabling Apache2 rewrite module..."
sudo a2enmod rewrite

print_message "Restarting Apache2 service..."
sudo systemctl restart apache2

print_message "Running npm development server..."
sudo npm run dev

print_message "All commands executed successfully!"
