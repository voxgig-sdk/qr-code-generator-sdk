# QrCodeGenerator SDK configuration

module QrCodeGeneratorConfig
  def self.make_config
    {
      "main" => {
        "name" => "QrCodeGenerator",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.apgy.in",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "qrn" => {},
        },
      },
      "entity" => {
        "qrn" => {
          "fields" => [],
          "name" => "qrn",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "TEXT",
                        "kind" => "query",
                        "name" => "data",
                        "orig" => "data",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 300,
                        "kind" => "query",
                        "name" => "size",
                        "orig" => "size",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/qr/",
                  "parts" => [
                    "qr",
                  ],
                  "select" => {
                    "exist" => [
                      "data",
                      "size",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    QrCodeGeneratorFeatures.make_feature(name)
  end
end
