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
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "TEXT",
                        "kind" => "query",
                        "name" => "data",
                        "orig" => "data",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 300,
                        "kind" => "query",
                        "name" => "size",
                        "orig" => "size",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                  "index$" => 0,
                },
              ],
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
