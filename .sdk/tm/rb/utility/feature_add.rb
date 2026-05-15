# QrCodeGenerator SDK utility: feature_add
module QrCodeGeneratorUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
