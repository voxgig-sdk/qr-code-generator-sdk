-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "QrCodeGenerator",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.apgy.in",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["qrn"] = {},
      },
    },
    entity = {
      ["qrn"] = {
        ["fields"] = {},
        ["name"] = "qrn",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "TEXT",
                      ["kind"] = "query",
                      ["name"] = "data",
                      ["orig"] = "data",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 300,
                      ["kind"] = "query",
                      ["name"] = "size",
                      ["orig"] = "size",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/qr/",
                ["parts"] = {
                  "qr",
                },
                ["select"] = {
                  ["exist"] = {
                    "data",
                    "size",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
