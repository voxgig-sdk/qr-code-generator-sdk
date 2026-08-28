# frozen_string_literal: true

# Typed models for the QrCodeGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Qrn entity data model.
class Qrn
end

# Request payload for Qrn#load.
#
# @!attribute [rw] data
#   @return [String]
#
# @!attribute [rw] size
#   @return [Integer]
QrnLoadMatch = Struct.new(
  :data,
  :size,
  keyword_init: true
)

