
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.apgy.in',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      qrn: {
      },

    }
  }


  entity = {
    "qrn": {
      "fields": [],
      "name": "qrn",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "TEXT",
                    "kind": "query",
                    "name": "data",
                    "orig": "data",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 300,
                    "kind": "query",
                    "name": "size",
                    "orig": "size",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/qr/",
              "parts": [
                "qr"
              ],
              "select": {
                "exist": [
                  "data",
                  "size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

