# QrCodeGenerator SDK configuration


def make_config():
    return {
        "main": {
            "name": "QrCodeGenerator",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.apgy.in",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "qrn": {},
            },
        },
        "entity": {
      "qrn": {
        "fields": [],
        "name": "qrn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "TEXT",
                      "kind": "query",
                      "name": "data",
                      "orig": "data",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 300,
                      "kind": "query",
                      "name": "size",
                      "orig": "size",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/qr/",
                "parts": [
                  "qr",
                ],
                "select": {
                  "exist": [
                    "data",
                    "size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
