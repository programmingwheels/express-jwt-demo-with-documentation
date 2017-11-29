define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "Login User",
    "name": "Login",
    "group": "UserAPI",
    "parameter": {
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n  'email': 'leninlawrence@gmail.com',\n  'password':'password'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token generated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ',\n    'user':{\n       \"firstname\": \"Lenin\",\n       \"lastname\": \"Lawrence\",\n       \"email\": \"leninlawrence@gmail.com\",\n       \"_id\": \"5a1cdbd47362b905c06746a1\"\n     }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserDoesntExist",
            "description": "<p>400 User with same email ID already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "wrongPassword",
            "description": "<p>400 User with same email ID already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 input validation errors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserDoesntExist:",
          "content": "HTTP/1.1 400 Not Found\n{\n  'errmsg': \"user with entered email doesnt exist\"\n}",
          "type": "json"
        },
        {
          "title": "wrongPassword :",
          "content": "HTTP/1.1 400 Not Found\n{\n  'errmsg': \"wrong Password\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest:",
          "content": "   HTTP/1.1 400 BadRequest\n   {\n  \"status\": 400,\n  \"statusText\": \"Bad Request\",\n  \"errors\": [\n      {\n          \"field\": [\n              \"password\"\n          ],\n          \"location\": \"body\",\n          \"messages\": [\n              \"\\\"password\\\" is required\"\n          ],\n          \"types\": [\n              \"any.required\"\n          ]\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" \\\n     -d \"{'email':'lenin@gmail.com','password':'password'}\" \\\n     -X POST http://localhost:3000/api/v1/login",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./dist/routes/index.route.js",
    "groupTitle": "UserAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "Login User",
    "name": "Login",
    "group": "UserAPI",
    "parameter": {
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n  'email': 'leninlawrence@gmail.com',\n  'password':'password'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token generated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>info of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ',\n    'user':{\n       \"firstname\": \"Lenin\",\n       \"lastname\": \"Lawrence\",\n       \"email\": \"leninlawrence@gmail.com\",\n       \"_id\": \"5a1cdbd47362b905c06746a1\"\n     }\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserDoesntExist",
            "description": "<p>400 User with same email ID already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "wrongPassword",
            "description": "<p>400 User with same email ID already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 input validation errors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserDoesntExist:",
          "content": "HTTP/1.1 400 Not Found\n{\n  'errmsg': \"user with entered email doesnt exist\"\n}",
          "type": "json"
        },
        {
          "title": "wrongPassword :",
          "content": "HTTP/1.1 400 Not Found\n{\n  'errmsg': \"wrong Password\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest:",
          "content": "   HTTP/1.1 400 BadRequest\n   {\n  \"status\": 400,\n  \"statusText\": \"Bad Request\",\n  \"errors\": [\n      {\n          \"field\": [\n              \"password\"\n          ],\n          \"location\": \"body\",\n          \"messages\": [\n              \"\\\"password\\\" is required\"\n          ],\n          \"types\": [\n              \"any.required\"\n          ]\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" \\\n     -d \"{'email':'lenin@gmail.com','password':'password'}\" \\\n     -X POST http://localhost:3000/api/v1/login",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/index.route.js",
    "groupTitle": "UserAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/register",
    "title": "Register User",
    "name": "Register",
    "group": "UserAPI",
    "parameter": {
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n  'firstname': 'John',\n  'lastname': 'Doe',\n  'email': 'leninlawrence@gmail.com',\n  'password':'password'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"message\": \"A verification mail has been sent to your registered mail.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExist",
            "description": "<p>409 User with same email ID already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 input validation errors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserAlreadyExist 409:",
          "content": "HTTP/1.1 409 Not Found\n{\n  'errmsg': 'User with the same email ID already exists'\n}",
          "type": "json"
        },
        {
          "title": "BadRequest:",
          "content": "   HTTP/1.1 400 BadRequest\n   {\n  \"status\": 400,\n  \"statusText\": \"Bad Request\",\n  \"errors\": [\n      {\n          \"field\": [\n              \"password\"\n          ],\n          \"location\": \"body\",\n          \"messages\": [\n              \"\\\"password\\\" is required\"\n          ],\n          \"types\": [\n              \"any.required\"\n          ]\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" \\\n     -d \"{'firstname' : 'John', 'lastname': 'Doe Foo','email':'lenin@gmail.com','password':'password'}\" \\\n     -X POST http://localhost:3000/api/v1/register",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./dist/routes/index.route.js",
    "groupTitle": "UserAPI"
  },
  {
    "type": "post",
    "url": "/api/v1/register",
    "title": "Register User",
    "name": "Register",
    "group": "UserAPI",
    "parameter": {
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n  'firstname': 'John',\n  'lastname': 'Doe',\n  'email': 'leninlawrence@gmail.com',\n  'password':'password'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"message\": \"A verification mail has been sent to your registered mail.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExist",
            "description": "<p>409 User with same email ID already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 input validation errors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserAlreadyExist 409:",
          "content": "HTTP/1.1 409 Not Found\n{\n  'errmsg': 'User with the same email ID already exists'\n}",
          "type": "json"
        },
        {
          "title": "BadRequest:",
          "content": "   HTTP/1.1 400 BadRequest\n   {\n  \"status\": 400,\n  \"statusText\": \"Bad Request\",\n  \"errors\": [\n      {\n          \"field\": [\n              \"password\"\n          ],\n          \"location\": \"body\",\n          \"messages\": [\n              \"\\\"password\\\" is required\"\n          ],\n          \"types\": [\n              \"any.required\"\n          ]\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" \\\n     -d \"{'firstname' : 'John', 'lastname': 'Doe Foo','email':'lenin@gmail.com','password':'password'}\" \\\n     -X POST http://localhost:3000/api/v1/register",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/index.route.js",
    "groupTitle": "UserAPI"
  }
] });
