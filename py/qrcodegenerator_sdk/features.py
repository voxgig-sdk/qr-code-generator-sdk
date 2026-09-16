# QrCodeGenerator SDK feature factory

from qrcodegenerator_sdk.feature.base_feature import QrCodeGeneratorBaseFeature
from qrcodegenerator_sdk.feature.ratelimit_feature import QrCodeGeneratorRatelimitFeature
from qrcodegenerator_sdk.feature.retry_feature import QrCodeGeneratorRetryFeature
from qrcodegenerator_sdk.feature.test_feature import QrCodeGeneratorTestFeature
from qrcodegenerator_sdk.feature.timeout_feature import QrCodeGeneratorTimeoutFeature


_FEATURES = {
    "base": lambda: QrCodeGeneratorBaseFeature(),
    "ratelimit": lambda: QrCodeGeneratorRatelimitFeature(),
    "retry": lambda: QrCodeGeneratorRetryFeature(),
    "test": lambda: QrCodeGeneratorTestFeature(),
    "timeout": lambda: QrCodeGeneratorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
