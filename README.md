# Blog project

Here you can find the installation and setup for Laravel backend and React frontend.

## Short task descriprion:
Please implement a simple blog system using Laravel 10. The application should have the following features:
- User registration/authentication: Users should be able to register an account and log in. Handle authentication using Laravel’s built-in capabilities.
- CRUD operations for blog posts: Users should be able to Create, Read, Update, and Delete their own blog posts. Each blog post should include a title, body content, creation date and time, and the author’s name.
- Comments: Users should be able to post comments on blog posts. Users can only post a comment if they are logged in, and they may only delete their own comments.
- Categories: Users should have the ability to assign categories to their posts. A post can have many categories and a category can belong to many posts (Many-to-Many relationship).
- Search function: Users should be able to conduct a keyword search on blog posts (post title and body)
## Prerequisites
- Node.js (https://nodejs.org/en).
- Docker (https://nodejs.org/en](https://www.docker.com/products/docker-desktop/).

## First steps:
- Download project for Github or open in Github Desktop
- Locate project


## Installation and setup for backend (Folder: laravel-backend)

**Install vendors (If composer is not installed):**
```bash 
composer install
```
## Open Laravels root folder and run these comands in termoinal:
**Build Docker container:**
```bash 
./vendor/bin/sail up
```

**Create databases:**
```bash 
./vendor/bin/sail php artisan migrate
```

**Seed databases:**
```bash 
./vendor/bin/sail php artisan db:seed
```

**Link storage:**
```bash
./vendor/bin/sail php artisan storage:link
```
## Default users credentials:
### 1.
- email: ```jonh@gmail.com```
- password: ```cheeseBurger123```
### 2.
- email: ```jane@gmail.com```
- password: ```test1234```
### 3.
- email: ```janka@gmail.com```
- password: ```iamthebest```


