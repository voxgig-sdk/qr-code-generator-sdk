package = "voxgig-sdk-qr-code-generator"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/qr-code-generator-sdk.git"
}
description = {
  summary = "QrCodeGenerator SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["qr-code-generator_sdk"] = "qr-code-generator_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
