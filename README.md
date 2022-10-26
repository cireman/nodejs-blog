# Blog API

- Front:
    - Get all posts
    - Get a specific
    - Get all categories
    - Get all the posts of a specific category
    - Get all the posts I have created
    - Get all the posts of a specific user
    - We can paginate the posts
    - CRUD actions on Posts
    - Create categories

```
json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data": [
            {
                "id": "a860986d-2570-4f39-afe6-c30fb74f350e",
                "title": "example",
                "content": "lorem ipsum",
                "createdBy": {
                      "id": "5b7cc060-3597-4946-bb9b-3a54e2098f82",
                      "name": "Sahid",
                      "email": "sahid.kick@academlo.com"
                },
                "category": {
                  "id": 4, 
                  "name": "Tecnologia"
                }
            }
        ]
    }

```
- /api/v1

        - /users
            - /me
            - /me/posts
            - /me/posts/:id
            - /:id


        - /categories
            - /:id
            - /:id/posts

        - /posts
            - /:id