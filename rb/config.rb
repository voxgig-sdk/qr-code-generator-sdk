# QrCodeGenerator SDK configuration

module QrCodeGeneratorConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
                  "args" => {
                    "query" => [
                      {
                        "example" => "TEXT",
                        "kind" => "query",
                        "name" => "data",
                        "orig" => "data",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
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
                },
              ],
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
