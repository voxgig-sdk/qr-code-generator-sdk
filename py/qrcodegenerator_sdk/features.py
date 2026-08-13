# QrCodeGenerator SDK feature factory

from qrcodegenerator_sdk.feature.base_feature import QrCodeGeneratorBaseFeature
from qrcodegenerator_sdk.feature.test_feature import QrCodeGeneratorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: QrCodeGeneratorBaseFeature(),
        "test": lambda: QrCodeGeneratorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
